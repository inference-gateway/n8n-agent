package skills

import (
	"context"
	"encoding/json"
	"fmt"
	"regexp"
	"strings"

	server "github.com/inference-gateway/adk/server"
	zap "go.uber.org/zap"
	yaml "gopkg.in/yaml.v3"
)

// ValidateN8NWorkflowSkill struct holds the skill with logger
type ValidateN8NWorkflowSkill struct {
	logger *zap.Logger
}

// ValidateN8nWorkflowArgs represents the input parameters for the validate_n8n_workflow skill
type ValidateN8nWorkflowArgs struct {
	WorkflowContent string `json:"workflow_content"`
	Format          string `json:"format,omitempty"`
}

// N8NWorkflow represents the structure of an N8N workflow
type N8NWorkflow struct {
	Name        string          `json:"name,omitempty" yaml:"name,omitempty"`
	ID          string          `json:"id,omitempty" yaml:"id,omitempty"`
	Active      *bool           `json:"active,omitempty" yaml:"active,omitempty"`
	Nodes       []N8NNode       `json:"nodes" yaml:"nodes"`
	Connections []N8NConnection `json:"connections,omitempty" yaml:"connections,omitempty"`
}

// N8NNode represents an N8N workflow node
type N8NNode struct {
	ID         string                 `json:"id" yaml:"id"`
	Name       string                 `json:"name" yaml:"name"`
	Type       string                 `json:"type" yaml:"type"`
	Parameters map[string]interface{} `json:"parameters" yaml:"parameters"`
	Position   []float64              `json:"position" yaml:"position"`
}

// N8NConnection represents a connection between nodes
type N8NConnection struct {
	Source      string `json:"source" yaml:"source"`
	Target      string `json:"target" yaml:"target"`
	SourceIndex int    `json:"sourceIndex,omitempty" yaml:"sourceIndex,omitempty"`
	TargetIndex int    `json:"targetIndex,omitempty" yaml:"targetIndex,omitempty"`
}

