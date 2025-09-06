package skills

import (
	"context"
	"fmt"
	"strings"

	server "github.com/inference-gateway/adk/server"
	zap "go.uber.org/zap"
)

// GenerateN8NWorkflowSkill struct holds the skill with logger
type GenerateN8NWorkflowSkill struct {
	logger *zap.Logger
}

// GenerateN8nWorkflowArgs represents the input parameters for the generate-n8n-workflow skill
type GenerateN8nWorkflowArgs struct {
	WorkflowDescription string   `json:"workflow_description"`
	TriggerType         string   `json:"trigger_type,omitempty"`
	Integrations        []string `json:"integrations,omitempty"`
}

// NewGenerateN8NWorkflowSkill creates a new generate-n8n-workflow skill
func NewGenerateN8NWorkflowSkill(logger *zap.Logger) server.Tool {
	skill := &GenerateN8NWorkflowSkill{
		logger: logger,
	}
	return server.NewBasicTool(
		"generate-n8n-workflow",
		"Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices",
		map[string]any{
			"type": "object",
			"properties": map[string]any{
				"integrations": map[string]any{
					"description": "List of services or platforms to integrate (e.g., [\"slack\", \"gmail\", \"database\"])",
					"items":       map[string]any{"type": "string"},
					"type":        "array",
				},
				"trigger_type": map[string]any{
					"description": "Preferred trigger type (e.g., \"webhook\", \"schedule\", \"manual\")",
					"type":        "string",
				},
				"workflow_description": map[string]any{
					"description": "Description of what the workflow should accomplish",
					"type":        "string",
				},
			},
			"required": []string{"workflow_description"},
		},
		skill.GenerateN8NWorkflowHandler,
	)
}

// GenerateN8NWorkflowHandler handles the generate-n8n-workflow skill execution
func (s *GenerateN8NWorkflowSkill) GenerateN8NWorkflowHandler(ctx context.Context, args map[string]any) (string, error) {
	s.logger.Debug("GenerateN8NWorkflowHandler invoked", zap.Any("args", args))

	var p GenerateN8nWorkflowArgs
	if desc, ok := args["workflow_description"].(string); ok {
		p.WorkflowDescription = strings.TrimSpace(desc)
	} else {
		s.logger.Error("workflow_description parameter missing or invalid", zap.Any("args", args))
		return "", fmt.Errorf("workflow_description parameter is required")
	}

	if p.WorkflowDescription == "" {
		s.logger.Error("empty workflow_description provided")
		return "", fmt.Errorf("workflow_description cannot be empty")
	}

	if triggerType, ok := args["trigger_type"].(string); ok {
		p.TriggerType = strings.TrimSpace(strings.ToLower(triggerType))
		s.logger.Debug("trigger_type specified", zap.String("trigger_type", p.TriggerType))
	}

	if integrations, ok := args["integrations"].([]interface{}); ok {
		for _, integration := range integrations {
			if str, ok := integration.(string); ok {
				p.Integrations = append(p.Integrations, strings.TrimSpace(strings.ToLower(str)))
			}
		}
		s.logger.Debug("integrations specified", zap.Strings("integrations", p.Integrations))
	}

	s.logger.Info("generating workflow",
		zap.String("description", p.WorkflowDescription),
		zap.String("trigger_type", p.TriggerType),
		zap.Int("integrations_count", len(p.Integrations)))

	workflow, err := s.generateWorkflow(p)
	if err != nil {
		s.logger.Error("workflow generation failed", zap.Error(err))
		return "", fmt.Errorf("failed to generate workflow: %v", err)
	}

	s.logger.Info("workflow generated successfully",
		zap.String("description", p.WorkflowDescription),
		zap.Int("workflow_length", len(workflow)))

	content := fmt.Sprintf("# Generated N8N Workflow\n\n**Description**: %s\n\n", p.WorkflowDescription)
	if p.TriggerType != "" {
		content += fmt.Sprintf("**Trigger Type**: %s\n", p.TriggerType)
	}
	if len(p.Integrations) > 0 {
		content += fmt.Sprintf("**Integrations**: %s\n", strings.Join(p.Integrations, ", "))
	}
	content += "\n## Workflow YAML\n\n```yaml\n" + workflow + "\n```\n\n"
	content += "## Usage Instructions\n\n"
	content += "1. Copy the YAML configuration above\n"
	content += "2. Save it to a `.yaml` file (e.g., `my-workflow.yaml`)\n"
	content += "3. Use the n8n-cli to deploy: `npx @edenreich/n8n-cli push my-workflow.yaml`\n"
	content += "4. Configure any required credentials in your n8n instance\n"
	content += "5. Test the workflow by triggering it according to your trigger type\n\n"
	content += "## Next Steps\n\n"
	content += "- Review and customize node parameters as needed\n"
	content += "- Add error handling nodes if required\n"
	content += "- Set up proper credentials for external services\n"
	content += "- Test the workflow in a development environment first\n"

	return content, nil
}

