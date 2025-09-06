package skills

import (
	"context"
	"strings"
	"testing"
)

func TestGenerateN8nWorkflowTool_GetName(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	expected := "generate-n8n-workflow"
	if got := tool.GetName(); got != expected {
		t.Errorf("GetName() = %v, want %v", got, expected)
	}
}

func TestGenerateN8nWorkflowTool_GetDescription(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	description := tool.GetDescription()
	if description == "" {
		t.Error("GetDescription() returned empty string")
	}
	if !strings.Contains(description, "N8N") {
		t.Error("GetDescription() should mention N8N")
	}
	if !strings.Contains(description, "YAML") {
		t.Error("GetDescription() should mention YAML")
	}
}

func TestGenerateN8nWorkflowTool_GetParameters(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	params := tool.GetParameters()
	
	// Check that it's an object
	if params["type"] != "object" {
		t.Errorf("Expected type to be 'object', got %v", params["type"])
	}
	
	// Check that properties exist
	properties, ok := params["properties"].(map[string]any)
	if !ok {
		t.Fatal("Properties should be a map[string]any")
	}
	
	// Check required workflow_description parameter
	if _, exists := properties["workflow_description"]; !exists {
		t.Error("workflow_description parameter should exist")
	}
	
	// Check optional parameters
	if _, exists := properties["trigger_type"]; !exists {
		t.Error("trigger_type parameter should exist")
	}
	
	if _, exists := properties["integrations"]; !exists {
		t.Error("integrations parameter should exist")
	}
	
	// Check required array
	required, ok := params["required"].([]string)
	if !ok {
		t.Fatal("Required should be a []string")
	}
	
	if len(required) != 1 || required[0] != "workflow_description" {
		t.Errorf("Expected required to be ['workflow_description'], got %v", required)
	}
}

func TestGenerateN8nWorkflowTool_Execute_MissingDescription(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	ctx := context.Background()
	
	// Test with empty params
	_, err := tool.Execute(ctx, map[string]any{})
	if err == nil {
		t.Error("Expected error when workflow_description parameter is missing")
	}
	
	if !strings.Contains(err.Error(), "workflow_description parameter is required") {
		t.Errorf("Expected 'workflow_description parameter is required' error, got: %v", err)
	}
}

func TestGenerateN8nWorkflowTool_Execute_EmptyDescription(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	ctx := context.Background()
	
	// Test with empty description
	_, err := tool.Execute(ctx, map[string]any{"workflow_description": ""})
	if err == nil {
		t.Error("Expected error when workflow_description is empty")
	}
	
	if !strings.Contains(err.Error(), "workflow_description cannot be empty") {
		t.Errorf("Expected 'workflow_description cannot be empty' error, got: %v", err)
	}
}

func TestGenerateN8nWorkflowTool_Execute_ValidDescription(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	ctx := context.Background()
	
	// Test with valid description
	result, err := tool.Execute(ctx, map[string]any{
		"workflow_description": "Send a Slack notification when webhook is received",
	})
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}
	
	// Result should be a string
	if result == "" {
		t.Error("Expected non-empty result")
	}
	
	// Should contain workflow YAML
	if !strings.Contains(result, "```yaml") {
		t.Error("Result should contain YAML code block")
	}
	
	// Should contain usage instructions
	if !strings.Contains(result, "Usage Instructions") {
		t.Error("Result should contain usage instructions")
	}
	
	// Should contain the description
	if !strings.Contains(result, "Send a Slack notification") {
		t.Error("Result should contain the workflow description")
	}
}

func TestGenerateN8nWorkflowTool_Execute_WithIntegrations(t *testing.T) {
	tool := &GenerateN8nWorkflowTool{}
	ctx := context.Background()
	
	// Test with integrations
	result, err := tool.Execute(ctx, map[string]any{
		"workflow_description": "Send notifications",
		"trigger_type":         "webhook",
		"integrations":         []interface{}{"slack", "email"},
	})
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}
	
	// Should mention the integrations
	if !strings.Contains(result, "slack") {
		t.Error("Result should mention slack integration")
	}
	
	if !strings.Contains(result, "email") {
		t.Error("Result should mention email integration") 
	}
	
	// Should mention webhook trigger
	if !strings.Contains(result, "webhook") {
		t.Error("Result should mention webhook trigger")
	}
}

