# N8N Agent Skills

This directory contains the custom skills implemented for the n8n-agent. These skills enable the agent to assist users with N8N workflow automation.

## Available Skills

### 1. search-n8n-docs

**Description**: Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns.

**Parameters**:
- `query` (required): Search query to find relevant N8N nodes or documentation
- `node_type` (optional): Filter by specific node type (e.g., "webhook", "http", "database")  
- `category` (optional): Filter by category (e.g., "trigger", "action", "langchain")

**Usage Example**:
```json
{
  "query": "send email",
  "category": "action"
}
```

**Features**:
- Searches through 497+ N8N node documentation files
- Extracts node names, types, descriptions, and YAML examples
- Supports filtering by node type and category
- Returns formatted results with usage examples

### 2. generate-n8n-workflow

**Description**: Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices.

**Parameters**:
- `workflow_description` (required): Description of what the workflow should accomplish
- `trigger_type` (optional): Preferred trigger type (e.g., "webhook", "schedule", "manual")
- `integrations` (optional): List of services or platforms to integrate (e.g., ["slack", "gmail", "database"])

**Usage Example**:
```json
{
  "workflow_description": "Send a Slack notification when a new user registers",
  "trigger_type": "webhook",
  "integrations": ["slack"]
}
```

**Features**:
- Generates complete, working N8N workflow YAML configurations
- Supports multiple trigger types (webhook, schedule, manual)
- Includes common integrations (Slack, email, databases, HTTP APIs)
- Provides usage instructions and next steps
- Follows n8n-cli format for easy deployment

## Implementation Details

### Architecture

Both skills implement the `server.Tool` interface from the ADK (Agent Development Kit):

```go
type Tool interface {
    GetName() string
    GetDescription() string
    GetParameters() map[string]any
    Execute(ctx context.Context, arguments map[string]any) (string, error)
}
```

### Documentation Search Logic

The `search-n8n-docs` skill:

1. **File Discovery**: Walks through the `docs/nodes/` directory to find markdown files
2. **Content Analysis**: Reads and parses documentation files to extract metadata
3. **Query Matching**: Performs case-insensitive matching on file names and content
4. **Filtering**: Applies optional filters for node type and category
5. **Result Formatting**: Returns structured results with examples

### Workflow Generation Logic

The `generate-n8n-workflow` skill:

1. **Requirement Analysis**: Parses the workflow description and parameters
2. **Trigger Selection**: Chooses appropriate trigger node based on type preference
3. **Integration Mapping**: Maps requested integrations to N8N node types
4. **Pattern Matching**: Analyzes description for common workflow patterns
5. **YAML Generation**: Constructs complete workflow YAML with proper structure

## Supported Integrations

The workflow generator supports the following integrations:

- **Communication**: Slack, Email (Gmail/SMTP), Telegram
- **Databases**: PostgreSQL, MongoDB, MySQL
- **APIs**: HTTP Request, Webhook Response
- **File Operations**: File read/write, data transformation
- **Automation**: Scheduled triggers, manual triggers

## Error Handling

Both skills implement robust error handling:

- Parameter validation with clear error messages
- File system error handling for documentation search
- Graceful degradation when documentation is missing
- Input sanitization to prevent issues

## Testing

Currently no automated tests are implemented. To test the skills:

1. Start the n8n-agent server
2. Use the A2A protocol to call the skills
3. Verify the returned results match expectations

### Manual Testing Examples

#### Testing Documentation Search:
```bash
# Use A2A debugger to test
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 tasks submit "Search for webhook nodes"
```

#### Testing Workflow Generation:
```bash
# Use A2A debugger to test
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 tasks submit "Create a workflow to send Slack notifications when receiving webhooks"
```

## Future Enhancements

Potential improvements for these skills:

1. **Enhanced Search**: 
   - Fuzzy matching for typos
   - Semantic search using embeddings
   - Search result ranking

2. **Advanced Workflow Generation**:
   - Error handling nodes
   - Conditional logic branches  
   - Loop and iteration patterns
   - Integration with external APIs for validation

3. **Testing**:
   - Unit tests for core functions
   - Integration tests with mock data
   - Performance benchmarks

4. **Documentation**:
   - Interactive examples
   - Video tutorials
   - Best practices guide

## Contributing

When modifying these skills:

1. Follow the existing code structure and patterns
2. Update documentation and examples
3. Add appropriate error handling
4. Test manually before committing
5. Consider backward compatibility

## Dependencies

- `github.com/inference-gateway/adk/server`: ADK framework for tools
- Standard Go libraries for file operations and string processing
- N8N documentation files in `docs/nodes/` directory

---

Generated as part of the n8n-agent A2A server implementation.