// generateWorkflow creates a complete N8N workflow based on parameters
func (s *GenerateN8NWorkflowSkill) generateWorkflow(args GenerateN8nWorkflowArgs) (string, error) {
	s.logger.Debug("building workflow structure",
		zap.String("description", args.WorkflowDescription),
		zap.String("trigger_type", args.TriggerType))
	var builder strings.Builder

	workflowName := sanitizeWorkflowName(args.WorkflowDescription)
	s.logger.Debug("workflow name sanitized", zap.String("name", workflowName))

	builder.WriteString("# N8N Workflow Configuration\n")
	builder.WriteString("# Generated by n8n-agent\n\n")
	builder.WriteString("name: \"" + workflowName + "\"\n")
	builder.WriteString("active: true\n\n")
	builder.WriteString("nodes:\n")

	nodeId := 1
	positions := [][]int{{100, 200}, {300, 200}, {500, 200}, {700, 200}, {900, 200}}

	triggerNode, triggerNodeId := s.generateTriggerNode(args.TriggerType, nodeId, positions[0])
	builder.WriteString(triggerNode)
	nodeId++
	s.logger.Debug("trigger node added", zap.String("node_id", triggerNodeId), zap.String("type", args.TriggerType))

	integrationNodes := s.generateIntegrationNodes(args, nodeId, positions[1:])
	builder.WriteString(integrationNodes)
	s.logger.Debug("integration nodes added", zap.Int("count", len(args.Integrations)))

	builder.WriteString("\nconnections:\n")
	builder.WriteString(fmt.Sprintf("  \"%s\":\n", triggerNodeId))
	builder.WriteString("    main:\n")
	builder.WriteString("      - - node: \"process-data\"\n")
	builder.WriteString("          type: main\n")
	builder.WriteString("          index: 0\n")

	return builder.String(), nil
}

// generateTriggerNode creates a trigger node based on the specified type
func (s *GenerateN8NWorkflowSkill) generateTriggerNode(triggerType string, nodeId int, position []int) (string, string) {
	s.logger.Debug("generating trigger node", zap.String("type", triggerType), zap.Int("node_id", nodeId))
	var builder strings.Builder
	var nodeName, nodeType string

	switch triggerType {
	case "webhook":
		nodeName = "webhook-trigger"
		nodeType = "n8n-nodes-base.webhook"
		builder.WriteString(fmt.Sprintf("  - id: \"%s\"\n", nodeName))
		builder.WriteString("    name: \"Webhook Trigger\"\n")
		builder.WriteString("    parameters:\n")
		builder.WriteString("      httpMethod: \"POST\"\n")
		builder.WriteString("      path: \"webhook\"\n")
		builder.WriteString("      responseMode: \"onReceived\"\n")

	case "schedule", "cron":
		nodeName = "schedule-trigger"
		nodeType = "n8n-nodes-base.scheduleTrigger"
		builder.WriteString(fmt.Sprintf("  - id: \"%s\"\n", nodeName))
		builder.WriteString("    name: \"Schedule Trigger\"\n")
		builder.WriteString("    parameters:\n")
		builder.WriteString("      rule:\n")
		builder.WriteString("        interval:\n")
		builder.WriteString("          - field: \"minutes\"\n")
		builder.WriteString("            minute: 30\n")

	case "manual":
		nodeName = "manual-trigger"
		nodeType = "n8n-nodes-base.manualTrigger"
		builder.WriteString(fmt.Sprintf("  - id: \"%s\"\n", nodeName))
		builder.WriteString("    name: \"Manual Trigger\"\n")
		builder.WriteString("    parameters: {}\n")

	default:
		nodeName = "manual-trigger"
		nodeType = "n8n-nodes-base.manualTrigger"
		builder.WriteString(fmt.Sprintf("  - id: \"%s\"\n", nodeName))
		builder.WriteString("    name: \"Manual Trigger\"\n")
		builder.WriteString("    parameters: {}\n")
	}

	builder.WriteString(fmt.Sprintf("    position: [%d, %d]\n", position[0], position[1]))
	builder.WriteString(fmt.Sprintf("    type: \"%s\"\n\n", nodeType))

	return builder.String(), nodeName
}

