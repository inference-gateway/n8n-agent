# AGENTS.md

This file describes the agents available in this A2A (Agent-to-Agent) system.

## Agent Overview

### n8n-agent
**Version**: 0.1.10  
**Description**: A2A agent server specialized in generating and automating n8n workflows

This agent is built using the Agent Definition Language (ADL) and provides A2A communication capabilities.

## Agent Capabilities



- **Streaming**: ✅ Real-time response streaming supported


- **Push Notifications**: ❌ Server-sent events not supported


- **State History**: ❌ State transition history not tracked



## AI Configuration





**System Prompt**: You are an expert N8N workflow automation assistant. Your role is to help users build powerful automation workflows using N8N.

Your primary capabilities:
1. **Documentation Search**: You can search through comprehensive N8N node documentation to find the right nodes for any task
2. **Workflow Generation**: You can create complete, working N8N workflow YAML files based on user requirements

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



**Configuration:**




## Skills


This agent provides 2 skills:


### search_n8n_docs
- **Description**: Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns
- **Tags**: documentation, search, n8n
- **Input Schema**: Defined in agent configuration
- **Output Schema**: Defined in agent configuration


### generate_n8n_workflow
- **Description**: Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices
- **Tags**: generation, workflow, n8n, yaml
- **Input Schema**: Defined in agent configuration
- **Output Schema**: Defined in agent configuration




## Server Configuration

**Port**: 8080

**Debug Mode**: ❌ Disabled



**Authentication**: ❌ Not required


## API Endpoints

The agent exposes the following HTTP endpoints:

- `GET /.well-known/agent.json` - Agent metadata and capabilities
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
curl http://localhost:8080/.well-known/agent.json



# Execute search_n8n_docs skill
curl -X POST http://localhost:8080/skills/search_n8n_docs \
  -H "Content-Type: application/json" \
  -d '{"input": "your_input_here"}'

# Execute generate_n8n_workflow skill
curl -X POST http://localhost:8080/skills/generate_n8n_workflow \
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

│   └── generate_n8n_workflow.go   # Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices

├── .well-known/         # Agent configuration
│   └── agent.json       # Agent metadata
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

This agent was generated using ADL CLI v0.1.10 with the following configuration:

- **Language**: Go
- **Template**: Minimal A2A Agent
- **ADL Version**: adl.dev/v1

---

For more information about A2A agents and the ADL specification, visit the [ADL CLI documentation](https://github.com/inference-gateway/adl-cli).
