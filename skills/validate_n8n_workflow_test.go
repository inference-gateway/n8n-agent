package skills

import (
	"context"
	"testing"

	"go.uber.org/zap"
)

func TestValidateN8NWorkflowHandler(t *testing.T) {
	logger := zap.NewNop()
	skill := &ValidateN8NWorkflowSkill{logger: logger}

	tests := []struct {
		name           string
		args           map[string]any
		expectError    bool
		expectValid    bool
		errorContains  string
		resultContains string
	}{
		{
			name: "valid simple workflow yaml",
			args: map[string]any{
				"workflow_content": `
name: "Test Workflow"
nodes:
  - id: "trigger"
    name: "Manual Trigger"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20, 20]
  - id: "action"
    name: "HTTP Request"
    type: "n8n-nodes-base.httpRequest"
    parameters:
      method: "GET"
      url: "https://api.example.com"
    position: [220, 20]
connections:
  - source: "trigger"
    target: "action"
    sourceIndex: 0
    targetIndex: 0
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    true,
			resultContains: "VALID",
		},
		{
			name: "valid simple workflow json",
			args: map[string]any{
				"workflow_content": `{
  "name": "Test Workflow",
  "nodes": [
    {
      "id": "trigger",
      "name": "Manual Trigger",
      "type": "n8n-nodes-base.manualTrigger",
      "parameters": {},
      "position": [20, 20]
    }
  ]
}`,
				"format": "json",
			},
			expectError:    false,
			expectValid:    true,
			resultContains: "VALID",
		},
		{
			name: "missing workflow_content parameter",
			args: map[string]any{
				"format": "yaml",
			},
			expectError:   true,
			errorContains: "workflow_content parameter is required",
		},
		{
			name: "empty workflow_content",
			args: map[string]any{
				"workflow_content": "",
				"format":           "yaml",
			},
			expectError:   true,
			errorContains: "workflow_content cannot be empty",
		},
		{
			name: "invalid yaml format",
			args: map[string]any{
				"workflow_content": "invalid: yaml: content: [unclosed",
				"format":           "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "Invalid YAML format",
		},
		{
			name: "invalid json format",
			args: map[string]any{
				"workflow_content": `{"invalid": json content}`,
				"format":           "json",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "Invalid JSON format",
		},
		{
			name: "workflow with no nodes",
			args: map[string]any{
				"workflow_content": `
name: "Empty Workflow"
nodes: []
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "must contain at least one node",
		},
		{
			name: "workflow with missing node id",
			args: map[string]any{
				"workflow_content": `
nodes:
  - name: "Test Node"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20, 20]
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "'id' is required",
		},
		{
			name: "workflow with invalid node type",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "test"
    name: "Test Node"
    type: "invalid-node-type"
    parameters: {}
    position: [20, 20]
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "invalid node type format",
		},
		{
			name: "workflow with invalid position",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "test"
    name: "Test Node"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20]
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "must be an array of exactly 2 numbers",
		},
		{
			name: "workflow with duplicate node ids",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "duplicate"
    name: "Node 1"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20, 20]
  - id: "duplicate"
    name: "Node 2"
    type: "n8n-nodes-base.httpRequest"
    parameters: {}
    position: [220, 20]
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "duplicate node ID",
		},
		{
			name: "workflow with invalid connection reference",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "trigger"
    name: "Manual Trigger"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20, 20]
connections:
  - source: "trigger"
    target: "nonexistent"
    sourceIndex: 0
    targetIndex: 0
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "does not exist",
		},
		{
			name: "workflow with self-connection",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "trigger"
    name: "Manual Trigger"
    type: "n8n-nodes-base.manualTrigger"
    parameters: {}
    position: [20, 20]
connections:
  - source: "trigger"
    target: "trigger"
    sourceIndex: 0
    targetIndex: 0
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    false,
			resultContains: "cannot connect to itself",
		},
		{
			name: "langchain node type validation",
			args: map[string]any{
				"workflow_content": `
nodes:
  - id: "ai"
    name: "OpenAI Chat"
    type: "@n8n/n8n-nodes-langchain.lmChatOpenAi"
    parameters: {}
    position: [20, 20]
`,
				"format": "yaml",
			},
			expectError:    false,
			expectValid:    true,
			resultContains: "VALID",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := skill.ValidateN8NWorkflowHandler(context.Background(), tt.args)

			if tt.expectError {
				if err == nil {
					t.Errorf("expected error but got none")
				} else if tt.errorContains != "" && !contains(err.Error(), tt.errorContains) {
					t.Errorf("expected error to contain %q, got %q", tt.errorContains, err.Error())
				}
				return
			}

			if err != nil {
				t.Errorf("unexpected error: %v", err)
				return
			}

			if tt.resultContains != "" && !contains(result, tt.resultContains) {
				t.Errorf("expected result to contain %q, got %q", tt.resultContains, result)
			}

			if tt.expectValid && contains(result, "INVALID") {
				t.Errorf("expected valid workflow but got invalid result: %s", result)
			} else if !tt.expectValid && contains(result, "VALID") && !contains(result, "INVALID") {
				t.Errorf("expected invalid workflow but got valid result: %s", result)
			}
		})
	}
}

func TestDetectFormat(t *testing.T) {
	logger := zap.NewNop()
	skill := &ValidateN8NWorkflowSkill{logger: logger}

	tests := []struct {
		name            string
		content         string
		requestedFormat string
		expected        string
	}{
		{
			name:            "explicit yaml format",
			content:         "name: test\nnodes: []",
			requestedFormat: "yaml",
			expected:        "yaml",
		},
		{
			name:            "explicit json format",
			content:         `{"name": "test", "nodes": []}`,
			requestedFormat: "json",
			expected:        "json",
		},
		{
			name:            "auto-detect json",
			content:         `{"name": "test", "nodes": []}`,
			requestedFormat: "auto",
			expected:        "json",
		},
		{
			name:            "auto-detect yaml",
			content:         "name: test\nnodes: []",
			requestedFormat: "auto",
			expected:        "yaml",
		},
		{
			name:            "invalid content",
			content:         "invalid content",
			requestedFormat: "auto",
			expected:        "unknown",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := skill.detectFormat(tt.content, tt.requestedFormat)
			if result != tt.expected {
				t.Errorf("expected %q, got %q", tt.expected, result)
			}
		})
	}
}

func TestIsTriggerNode(t *testing.T) {
	logger := zap.NewNop()
	skill := &ValidateN8NWorkflowSkill{logger: logger}

	tests := []struct {
		name     string
		nodeType string
		expected bool
	}{
		{"manual trigger", "n8n-nodes-base.manualTrigger", true},
		{"webhook", "n8n-nodes-base.webhook", true},
		{"schedule trigger", "n8n-nodes-base.scheduleTrigger", true},
		{"http request", "n8n-nodes-base.httpRequest", false},
		{"code node", "n8n-nodes-base.code", false},
		{"cron trigger", "n8n-nodes-base.cronTrigger", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := skill.isTriggerNode(tt.nodeType)
			if result != tt.expected {
				t.Errorf("expected %v for %q, got %v", tt.expected, tt.nodeType, result)
			}
		})
	}
}

// Helper function to check if a string contains a substring
func contains(s, substr string) bool {
	return len(s) >= len(substr) &&
		(len(substr) == 0 || func() bool {
			for i := 0; i <= len(s)-len(substr); i++ {
				if s[i:i+len(substr)] == substr {
					return true
				}
			}
			return false
		}())
}
