# AGENTS.md

This file describes the agents available in this A2A (Agent-to-Agent) system.

## Agent Overview

### n8n-agent
**Version**: 0.2.2  
**Description**: A2A agent server specialized in generating and automating n8n workflows

This agent is built using the Agent Definition Language (ADL) and provides A2A communication capabilities.

## Agent Capabilities
- **Streaming**: ✅ Real-time response streaming supported
- **Push Notifications**: ❌ Server-sent events not supported
- **State History**: ❌ State transition history not tracked

## AI Configuration

**System Prompt**: You are an expert N8N workflow automation assistant. Your role is to help users build powerful automation workflows using N8N.

Your primary capabilities:
1. **Documentation Search**: Use the search_n8n_docs tool to search through comprehensive N8N node documentation to find the right nodes for any task
2. **Workflow Generation**: Create complete, working N8N workflow YAML files based on user requirements using your knowledge and the create_artifact tool
3. **Workflow Validation**: Use the validate_n8n_workflow tool to ensure all workflows are valid before creating artifacts

Key knowledge areas:
- 520+ N8N nodes including standard nodes and LangChain AI nodes
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

Your responses should be practical, accurate, and ready-to-use. Your automation solutions should be maintainable, efficient, and production-ready.

When a user requests a new workflow or asks to automate a process, follow the
n8n-workflow-generation skill — load skills/n8n-workflow-generation/SKILL.md
via the read tool and execute its steps exactly.


**Configuration:**

## Tools

This agent exposes 3 function-call tools:

### Read (built-in)
- **Description**: Read a file from disk. Returns its contents, optionally sliced by line offset/limit. Use this to load SKILL.md bodies on demand.
- **Parameters**: file_path, offset, limit

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

## Skills

This agent ships 1 markdown skill that are loaded into the system prompt at startup:

### n8n-workflow-generation
- **Description**: Use this when the user requests a new n8n workflow or asks to automate a process. Searches relevant nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, then saves it via create_artifact.
- **Tags**: n8n, workflow, automation
- **Source**: scaffolded locally (`skills/n8n-workflow-generation/SKILL.md`)

## Server Configuration

**Port**: 8080
**Debug Mode**: ❌ Disabled
**Authentication**: ❌ Not required

## API Endpoints

The agent exposes the following HTTP endpoints:

- `GET /.well-known/agent-card.json` - Agent metadata and capabilities
- `GET /health` - Health check endpoint
- `POST /a2a` - JSON-RPC endpoint for all A2A operations (skill execution, streaming, etc.)

## Environment Setup

### Required Environment Variables

Key environment variables you'll need to configure:
- `PORT` - Server port (configured: 8080)

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
```

Refer to the main README.md for specific skill execution examples and input schemas.

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
├── main.go                       # Server entry point
├── tools/                        # Function-call tools
│   └── read.go                   # Read a file from disk. Returns its contents, optionally sliced by line offset/limit. Use this to load SKILL.md bodies on demand.
│   └── search_n8n_docs.go        # Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns
│   └── validate_n8n_workflow.go  # Validate N8N workflow YAML/JSON to ensure it follows the correct schema and has all required attributes before creating artifacts
├── skills/                       # Skill directories (SKILL.md + optional assets)
│   └── n8n-workflow-generation/  # Use this when the user requests a new n8n workflow or asks to automate a process. Searches relevant nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, then saves it via create_artifact.
│       └── SKILL.md              # Playbook prepended to the system prompt
├── .well-known/                  # Agent configuration
│   └── agent-card.json           # Agent metadata
├── go.mod                        # Go module definition
└── README.md                     # Project documentation
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

This agent was generated using ADL CLI v0.2.2 with the following configuration:

- **Language**: Go
- **Template**: Minimal A2A Agent
- **ADL Version**: adl.inference-gateway.com/v1

---

For more information about A2A agents and the ADL specification, visit the [ADL CLI documentation](https://github.com/inference-gateway/adl-cli).
