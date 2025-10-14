# AGENTS.md

This file describes the agents available in this A2A (Agent-to-Agent) system.

## Agent Overview

### n8n-agent
**Version**: 0.2.0  
**Description**: A2A agent server specialized in generating and automating n8n workflows

This agent is built using the Agent Definition Language (ADL) and provides A2A communication capabilities.

## Agent Capabilities



- **Streaming**: ✅ Real-time response streaming supported


- **Push Notifications**: ❌ Server-sent events not supported


- **State History**: ❌ State transition history not tracked



## AI Configuration





**System Prompt**: You are an expert N8N workflow automation assistant. Your role is to help users build powerful automation workflows using N8N.

Your primary capabilities:
1. **Documentation Search**: Use the search_n8n_docs skill to search through comprehensive N8N node documentation to find the right nodes for any task
2. **Workflow Generation**: Create complete, working N8N workflow YAML files based on user requirements using your knowledge and the create_artifact tool
3. **Workflow Validation**: Use the validate_n8n_workflow skill to ensure all workflows are valid before creating artifacts

Key knowledge areas:
- 497+ N8N nodes including standard nodes and LangChain AI nodes
- Best practices for workflow design and node configuration
- Integration patterns for popular services (Slack, Gmail, databases, APIs, etc.)
- Trigger types and when to use them (webhooks, schedules, manual triggers)
- Data transformation and flow control
- Error handling and workflow optimization

When helping users:
- Always search documentation first to ensure accurate node usage
- Provide complete, working YAML configurations
- Include proper parameter configurations with examples
- Suggest best practices for workflow organization
- Consider error handling and edge cases
- Explain the workflow logic clearly

Your responses should be practical, accurate, and ready-to-use.

**CRITICAL - Workflow Generation Process**:
When a user requests a workflow, follow these steps EXACTLY:

Step 1: Search for relevant nodes
- Use search_n8n_docs to find appropriate nodes for the workflow requirements

Step 2: Generate the complete workflow YAML
- Create a complete, working N8N workflow YAML with all necessary nodes
- Include proper node IDs, parameters, connections, and positions
- Add error handling and best practices

Step 3: Validate the workflow (MANDATORY)
- Use validate_n8n_workflow to ensure the workflow is valid
- Fix any validation errors before proceeding
- Repeat validation until the workflow passes all checks

Step 4: Save as artifact (MANDATORY)
- Use the create_artifact tool to save the workflow YAML
- Filename should be descriptive (e.g., "customer_onboarding_workflow.yaml")
- Content must be valid YAML format

Step 5: Respond concisely
- Provide a brief 2-3 sentence description
- Include the artifact download link
- List required configuration steps
- Do NOT include the full YAML in your response

Example workflow generation:
I've created a customer onboarding workflow with webhook trigger, Airtable integration, email sending, and Slack notifications.

Download: [customer_onboarding_workflow.yaml](artifact_url)

Configuration needed:
- Add Airtable API credentials
- Configure email service (Gmail/SendGrid)
- Add Slack webhook URL
- Set webhook URL in your form

IMPORTANT: You must ALWAYS use create_artifact for workflows. Never return full YAML in your response.

Your automation solutions should be maintainable, efficient, and production-ready.



**Configuration:**




## Skills


This agent provides 2 skills:


### search_n8n_docs
- **Description**: Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns
- **Tags**: documentation, search, n8n
- **Input Schema**: Defined in agent configuration
- **Output Schema**: Defined in agent configuration


### validate_n8n_workflow
- **Description**: Validate N8N workflow YAML/JSON to ensure it follows the correct schema and has all required attributes before creating artifacts
- **Tags**: validation, workflow, n8n, yaml, json
- **Input Schema**: Defined in agent configuration
- **Output Schema**: Defined in agent configuration




## Server Configuration

**Port**: 8080

**Debug Mode**: ❌ Disabled



**Authentication**: ❌ Not required


## API Endpoints

The agent exposes the following HTTP endpoints:

- `GET /.well-known/agent-card.json` - Agent metadata and capabilities
- `POST /skills/{skill_name}` - Execute a specific skill
- `GET /skills/{skill_name}/stream` - Stream skill execution results

## Environment Setup

### Required Environment Variables

Key environment variables you'll need to configure:



- `PORT` - Server port (default: 8080)

### Development Environment


**Flox Environment**: ✅ Configured for reproducible development setup




## Usage

### Starting the Agent

```bash
# Install dependencies
go mod download

# Run the agent
go run main.go

# Or use Task
task run
```


### Communicating with the Agent

The agent implements the A2A protocol and can be communicated with via HTTP requests:

```bash
# Get agent information
curl http://localhost:8080/.well-known/agent-card.json



# Execute search_n8n_docs skill
curl -X POST http://localhost:8080/skills/search_n8n_docs \
  -H "Content-Type: application/json" \
  -d '{"input": "your_input_here"}'

# Execute validate_n8n_workflow skill
curl -X POST http://localhost:8080/skills/validate_n8n_workflow \
  -H "Content-Type: application/json" \
  -d '{"input": "your_input_here"}'


```

## Deployment


**Deployment Type**: Manual
- Build and run the agent binary directly
- Use provided Dockerfile for containerized deployment



### Docker Deployment
```bash
# Build image
docker build -t n8n-agent .

# Run container
docker run -p 8080:8080 n8n-agent
```


## Development

### Project Structure

```
.
├── main.go              # Server entry point
├── skills/              # Business logic skills

│   └── search_n8n_docs.go   # Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns

│   └── validate_n8n_workflow.go   # Validate N8N workflow YAML/JSON to ensure it follows the correct schema and has all required attributes before creating artifacts

├── .well-known/         # Agent configuration
│   └── agent-card.json  # Agent metadata
├── go.mod               # Go module definition
└── README.md            # Project documentation
```


### Testing

```bash
# Run tests
task test
go test ./...

# Run with coverage
task test:coverage
```


## Contributing

1. Implement business logic in skill files (replace TODO placeholders)
2. Add comprehensive tests for new functionality
3. Follow the established code patterns and conventions
4. Ensure proper error handling throughout
5. Update documentation as needed

## Agent Metadata

This agent was generated using ADL CLI v0.2.0 with the following configuration:

- **Language**: Go
- **Template**: Minimal A2A Agent
- **ADL Version**: adl.dev/v1

---

For more information about A2A agents and the ADL specification, visit the [ADL CLI documentation](https://github.com/inference-gateway/adl-cli).
