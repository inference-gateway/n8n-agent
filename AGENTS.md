# AGENTS.md

This file describes the agents available in this A2A (Agent-to-Agent) system.

## Agent Overview

### n8n-agent
**Version**: 0.1.0  
**Description**: A helpful AI agent

This agent is built using the Agent Definition Language (ADL) and provides A2A communication capabilities.

## Agent Capabilities



- **Streaming**: ✅ Real-time response streaming supported


- **Push Notifications**: ❌ Server-sent events not supported


- **State History**: ❌ State transition history not tracked



## AI Configuration





**System Prompt**: You are a helpful AI assistant.


**Configuration:**




## Skills


No skills defined - this agent provides basic A2A communication without specialized capabilities.


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

This agent was generated using ADL CLI v0.1.0 with the following configuration:

- **Language**: Go
- **Template**: Minimal A2A Agent
- **Generated**: 2025-09-05 18:43:06 UTC
- **ADL Version**: adl.dev/v1

---

For more information about A2A agents and the ADL specification, visit the [ADL CLI documentation](https://github.com/inference-gateway/adl-cli).
