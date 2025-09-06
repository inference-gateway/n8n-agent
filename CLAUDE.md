# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

n8n-agent is an A2A (Agent-to-Agent) server implementing the [A2A Protocol](https://github.com/inference-gateway/adk) for agent-to-agent communication. A helpful AI agent. The project is automatically generated from ADL (Agent Definition Language) specifications defined in `agent.yaml`.

## Core Architecture

### ADL-Generated Structure

The codebase is generated using ADL CLI 0.18.2 and follows a strict generation pattern:
- **Generated Files**: Marked with `DO NOT EDIT` headers - manual changes will be overwritten
- **Configuration Source**: `agent.yaml` - defines agent capabilities, skills, and metadata
- **Server Implementation**: Built on the ADK (Agent Development Kit) framework from `github.com/inference-gateway/adk`

### Key Components

- **Main Entry Point**: `main.go` - Configures and starts the A2A server with:
  - OpenAI-compatible LLM client configuration
  - Agent builder with system prompt from `agent.yaml`
  - A2A server with streaming and background task handlers
  - Graceful shutdown handling

- **Agent Configuration**: `.well-known/agent.json` - Serves agent metadata at runtime
- **Environment Configuration**: Extensive env vars with `A2A_` prefix (see README for full list)

## Development Commands

```bash
# Install ADL CLI (required for code generation)
task install

# Generate/regenerate code from ADL specification
task generate

# Run the agent in development mode (debug enabled, port 8080)
task run

# Run tests (note: no tests currently exist)
task test
task test:cover  # with coverage

# Code quality
task lint         # Run golangci-lint
task fmt          # Format code with go fmt

# Build
task build        # Creates bin/n8n-agent
task docker:build # Build Docker image

# Clean build artifacts
task clean
```

## Testing Individual Components

```bash
# Run specific test file (when tests are added)
go test -v ./path/to/package -run TestFunctionName

# Debug with A2A Debugger
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 tasks submit "Your query"
```

## LLM Provider Configuration

The agent uses OpenAI-compatible LLM client. Configure with:
- `A2A_AGENT_CLIENT_PROVIDER`: `openai`, `anthropic`, `azure`, `ollama`, `deepseek`
- `A2A_AGENT_CLIENT_MODEL`: Model identifier
- `A2A_AGENT_CLIENT_API_KEY`: Provider API key
- `A2A_AGENT_CLIENT_BASE_URL`: Custom endpoint (optional)

## Adding New Functionality

### Skills Implementation
The following skills are currently defined:
- **search-n8n-docs**: Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns
- **generate-n8n-workflow**: Generate complete N8N workflow YAML configurations based on user requirements, using documented nodes and best practices

To modify skills:
1. **Install ADL CLI first**: Run `task install` to ensure ADL CLI is available
2. Update `agent.yaml` with skill definitions (ensure each skill has `id`, `name`, `type`, `tags`, and `schema` fields)
3. **REQUIRED**: Run `task generate` to regenerate the codebase after any skill changes
4. Implement skill logic in generated skill files (look for TODO placeholders)
5. Write tests for each skill

**Critical Requirements for `task generate`:**
- The `task generate` command must be executed after adding or modifying skills in `agent.yaml`
- Skills require `id`, `name`, `type` (usually "function"), `tags` (array), and `schema` (JSON Schema) fields
- ADL CLI must be installed first using `task install`
- The command should complete with exit code 0 (success) before proceeding with development

### Modifying Agent Behavior

- **System Prompt**: Edit in `agent.yaml`, then regenerate
- **Capabilities**: Modify in `agent.yaml` (streaming, pushNotifications, stateTransitionHistory)
- **Server Configuration**: Update environment variables or `agent.yaml` server section

## Testing Strategy

When implementing tests:
- Create `*_test.go` files alongside implementation files
- Use table-driven tests for comprehensive coverage
- Mock external dependencies (LLM client, Redis if used)
- Test A2A protocol compliance with integration tests

## Environment Management
The project includes Flox environment configuration (`.flox/env/manifest.toml`) providing:
- Go 1.24
- golangci-lint (linter)
- go-task (Task runner)
- Docker
- Claude Code CLI

**ADL CLI Installation:**
- Use `task install` command to download and install ADL CLI v0.18.2
- Installation command: `curl -fsSL https://raw.githubusercontent.com/inference-gateway/adl-cli/main/install.sh | bash`
- Installs to `~/.local/bin/adl` and verifies PATH availability

Activate Flox with: `flox activate` (if Flox is installed)

## Important Constraints

- **Generated Files**: Never manually edit files with "DO NOT EDIT" headers
- **Configuration Changes**: Always modify `agent.yaml` and regenerate with `task generate`
- **ADL CLI Requirement**: Use `task install` to install ADL CLI before running `task generate`
- **Skills Validation**: All skills in `agent.yaml` must have `id`, `name`, `type`, `tags`, and `schema` fields
- **Generate Command Success**: The `task generate` command must complete successfully before development can proceed
- **Port Configuration**: Default 8080, configurable via `A2A_PORT` or `A2A_SERVER_PORT`

## Known Issues

### ADL CLI Template Error
The `task generate` command currently has a known template error:
- **Error**: `failed to execute template ai/agents.md: template: template:70:15: executing "template" at <.Type>: can't evaluate field Type`
- **Impact**: Most files generate successfully, but generation fails at the final template step
- **Workaround**: The core functionality works - skill validation passes and main files are generated correctly
- **Status**: This appears to be a bug in ADL CLI v0.18.2 template system rather than configuration issue

## Debugging Tips

- Enable debug mode: `A2A_DEBUG=true`
- Check health: `GET /health`
- View agent metadata: `GET /.well-known/agent.json`
- Monitor streaming updates: Set `A2A_STREAMING_STATUS_UPDATE_INTERVAL`
- Use A2A Debugger container for interactive testing
