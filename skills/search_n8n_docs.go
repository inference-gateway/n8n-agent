package skills

import (
	"context"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	server "github.com/inference-gateway/adk/server"
	zap "go.uber.org/zap"
)

// SearchN8NDocsSkill struct holds the skill with logger
type SearchN8NDocsSkill struct {
	logger *zap.Logger
}

// SearchN8nDocsParams represents the input parameters for the search-n8n-docs skill
type SearchN8nDocsArgs struct {
	Query    string `json:"query"`
	NodeType string `json:"node_type,omitempty"`
	Category string `json:"category,omitempty"`
}

// NewSearchN8NDocsSkill creates a new search-n8n-docs skill
func NewSearchN8NDocsSkill(logger *zap.Logger) server.Tool {
	skill := &SearchN8NDocsSkill{
		logger: logger,
	}
	return server.NewBasicTool(
		"search-n8n-docs",
		"Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns",
		map[string]any{
			"type": "object",
			"properties": map[string]any{
				"category": map[string]any{
					"description": "Optional filter by category (e.g., \"trigger\", \"action\", \"langchain\")",
					"type":        "string",
				},
				"node_type": map[string]any{
					"description": "Optional filter by specific node type (e.g., \"webhook\", \"http\", \"database\")",
					"type":        "string",
				},
				"query": map[string]any{
					"description": "Search query to find relevant N8N nodes or documentation",
					"type":        "string",
				},
			},
			"required": []string{"query"},
		},
		skill.SearchN8NDocsHandler,
	)
}

// SearchN8NDocsHandler handles the search-n8n-docs skill execution
func (s *SearchN8NDocsSkill) SearchN8NDocsHandler(ctx context.Context, args map[string]any) (string, error) {
	var p SearchN8nDocsArgs
	if query, ok := args["query"].(string); ok {
		p.Query = strings.TrimSpace(strings.ToLower(query))
	} else {
		return "", fmt.Errorf("query parameter is required")
	}

	if nodeType, ok := args["node_type"].(string); ok {
		p.NodeType = strings.TrimSpace(strings.ToLower(nodeType))
	}

	if category, ok := args["category"].(string); ok {
		p.Category = strings.TrimSpace(strings.ToLower(category))
	}

	if p.Query == "" {
		return "", fmt.Errorf("query cannot be empty")
	}

	results, err := searchDocumentation(p.Query, p.NodeType, p.Category)
	if err != nil {
		return "", fmt.Errorf("failed to search documentation: %v", err)
	}

	if len(results) == 0 {
		return "No matching documentation found for your query. Try using more general terms or check the available nodes in docs/nodes/README.md", nil
	}

	content := fmt.Sprintf("Found %d matching N8N nodes:\n\n", len(results))
	for _, result := range results {
		content += fmt.Sprintf("## %s\n", result.Name)
		content += fmt.Sprintf("**Type**: `%s`\n", result.NodeType)
		content += fmt.Sprintf("**Description**: %s\n", result.Description)
		if result.Category != "" {
			content += fmt.Sprintf("**Category**: %s\n", result.Category)
		}
		content += fmt.Sprintf("**File**: docs/nodes/%s\n", result.Filename)
		if len(result.Excerpt) > 0 {
			content += fmt.Sprintf("**Usage Example**:\n```yaml\n%s\n```\n", result.Excerpt)
		}
		content += "\n---\n\n"
	}

	return content, nil
}

// DocResult represents a search result
type DocResult struct {
	Name        string
	NodeType    string
	Description string
	Category    string
	Filename    string
	Excerpt     string
}

// searchDocumentation searches through the docs/nodes directory
func searchDocumentation(query, nodeType, category string) ([]DocResult, error) {
	var results []DocResult
	docsPath := "docs/nodes"

	err := filepath.WalkDir(docsPath, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if !d.IsDir() && strings.HasSuffix(path, ".md") && path != "docs/nodes/README.md" {
			content, err := os.ReadFile(path)
			if err != nil {
				return nil
			}

			contentStr := strings.ToLower(string(content))
			filename := filepath.Base(path)

			if nodeType != "" && !strings.Contains(contentStr, nodeType) {
				return nil
			}

			if category != "" {
				if category == "trigger" && !strings.Contains(filename, "trigger") {
					return nil
				}
				if category == "langchain" && !strings.Contains(filename, "langchain") {
					return nil
				}
			}

			if strings.Contains(contentStr, query) || strings.Contains(filename, query) {
				result := parseDocumentationFile(string(content), filename)
				if result != nil {
					results = append(results, *result)
				}
			}
		}

		return nil
	})

	if err != nil {
		return nil, err
	}

	if len(results) > 10 {
		results = results[:10]
	}

	return results, nil
}

// parseDocumentationFile extracts metadata from a documentation file
func parseDocumentationFile(content, filename string) *DocResult {
	lines := strings.Split(content, "\n")
	result := &DocResult{
		Filename: filename,
	}

	var yamlExample strings.Builder
	inYamlBlock := false
	yamlLineCount := 0

	for i, line := range lines {
		if result.Name == "" && strings.HasPrefix(line, "# ") {
			result.Name = strings.TrimPrefix(line, "# ")
		}

		if result.Description == "" && strings.HasPrefix(line, "## Description") && i+2 < len(lines) {
			desc := strings.TrimSpace(lines[i+2])
			if desc != "" && !strings.HasPrefix(desc, "**") {
				result.Description = desc
			}
		}

		if strings.Contains(line, "type: n8n-nodes-base.") || strings.Contains(line, "type: @n8n/n8n-nodes-langchain.") {
			parts := strings.Split(line, "type: ")
			if len(parts) > 1 {
				result.NodeType = strings.TrimSpace(parts[1])
			}
		}

		if strings.Contains(line, "```yaml") {
			inYamlBlock = true
			yamlLineCount = 0
			continue
		}
		if inYamlBlock && strings.Contains(line, "```") {
			break
		}
		if inYamlBlock && yamlLineCount < 8 {
			yamlExample.WriteString(line + "\n")
			yamlLineCount++
		}
	}

	if strings.Contains(strings.ToLower(filename), "trigger") {
		result.Category = "trigger"
	} else if strings.Contains(strings.ToLower(filename), "langchain") {
		result.Category = "langchain"
	} else {
		result.Category = "action"
	}

	result.Excerpt = strings.TrimSpace(yamlExample.String())

	if result.Name == "" {
		result.Name = strings.TrimSuffix(filename, ".md")
	}
	if result.Description == "" {
		result.Description = "N8N node for automation workflows"
	}

	return result
}