// generateIntegrationNodes creates nodes based on integrations and workflow description
func (s *GenerateN8NWorkflowSkill) generateIntegrationNodes(params GenerateN8nWorkflowArgs, startNodeId int, positions [][]int) string {
	s.logger.Debug("generating integration nodes",
		zap.Strings("integrations", params.Integrations),
		zap.Int("start_node_id", startNodeId))
	var builder strings.Builder
	posIndex := 0

	description := strings.ToLower(params.WorkflowDescription)

	if posIndex < len(positions) {
		builder.WriteString("  - id: \"process-data\"\n")
		builder.WriteString("    name: \"Process Data\"\n")
		builder.WriteString("    parameters:\n")
		builder.WriteString("      jsCode: |\n")
		builder.WriteString("        // Process and transform the incoming data\n")
		builder.WriteString("        const processedData = {\n")
		builder.WriteString("          timestamp: new Date().toISOString(),\n")
		builder.WriteString("          originalData: $input.all(),\n")
		builder.WriteString("          processed: true\n")
		builder.WriteString("        };\n")
		builder.WriteString("        return [processedData];\n")
		builder.WriteString(fmt.Sprintf("    position: [%d, %d]\n", positions[posIndex][0], positions[posIndex][1]))
		builder.WriteString("    type: \"n8n-nodes-base.code\"\n\n")
		posIndex++
	}

	for _, integration := range params.Integrations {
		if posIndex >= len(positions) {
			break
		}

		switch integration {
		case "slack":
			s.logger.Debug("adding Slack node", zap.String("integration", integration))
			builder.WriteString(generateSlackNode(positions[posIndex]))
		case "gmail", "email":
			s.logger.Debug("adding Email node", zap.String("integration", integration))
			builder.WriteString(generateEmailNode(positions[posIndex]))
		case "database", "mysql", "postgres":
			s.logger.Debug("adding Database node", zap.String("integration", integration))
			builder.WriteString(generateDatabaseNode(positions[posIndex]))
		case "http", "api":
			s.logger.Debug("adding HTTP node", zap.String("integration", integration))
			builder.WriteString(generateHttpNode(positions[posIndex]))
		case "webhook":
			s.logger.Debug("adding Webhook Response node", zap.String("integration", integration))
			builder.WriteString(generateWebhookResponseNode(positions[posIndex]))
		}
		posIndex++
	}

	if (strings.Contains(description, "notification") || strings.Contains(description, "alert")) && posIndex < len(positions) {
		if !contains(params.Integrations, "slack") {
			s.logger.Debug("auto-adding Slack node for notification/alert workflow")
			builder.WriteString(generateSlackNode(positions[posIndex]))
			posIndex++
		}
	}

	if (strings.Contains(description, "email") || strings.Contains(description, "send")) && posIndex < len(positions) {
		if !contains(params.Integrations, "gmail") && !contains(params.Integrations, "email") {
			s.logger.Debug("auto-adding Email node for email/send workflow")
			builder.WriteString(generateEmailNode(positions[posIndex]))
			posIndex++
		}
	}

	if (strings.Contains(description, "store") || strings.Contains(description, "save")) && posIndex < len(positions) {
		if !contains(params.Integrations, "database") {
			s.logger.Debug("auto-adding Database node for store/save workflow")
			builder.WriteString(generateDatabaseNode(positions[posIndex]))
		}
	}

	return builder.String()
}

// Node generation helper functions
func generateSlackNode(position []int) string {
	return fmt.Sprintf(`  - id: "slack-notification"
    name: "Slack Notification"
    parameters:
      resource: "message"
      operation: "post"
      channel: "#general"
      text: "Workflow executed successfully: {{ $json.timestamp }}"
      username: "n8n-bot"
    position: [%d, %d]
    type: "n8n-nodes-base.slack"

`, position[0], position[1])
}

func generateEmailNode(position []int) string {
	return fmt.Sprintf(`  - id: "email-notification"
    name: "Email Notification"
    parameters:
      fromEmail: "noreply@company.com"
      toEmail: "admin@company.com"
      subject: "N8N Workflow Notification"
      text: "The workflow has been executed successfully."
      html: "<h1>Workflow Complete</h1><p>The workflow executed at {{ $json.timestamp }}</p>"
    position: [%d, %d]
    type: "n8n-nodes-base.emailSend"

`, position[0], position[1])
}

func generateDatabaseNode(position []int) string {
	return fmt.Sprintf(`  - id: "database-insert"
    name: "Database Insert"
    parameters:
      operation: "insert"
      table: "workflow_logs"
      columns: "timestamp,data,status"
      additionalFields:
        mode: "defineBelow"
        values:
          timestamp: "={{ $json.timestamp }}"
          data: "={{ JSON.stringify($json.originalData) }}"
          status: "completed"
    position: [%d, %d]
    type: "n8n-nodes-base.postgres"

`, position[0], position[1])
}

func generateHttpNode(position []int) string {
	return fmt.Sprintf(`  - id: "http-request"
    name: "HTTP Request"
    parameters:
      method: "POST"
      url: "https://api.example.com/webhook"
      sendBody: true
      contentType: "json"
      jsonParameters: true
      body:
        timestamp: "={{ $json.timestamp }}"
        data: "={{ $json.originalData }}"
    position: [%d, %d]
    type: "n8n-nodes-base.httpRequest"

`, position[0], position[1])
}

func generateWebhookResponseNode(position []int) string {
	return fmt.Sprintf(`  - id: "webhook-response"
    name: "Webhook Response"
    parameters:
      respondWith: "json"
      responseBody: |
        {
          "status": "success",
          "message": "Workflow completed successfully",
          "timestamp": "{{ $json.timestamp }}"
        }
    position: [%d, %d]
    type: "n8n-nodes-base.respondToWebhook"

`, position[0], position[1])
}

// Helper functions
func sanitizeWorkflowName(description string) string {
	name := strings.TrimSpace(description)
	if len(name) > 50 {
		name = name[:47] + "..."
	}

	name = strings.ReplaceAll(name, "\"", "'")
	return name
}

func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
}