// ValidationResult represents the result of workflow validation
type ValidationResult struct {
	Valid    bool     `json:"valid"`
	Errors   []string `json:"errors,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}

// NewValidateN8NWorkflowSkill creates a new validate_n8n_workflow skill
func NewValidateN8NWorkflowSkill(logger *zap.Logger) server.Tool {
	skill := &ValidateN8NWorkflowSkill{
		logger: logger,
	}
	return server.NewBasicTool(
		"validate_n8n_workflow",
		"Validate N8N workflow YAML/JSON to ensure it follows the correct schema and has all required attributes before creating artifacts",
		map[string]any{
			"type": "object",
			"properties": map[string]any{
				"workflow_content": map[string]any{
					"description": "The complete N8N workflow content to validate (YAML or JSON format)",
					"type":        "string",
				},
				"format": map[string]any{
					"description": "The format of the workflow content (auto-detect if not specified)",
					"type":        "string",
					"enum":        []string{"yaml", "json", "auto"},
					"default":     "auto",
				},
			},
			"required": []string{"workflow_content"},
		},
		skill.ValidateN8NWorkflowHandler,
	)
}

// ValidateN8NWorkflowHandler handles the validate_n8n_workflow skill execution
func (s *ValidateN8NWorkflowSkill) ValidateN8NWorkflowHandler(ctx context.Context, args map[string]any) (string, error) {
	s.logger.Debug("ValidateN8NWorkflowHandler invoked", zap.Any("args", args))

	var p ValidateN8nWorkflowArgs
	if workflowContent, ok := args["workflow_content"].(string); ok {
		p.WorkflowContent = strings.TrimSpace(workflowContent)
	} else {
		s.logger.Error("workflow_content parameter missing or invalid", zap.Any("args", args))
		return "", fmt.Errorf("workflow_content parameter is required")
	}

	if format, ok := args["format"].(string); ok {
		p.Format = strings.ToLower(strings.TrimSpace(format))
	} else {
		p.Format = "auto"
	}

	if p.WorkflowContent == "" {
		s.logger.Error("empty workflow content provided")
		return "", fmt.Errorf("workflow_content cannot be empty")
	}

	s.logger.Info("validating n8n workflow",
		zap.String("format", p.Format),
		zap.Int("content_length", len(p.WorkflowContent)))

	result, err := s.validateWorkflow(p.WorkflowContent, p.Format)
	if err != nil {
		s.logger.Error("workflow validation failed", zap.Error(err))
		return "", fmt.Errorf("failed to validate workflow: %v", err)
	}

	s.logger.Info("workflow validation completed",
		zap.Bool("valid", result.Valid),
		zap.Int("errors_count", len(result.Errors)),
		zap.Int("warnings_count", len(result.Warnings)))

	response := "## N8N Workflow Validation Result\n\n"

	if result.Valid {
		response += "✅ **Status**: VALID - Workflow passes all validation checks\n\n"
		if len(result.Warnings) > 0 {
			response += "⚠️ **Warnings**:\n"
			for _, warning := range result.Warnings {
				response += fmt.Sprintf("- %s\n", warning)
			}
			response += "\n"
		}
		response += "The workflow is ready to be saved as an artifact and can be imported into N8N."
	} else {
		response += "❌ **Status**: INVALID - Workflow has validation errors\n\n"
		response += "**Errors**:\n"
		for _, err := range result.Errors {
			response += fmt.Sprintf("- %s\n", err)
		}
		if len(result.Warnings) > 0 {
			response += "\n**Warnings**:\n"
			for _, warning := range result.Warnings {
				response += fmt.Sprintf("- %s\n", warning)
			}
		}
		response += "\nPlease fix these issues before creating the workflow artifact."
	}

	return response, nil
}

// validateWorkflow validates the N8N workflow content
func (s *ValidateN8NWorkflowSkill) validateWorkflow(content, format string) (*ValidationResult, error) {
	result := &ValidationResult{
		Valid:    true,
		Errors:   []string{},
		Warnings: []string{},
	}

	detectedFormat := s.detectFormat(content, format)
	s.logger.Debug("detected workflow format", zap.String("format", detectedFormat))

	var workflow N8NWorkflow
	var err error

	switch detectedFormat {
	case "yaml":
		err = yaml.Unmarshal([]byte(content), &workflow)
		if err != nil {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("Invalid YAML format: %v", err))
			return result, nil
		}
	case "json":
		err = json.Unmarshal([]byte(content), &workflow)
		if err != nil {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("Invalid JSON format: %v", err))
			return result, nil
		}
	default:
		result.Valid = false
		result.Errors = append(result.Errors, "Unable to detect workflow format (must be valid YAML or JSON)")
		return result, nil
	}

	s.validateWorkflowStructure(&workflow, result)
	s.validateNodes(&workflow, result)
	s.validateConnections(&workflow, result)
	s.validateWorkflowLogic(&workflow, result)

	return result, nil
}

// detectFormat attempts to detect the format of the workflow content
func (s *ValidateN8NWorkflowSkill) detectFormat(content, requestedFormat string) string {
	if requestedFormat != "auto" {
		return requestedFormat
	}

	content = strings.TrimSpace(content)
	if content == "" {
		return "unknown"
	}

	var jsonTest interface{}
	if json.Unmarshal([]byte(content), &jsonTest) == nil {
		// Additional check to ensure it's meaningful JSON
		if strings.HasPrefix(content, "{") && strings.HasSuffix(content, "}") {
			return "json"
		}
	}

	var yamlTest interface{}
	if yaml.Unmarshal([]byte(content), &yamlTest) == nil {
		if strings.Contains(content, ":") || strings.Contains(content, "-") {
			return "yaml"
		}
	}

	return "unknown"
}

// validateWorkflowStructure validates the basic workflow structure
func (s *ValidateN8NWorkflowSkill) validateWorkflowStructure(workflow *N8NWorkflow, result *ValidationResult) {
	if len(workflow.Nodes) == 0 {
		result.Valid = false
		result.Errors = append(result.Errors, "Workflow must contain at least one node")
		return
	}

	if workflow.Name == "" {
		result.Warnings = append(result.Warnings, "Workflow name is not specified")
	}
}

// validateNodes validates all nodes in the workflow
func (s *ValidateN8NWorkflowSkill) validateNodes(workflow *N8NWorkflow, result *ValidationResult) {
	nodeIDs := make(map[string]bool)
	validNodeTypePattern := regexp.MustCompile(`^(n8n-nodes-base\.|@n8n/n8n-nodes-langchain\.)[\w]+$`)

	for i, node := range workflow.Nodes {
		nodePrefix := fmt.Sprintf("Node %d", i+1)

		if node.ID == "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: 'id' is required", nodePrefix))
		} else {
			if nodeIDs[node.ID] {
				result.Valid = false
				result.Errors = append(result.Errors, fmt.Sprintf("%s: duplicate node ID '%s'", nodePrefix, node.ID))
			}
			nodeIDs[node.ID] = true
		}

		if node.Name == "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s (%s): 'name' is required", nodePrefix, node.ID))
		}

		if node.Type == "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s (%s): 'type' is required", nodePrefix, node.ID))
		} else {
			if !validNodeTypePattern.MatchString(node.Type) {
				result.Valid = false
				result.Errors = append(result.Errors, fmt.Sprintf("%s (%s): invalid node type format '%s'. Must follow 'n8n-nodes-base.*' or '@n8n/n8n-nodes-langchain.*' pattern", nodePrefix, node.ID, node.Type))
			}
		}

		if node.Parameters == nil {
			result.Warnings = append(result.Warnings, fmt.Sprintf("%s (%s): 'parameters' is empty (should be {} if no parameters needed)", nodePrefix, node.ID))
		}

		if len(node.Position) != 2 {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s (%s): 'position' must be an array of exactly 2 numbers [x, y]", nodePrefix, node.ID))
		} else {
			for _, pos := range node.Position {
				if pos < 0 || pos > 10000 {
					result.Warnings = append(result.Warnings, fmt.Sprintf("%s (%s): position coordinates seem unusual [%.0f, %.0f]", nodePrefix, node.ID, node.Position[0], node.Position[1]))
					break
				}
			}
		}
	}
}

// validateConnections validates connections between nodes
func (s *ValidateN8NWorkflowSkill) validateConnections(workflow *N8NWorkflow, result *ValidationResult) {
	nodeIDs := make(map[string]bool)
	for _, node := range workflow.Nodes {
		if node.ID != "" {
			nodeIDs[node.ID] = true
		}
	}

	if len(workflow.Nodes) <= 1 {
		if len(workflow.Connections) > 0 {
			result.Warnings = append(result.Warnings, "Single-node workflow has connections defined (will be ignored)")
		}
	}

	if len(workflow.Nodes) > 1 && len(workflow.Connections) == 0 {
		result.Warnings = append(result.Warnings, "Multi-node workflow has no connections defined - nodes will not be linked")
	}

	if len(workflow.Connections) == 0 {
		return
	}

	for i, conn := range workflow.Connections {
		connPrefix := fmt.Sprintf("Connection %d", i+1)

		if conn.Source == "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: 'source' node ID is required", connPrefix))
		} else if !nodeIDs[conn.Source] {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: source node '%s' does not exist", connPrefix, conn.Source))
		}

		if conn.Target == "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: 'target' node ID is required", connPrefix))
		} else if !nodeIDs[conn.Target] {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: target node '%s' does not exist", connPrefix, conn.Target))
		}

		if conn.Source == conn.Target && conn.Source != "" {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: node cannot connect to itself ('%s')", connPrefix, conn.Source))
		}

		if conn.SourceIndex < 0 {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: sourceIndex must be >= 0", connPrefix))
		}
		if conn.TargetIndex < 0 {
			result.Valid = false
			result.Errors = append(result.Errors, fmt.Sprintf("%s: targetIndex must be >= 0", connPrefix))
		}
	}
}

// validateWorkflowLogic validates the logical structure of the workflow
func (s *ValidateN8NWorkflowSkill) validateWorkflowLogic(workflow *N8NWorkflow, result *ValidationResult) {
	triggerNodes := 0

	for _, node := range workflow.Nodes {
		if s.isTriggerNode(node.Type) {
			triggerNodes++
		}
	}

	if triggerNodes == 0 {
		result.Warnings = append(result.Warnings, "Workflow has no trigger nodes - it cannot be executed automatically")
	}

	// Additional logic validation could be added here:
	// - Check for unreachable nodes
	// - Validate circular dependencies
	// - Check for orphaned nodes
}

// isTriggerNode checks if a node type is a trigger node
func (s *ValidateN8NWorkflowSkill) isTriggerNode(nodeType string) bool {
	triggerPatterns := []string{
		"trigger",
		"webhook",
		"manual",
		"schedule",
		"cron",
		"Timer",
		"Start",
	}

	lowerType := strings.ToLower(nodeType)
	for _, pattern := range triggerPatterns {
		if strings.Contains(lowerType, strings.ToLower(pattern)) {
			return true
		}
	}
	return false
}
