# N8N Agent Example

## Overview

This example demonstrates how to run the N8N Agent locally using Docker Compose. The setup includes:

- **N8N Agent**: The A2A agent that provides N8N workflow automation capabilities
- **Inference Gateway**: Acts as the inference service provider for the agent
- **A2A Debugger**: A CLI tool for testing and debugging agent interactions

The N8N Agent uses the Agent-to-Agent (A2A) protocol to provide N8N workflow generation and documentation search capabilities through a standardized API.

## Prerequisites

- Docker and Docker Compose installed
- API keys for your chosen inference provider (e.g., DeepSeek)
- Basic understanding of the A2A protocol
- Knowledge of N8N workflow automation (helpful but not required)

## Quick Start

### 1. Configuration

Copy the example environment files and configure them with your API keys:

```bash
cp .env.example .env
```

#### Environment Variables

**.env** - Agent configuration:
- `ENVIRONMENT`: Set to `development` or `production`
- `A2A_AGENT_URL`: Agent server URL (default: `http://localhost:8080`)
- `A2A_AGENT_CLIENT_PROVIDER`: LLM provider (e.g., `deepseek`)
- `A2A_AGENT_CLIENT_MODEL`: Model to use (e.g., `deepseek/deepseek-chat`)
- `A2A_AGENT_CLIENT_BASE_URL`: Inference service URL (default: `http://inference-gateway:8080/v1`)

**.env.gateway** - Inference Gateway configuration:
- `ENVIRONMENT`: Set to `development` or `production`
- `DEEPSEEK_API_KEY`: Your DeepSeek API key (or other provider's key)

### 2. Start the Services

Launch all services with Docker Compose:

```bash
docker compose up --build
```

This will start:
- N8N Agent on port 8080
- Inference Gateway (internal network)
- Services will auto-restart unless stopped

### 3. Test the Agent

Submit a test query using the A2A debugger:

```bash
docker compose run --rm a2a-debugger tasks submit-streaming "How do I create an email campaign in n8n?"
```

## Usage Examples

### Basic N8N Documentation Query
```bash
docker compose run --rm a2a-debugger tasks submit-streaming "How do I use the HTTP Request node?"
```

### Workflow Generation
```bash
docker compose run --rm a2a-debugger tasks submit-streaming "Create a workflow that sends Slack notifications when new emails arrive"
```

### Submit Non-Streaming Task
```bash
docker compose run --rm a2a-debugger tasks submit "What N8N nodes are available for database operations?"
```

## Architecture

```
┌─────────────┐     A2A Protocol    ┌──────────────────┐
│ A2A         │◄───────────────────►│                  │
│ Debugger    │                     │    N8N Agent     │
└─────────────┘                     └──────────────────┘
                                              │
                                              │ HTTP/REST
                                              ▼
                                     ┌──────────────────┐
                                     │ Inference        │
                                     │ Gateway          │
                                     └──────────────────┘
                                              │
                              ┌───────────────┼───────────────┐
                              ▼               ▼               ▼
                     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
                     │   DeepSeek   │ │    OpenAI    │ │  Anthropic   │
                     │   Provider   │ │   Provider   │ │   Provider   │
                     └──────────────┘ └──────────────┘ └──────────────┘
```

The Inference Gateway provides unified access to multiple LLM providers, allowing the agent to seamlessly switch between different models and providers based on configuration.

## Available Skills

The N8N Agent exposes two primary skills:

1. **search_n8n_docs**: Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns
2. **generate_n8n_workflow**: Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices

View all available skills:
```bash
docker compose run --rm a2a-debugger tools list
```

## Troubleshooting

### Agent Not Responding
- Check if all services are running: `docker compose ps`
- View agent logs: `docker compose logs agent`
- Ensure API keys are correctly set in `.env` files

### API Key Issues
- Verify your inference provider API key (e.g., `DEEPSEEK_API_KEY`) is active
- Ensure the API key has proper permissions for your chosen model

### Debugging Tips
- Enable debug mode by setting `DEBUG=true` in `.env`
- Monitor real-time logs: `docker compose logs -f`
- Test individual services: `docker compose up agent` (run only the agent)

## Development

### Building from Source
```bash
# Build only the agent
docker compose build agent

# Build with no cache
docker compose build --no-cache
```

### Using a Different Inference Provider
You can bypass the Inference Gateway and connect directly to any OpenAI-compatible API by modifying `A2A_AGENT_CLIENT_BASE_URL` in `.env`:

```bash
# Example: Direct OpenAI connection
A2A_AGENT_CLIENT_BASE_URL=https://api.openai.com/v1
A2A_AGENT_CLIENT_PROVIDER=openai
A2A_AGENT_CLIENT_MODEL=gpt-4
```

### Running Services Individually
```bash
# Start only the agent
docker compose up agent

# Start only the gateway
docker compose up inference-gateway

# Run debugger commands manually
docker compose run --rm a2a-debugger --help
```

## Cleanup

Stop all services:
```bash
docker compose down
```

Remove volumes and networks:
```bash
docker compose down -v
```

## Additional Resources

- [A2A Protocol Documentation](https://github.com/inference-gateway/adk)
- [Agent Definition Language (ADL) Spec](https://github.com/inference-gateway/adl)
- [Inference Gateway Documentation](https://github.com/inference-gateway/inference-gateway)
- [N8N Documentation](https://docs.n8n.io/)

## License

See the main repository LICENSE file for details.