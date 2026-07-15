# Setup

This guide covers installing, building, and running the n8n-agent - an A2A
server that generates and validates n8n workflows.

## Prerequisites

- An API key for an OpenAI-compatible LLM provider (`openai`, `anthropic`,
  `azure`, `ollama`, or `deepseek`).
- Go 1.26.4+ - only needed to build from source.
- Docker - optional, for the container image.

## Run from source

```bash
# Configure the LLM client (see docs/configuration.md for all variables)
export A2A_AGENT_CLIENT_PROVIDER=openai
export A2A_AGENT_CLIENT_MODEL=gpt-4o
export A2A_AGENT_CLIENT_API_KEY=sk-...

# Start the A2A server on port 8080
go run . start
```

## Build the binary

```bash
task build
./bin/n8n-agent --version
./bin/n8n-agent start
```

## Run with Docker

```bash
docker build -t n8n-agent .
docker run -p 8080:8080 \
  -e A2A_AGENT_CLIENT_PROVIDER=openai \
  -e A2A_AGENT_CLIENT_MODEL=gpt-4o \
  -e A2A_AGENT_CLIENT_API_KEY=sk-... \
  n8n-agent
```

## Add to the Inference Gateway CLI

```bash
infer agents add n8n-agent http://localhost:8080 \
  --oci ghcr.io/inference-gateway/n8n-agent:latest \
  --run
```

## Verify it is running

```bash
curl http://localhost:8080/health
curl http://localhost:8080/.well-known/agent-card.json
```

Next: [Configuration](configuration.md) and [Usage](usage.md).
