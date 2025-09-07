package skills

import (
	"context"
	"strings"
	"testing"

	"go.uber.org/zap"
)

func TestSearchN8NDocsHandler(t *testing.T) {
	logger := zap.NewNop()
	skill := &SearchN8NDocsSkill{
		logger: logger,
	}

	tests := []struct {
		name        string
		args        map[string]any
		wantErr     bool
		expectMatch string
	}{
		{
			name: "Search for webhook node",
			args: map[string]any{
				"query": "webhook",
			},
			wantErr:     false,
			expectMatch: "Webhook",
		},
		{
			name: "Search for http node",
			args: map[string]any{
				"query": "http",
			},
			wantErr:     false,
			expectMatch: "http",
		},
		{
			name: "Search with node_type filter",
			args: map[string]any{
				"query":     "telegram",
				"node_type": "telegram",
			},
			wantErr:     false,
			expectMatch: "telegram",
		},
		{
			name: "Search with category filter",
			args: map[string]any{
				"query":    "trigger",
				"category": "trigger",
			},
			wantErr:     false,
			expectMatch: "Trigger",
		},
		{
			name: "Search langchain nodes",
			args: map[string]any{
				"query":    "langchain",
				"category": "langchain",
			},
			wantErr:     false,
			expectMatch: "langchain",
		},
		{
			name: "Empty query",
			args: map[string]any{
				"query": "",
			},
			wantErr: true,
		},
		{
			name:    "Missing query",
			args:    map[string]any{},
			wantErr: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := skill.SearchN8NDocsHandler(context.Background(), tt.args)

			if (err != nil) != tt.wantErr {
				t.Errorf("SearchN8NDocsHandler() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			if !tt.wantErr && tt.expectMatch != "" {
				if !strings.Contains(strings.ToLower(result), strings.ToLower(tt.expectMatch)) {
					t.Errorf("SearchN8NDocsHandler() result does not contain expected match %q, got: %q", tt.expectMatch, result)
				}
			}
		})
	}
}

func TestSearchDocumentation(t *testing.T) {
	logger := zap.NewNop()
	skill := &SearchN8NDocsSkill{
		logger: logger,
	}

	results, err := skill.searchDocumentation("webhook", "", "")
	if err != nil {
		t.Fatalf("searchDocumentation() unexpected error: %v", err)
	}

	if len(results) == 0 {
		t.Error("searchDocumentation() expected at least one result for 'webhook' query")
	}

	found := false
	exactMatch := false
	for _, result := range results {
		t.Logf("Result: Name=%q, Filename=%q", result.Name, result.Filename)
		if strings.Contains(strings.ToLower(result.Filename), "webhook") {
			found = true
			if result.Filename == "webhook.md" {
				exactMatch = true
			}
		}
	}
	if !found {
		t.Errorf("searchDocumentation() did not find any webhook-related nodes in %d results", len(results))
	}
	if !exactMatch {
		t.Logf("Note: Found webhook-related nodes but not exact webhook.md in top results")
	}

	results, err = skill.searchDocumentation("", "", "trigger")
	if err != nil {
		t.Fatalf("searchDocumentation() unexpected error with category filter: %v", err)
	}

	if len(results) == 0 {
		t.Error("searchDocumentation() expected results for category 'trigger'")
	}

	results, err = skill.searchDocumentation("trigger", "", "")
	if err != nil {
		t.Fatalf("searchDocumentation() unexpected error: %v", err)
	}

	if len(results) > 10 {
		t.Errorf("searchDocumentation() returned %d results, expected max 10", len(results))
	}
}

func TestParseDocumentationFile(t *testing.T) {
	content := `# Webhook

## Description

Starts the workflow when a webhook is called

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

` + "```yaml" + `
nodes:
  - id: webhook-1
    name: Webhook
    type: n8n-nodes-base.webhook
    parameters:
      httpMethod: POST
      path: /webhook
` + "```" + `

## Parameters

### HTTP Method

- **Name**: ` + "`httpMethod`" + `
- **Type**: ` + "`string`" + `
- **Default**: ` + "`GET`" + `
- **Description**: The HTTP method to listen to
`

	result := parseDocumentationFile(content, "webhook.md")

	if result.Name != "Webhook" {
		t.Errorf("parseDocumentationFile() Name = %q, want %q", result.Name, "Webhook")
	}

	if result.NodeType != "n8n-nodes-base.webhook" {
		t.Errorf("parseDocumentationFile() NodeType = %q, want %q", result.NodeType, "n8n-nodes-base.webhook")
	}

	if result.Description != "Starts the workflow when a webhook is called" {
		t.Errorf("parseDocumentationFile() Description = %q, want %q", result.Description, "Starts the workflow when a webhook is called")
	}

	if result.Category != "action" {
		t.Errorf("parseDocumentationFile() Category = %q, want %q", result.Category, "action")
	}

	if !strings.Contains(result.Excerpt, "webhook-1") {
		t.Error("parseDocumentationFile() Excerpt should contain YAML example")
	}
}
