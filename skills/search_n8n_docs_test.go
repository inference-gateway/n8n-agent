package skills

import (
	"context"
	"strings"
	"testing"
)

func TestSearchN8nDocsTool_GetName(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	expected := "search-n8n-docs"
	if got := tool.GetName(); got != expected {
		t.Errorf("GetName() = %v, want %v", got, expected)
	}
}

func TestSearchN8nDocsTool_GetDescription(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	description := tool.GetDescription()
	if description == "" {
		t.Error("GetDescription() returned empty string")
	}
	if !strings.Contains(description, "N8N") {
		t.Error("GetDescription() should mention N8N")
	}
}

func TestSearchN8nDocsTool_GetParameters(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	params := tool.GetParameters()

	if params["type"] != "object" {
		t.Errorf("Expected type to be 'object', got %v", params["type"])
	}

	properties, ok := params["properties"].(map[string]any)
	if !ok {
		t.Fatal("Properties should be a map[string]any")
	}

	if _, exists := properties["query"]; !exists {
		t.Error("Query parameter should exist")
	}

	if _, exists := properties["node_type"]; !exists {
		t.Error("node_type parameter should exist")
	}

	if _, exists := properties["category"]; !exists {
		t.Error("category parameter should exist")
	}

	required, ok := params["required"].([]string)
	if !ok {
		t.Fatal("Required should be a []string")
	}

	if len(required) != 1 || required[0] != "query" {
		t.Errorf("Expected required to be ['query'], got %v", required)
	}
}

func TestSearchN8nDocsTool_Execute_MissingQuery(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	ctx := context.Background()

	_, err := tool.Execute(ctx, map[string]any{})
	if err == nil {
		t.Error("Expected error when query parameter is missing")
	}

	if !strings.Contains(err.Error(), "query parameter is required") {
		t.Errorf("Expected 'query parameter is required' error, got: %v", err)
	}
}

func TestSearchN8nDocsTool_Execute_EmptyQuery(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	ctx := context.Background()

	// Test with empty query
	_, err := tool.Execute(ctx, map[string]any{"query": ""})
	if err == nil {
		t.Error("Expected error when query is empty")
	}

	if !strings.Contains(err.Error(), "query cannot be empty") {
		t.Errorf("Expected 'query cannot be empty' error, got: %v", err)
	}
}

func TestSearchN8nDocsTool_Execute_ValidQuery(t *testing.T) {
	tool := &SearchN8nDocsTool{}
	ctx := context.Background()

	result, err := tool.Execute(ctx, map[string]any{"query": "webhook"})

	if err != nil {
		if strings.Contains(err.Error(), "no such file or directory") {
			t.Skip("Skipping test - docs directory not available in test environment")
		} else {
			t.Errorf("Unexpected error: %v", err)
		}
		return
	}

	if result == "" {
		t.Error("Expected non-empty result")
	}

	if !strings.Contains(result, "Found") && !strings.Contains(result, "No matching") {
		t.Errorf("Result should indicate found results or no results, got: %v", result)
	}
}

func TestParseDocumentationFile(t *testing.T) {
	content := `# Webhook

## Description

Starts the workflow when a webhook is called

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

` + "```yaml" + `
nodes:
  - id: webhook-trigger
    name: Webhook
    parameters:
      httpMethod: "POST"
      path: "webhook"
    position: [100, 200]
    type: n8n-nodes-base.webhook
` + "```" + `
`

	result := parseDocumentationFile(content, "webhook.md")
	if result == nil {
		t.Fatal("Expected non-nil result")
	}

	if result.Name != "Webhook" {
		t.Errorf("Expected name 'Webhook', got %v", result.Name)
	}

	if !strings.Contains(result.Description, "workflow when a webhook") {
		t.Errorf("Expected description to contain 'workflow when a webhook', got %v", result.Description)
	}

	if result.NodeType != "n8n-nodes-base.webhook" {
		t.Errorf("Expected node type 'n8n-nodes-base.webhook', got %v", result.NodeType)
	}

	if result.Category != "action" {
		t.Errorf("Expected category 'action', got %v", result.Category)
	}

	if !strings.Contains(result.Excerpt, "webhook-trigger") {
		t.Errorf("Expected excerpt to contain 'webhook-trigger', got %v", result.Excerpt)
	}

	triggerResult := parseDocumentationFile(content, "webhookTrigger.md")
	if triggerResult.Category != "trigger" {
		t.Errorf("Expected category 'trigger' for trigger file, got %v", triggerResult.Category)
	}
}