func TestGenerateTriggerNode_Webhook(t *testing.T) {
	node, nodeId := generateTriggerNode("webhook", 1, []int{100, 200})
	
	if nodeId != "webhook-trigger" {
		t.Errorf("Expected node ID 'webhook-trigger', got %v", nodeId)
	}
	
	if !strings.Contains(node, "n8n-nodes-base.webhook") {
		t.Error("Node should contain webhook node type")
	}
	
	if !strings.Contains(node, "httpMethod: \"POST\"") {
		t.Error("Node should configure POST method")
	}
	
	if !strings.Contains(node, "[100, 200]") {
		t.Error("Node should have correct position")
	}
}

func TestGenerateTriggerNode_Schedule(t *testing.T) {
	node, nodeId := generateTriggerNode("schedule", 1, []int{200, 300})
	
	if nodeId != "schedule-trigger" {
		t.Errorf("Expected node ID 'schedule-trigger', got %v", nodeId)
	}
	
	if !strings.Contains(node, "n8n-nodes-base.scheduleTrigger") {
		t.Error("Node should contain scheduleTrigger node type")
	}
	
	if !strings.Contains(node, "[200, 300]") {
		t.Error("Node should have correct position")
	}
}

func TestGenerateTriggerNode_Manual(t *testing.T) {
	node, nodeId := generateTriggerNode("manual", 1, []int{300, 400})
	
	if nodeId != "manual-trigger" {
		t.Errorf("Expected node ID 'manual-trigger', got %v", nodeId)
	}
	
	if !strings.Contains(node, "n8n-nodes-base.manualTrigger") {
		t.Error("Node should contain manualTrigger node type")
	}
	
	if !strings.Contains(node, "[300, 400]") {
		t.Error("Node should have correct position")
	}
}

func TestSanitizeWorkflowName(t *testing.T) {
	tests := []struct {
		input    string
		expected string
	}{
		{
			"Simple workflow",
			"Simple workflow",
		},
		{
			"Workflow with \"quotes\" inside",
			"Workflow with 'quotes' inside",
		},
		{
			"Very long workflow description that exceeds the fifty character limit and should be truncated",
			"Very long workflow description that exceeds the...",
		},
		{
			"  Workflow with spaces  ",
			"Workflow with spaces",
		},
	}
	
	for _, test := range tests {
		result := sanitizeWorkflowName(test.input)
		if result != test.expected {
			t.Errorf("sanitizeWorkflowName(%q) = %q, want %q", test.input, result, test.expected)
		}
	}
}

func TestGenerateWorkflow(t *testing.T) {
	params := GenerateN8nWorkflowParams{
		WorkflowDescription: "Test workflow",
		TriggerType:         "manual",
		Integrations:        []string{"slack"},
	}
	
	workflow, err := generateWorkflow(params)
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}
	
	if workflow == "" {
		t.Error("Expected non-empty workflow")
	}
	
	// Should contain basic workflow structure
	if !strings.Contains(workflow, "name:") {
		t.Error("Workflow should contain name field")
	}
	
	if !strings.Contains(workflow, "nodes:") {
		t.Error("Workflow should contain nodes section")
	}
	
	if !strings.Contains(workflow, "connections:") {
		t.Error("Workflow should contain connections section")
	}
	
	// Should contain manual trigger
	if !strings.Contains(workflow, "manualTrigger") {
		t.Error("Workflow should contain manual trigger")
	}
}

func TestContainsHelper(t *testing.T) {
	slice := []string{"apple", "banana", "cherry"}
	
	if !contains(slice, "apple") {
		t.Error("contains should return true for 'apple'")
	}
	
	if !contains(slice, "banana") {
		t.Error("contains should return true for 'banana'")
	}
	
	if contains(slice, "orange") {
		t.Error("contains should return false for 'orange'")
	}
	
	if contains([]string{}, "anything") {
		t.Error("contains should return false for empty slice")
	}
}