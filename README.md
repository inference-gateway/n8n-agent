<div align="center">

# n8n Agent

[![CI](https://github.com/inference-gateway/n8n-agent/workflows/CI/badge.svg)](https://github.com/inference-gateway/n8n-agent/actions/workflows/ci.yml)
[![Go Report Card](https://img.shields.io/badge/Go%20Report%20Card-A+-brightgreen?style=flat&logo=go&logoColor=white)](https://goreportcard.com/report/github.com/inference-gateway/n8n-agent)
[![Go Version](https://img.shields.io/badge/Go-1.26.4+-00ADD8?style=flat&logo=go)](https://golang.org)
[![A2A Protocol](https://img.shields.io/badge/A2A-Protocol-blue?style=flat)](https://github.com/inference-gateway/adk)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

**A2A agent server specialized in generating and automating n8n workflows**

A enterprise-ready [Agent-to-Agent (A2A)](https://github.com/inference-gateway/adk) server that provides AI-powered capabilities through a standardized protocol.

</div>

## Quick Start

The generated binary is a CLI. `start` boots the A2A server; `--help` and
`--version` work as you'd expect.

```bash
# Run the agent
go run . start

# Or build and invoke the CLI directly
task build
./bin/n8n-agent --help
./bin/n8n-agent --version
./bin/n8n-agent start

# Or with Docker
docker build -t n8n-agent .
docker run -p 8080:8080 n8n-agent
```

### CLI

| Command | Description |
|---------|-------------|
| `n8n-agent start` | Start the A2A server (blocks until SIGINT/SIGTERM) |
| `n8n-agent --help` | Show top-level help (and per-subcommand with `<cmd> --help`) |
| `n8n-agent --version` | Print the embedded version and exit |

## Quick Install

Add this agent to your Inference Gateway CLI:

```bash
infer agents add n8n-agent http://localhost:8080 \
  --oci ghcr.io/inference-gateway/n8n-agent:latest \
  --run
```

## Features

- ✅ A2A protocol compliant
- ✅ AI-powered capabilities
- ✅ Streaming support
- ✅ Enterprise-ready
- ✅ Minimal dependencies

## Endpoints

- `GET /.well-known/agent-card.json` - Agent metadata and capabilities
- `GET /health` - Health check endpoint
- `POST /a2a` - A2A protocol endpoint

## Available Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `Read` | Read a file from disk. Returns its contents, optionally sliced by line offset/limit. Use this to load SKILL.md bodies on demand. | file_path, offset, limit |
| `search_n8n_docs` | Search through N8N node documentation to find relevant information about specific nodes, their parameters, and usage patterns | category, node_type, query |
| `validate_n8n_workflow` | Validate N8N workflow YAML/JSON to ensure it follows the correct schema and has all required attributes before creating artifacts | format, workflow_content |

## Examples

| Example | Description |
|---------|-------------|
| Generate a workflow from a plain-English request | Ask for "a workflow that posts new Airtable records to a Slack channel" and the agent searches the relevant n8n nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, and returns it as a downloadable artifact ready to import into n8n. |
| Look up n8n node documentation | Ask "which parameters does the HTTP Request node take?" and the agent uses search_n8n_docs to query its 520+ node documentation set (standard and LangChain AI nodes), answering with accurate node types, categories, and parameters. |
| Validate an existing workflow | Paste an n8n workflow in YAML or JSON and the agent runs validate_n8n_workflow to check it against the schema, confirm required attributes, and report errors and warnings before you import it. |
| Scaffold a scheduled automation | Describe a trigger plus actions - for example "every morning fetch new RSS items and email a digest" - and the agent selects an appropriate trigger node, wires the actions and connections, and produces a ready-to-run workflow with follow-up configuration notes. |

## Skills (loaded into the system prompt)

| Skill | Description | Source |
|-------|-------------|--------|
| `n8n-workflow-generation` | Use this when the user requests a new n8n workflow or asks to automate a process. Searches relevant nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, then saves it via create_artifact. | bare scaffold (`skills/n8n-workflow-generation.md`) |

## Documentation
- [Setup](docs/setup.md)
- [Configuration](docs/configuration.md)
- [Usage](docs/usage.md)

## Configuration

Configure the agent via environment variables:

### Custom Configuration

The following custom configuration variables are available. Defaults are
derived from `spec.config.*` in `agent.yaml`; the env vars below override
them at runtime.

| Category | Variable | Default |
|----------|----------|---------|
| **Tools** | `TOOLS_READ_ENABLED` | `true` |

### Environment Variables

| Category | Variable | Description | Default |
|----------|----------|-------------|---------|
| **Server** | `A2A_PORT` | Server port | `8080` |
| **Server** | `A2A_DEBUG` | Enable debug mode | `false` |
| **Server** | `A2A_AGENT_URL` | Agent URL for internal references | `http://localhost:8080` |
| **Server** | `A2A_STREAMING_STATUS_UPDATE_INTERVAL` | Streaming status update frequency | `1s` |
| **Server** | `A2A_SERVER_READ_TIMEOUT` | HTTP server read timeout | `120s` |
| **Server** | `A2A_SERVER_WRITE_TIMEOUT` | HTTP server write timeout | `120s` |
| **Server** | `A2A_SERVER_IDLE_TIMEOUT` | HTTP server idle timeout | `120s` |
| **Server** | `A2A_SERVER_DISABLE_HEALTHCHECK_LOG` | Disable logging for health check requests | `true` |
| **Agent Metadata** | `A2A_AGENT_CARD_FILE_PATH` | Path to agent card JSON file | `.well-known/agent-card.json` |
| **LLM Client** | `A2A_AGENT_CLIENT_PROVIDER` | LLM provider (`openai`, `anthropic`, `azure`, `ollama`, `deepseek`) |`` |
| **LLM Client** | `A2A_AGENT_CLIENT_MODEL` | Model to use |`` |
| **LLM Client** | `A2A_AGENT_CLIENT_API_KEY` | API key for LLM provider | - |
| **LLM Client** | `A2A_AGENT_CLIENT_BASE_URL` | Custom LLM API endpoint | - |
| **LLM Client** | `A2A_AGENT_CLIENT_TIMEOUT` | Timeout for LLM requests | `30s` |
| **LLM Client** | `A2A_AGENT_CLIENT_MAX_RETRIES` | Maximum retries for LLM requests | `3` |
| **LLM Client** | `A2A_AGENT_CLIENT_MAX_CHAT_COMPLETION_ITERATIONS` | Max chat completion rounds | `10` |
| **LLM Client** | `A2A_AGENT_CLIENT_MAX_TOKENS` | Maximum tokens for LLM responses |`4096` |
| **LLM Client** | `A2A_AGENT_CLIENT_TEMPERATURE` | Controls randomness of LLM output |`0.7` |
| **Capabilities** | `A2A_CAPABILITIES_STREAMING` | Enable streaming responses | `true` |
| **Capabilities** | `A2A_CAPABILITIES_PUSH_NOTIFICATIONS` | Enable push notifications | `false` |
| **Capabilities** | `A2A_CAPABILITIES_STATE_TRANSITION_HISTORY` | Track state transitions | `false` |
| **Task Management** | `A2A_TASK_RETENTION_MAX_COMPLETED_TASKS` | Max completed tasks to keep (0 = unlimited) | `100` |
| **Task Management** | `A2A_TASK_RETENTION_MAX_FAILED_TASKS` | Max failed tasks to keep (0 = unlimited) | `50` |
| **Task Management** | `A2A_TASK_RETENTION_CLEANUP_INTERVAL` | Cleanup frequency (0 = manual only) | `5m` |
| **Storage** | `A2A_QUEUE_PROVIDER` | Storage backend (`memory` or `redis`) | `memory` |
| **Storage** | `A2A_QUEUE_URL` | Redis connection URL (when using Redis) | - |
| **Storage** | `A2A_QUEUE_MAX_SIZE` | Maximum queue size | `100` |
| **Storage** | `A2A_QUEUE_CLEANUP_INTERVAL` | Task cleanup interval | `30s` |
| **Artifacts** | `A2A_ARTIFACTS_ENABLE` | Enable artifacts support | `false` |
| **Artifacts** | `A2A_ARTIFACTS_SERVER_HOST` | Artifacts server host | `localhost` |
| **Artifacts** | `A2A_ARTIFACTS_SERVER_PORT` | Artifacts server port | `8081` |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_PROVIDER` | Storage backend (`filesystem` or `minio`) | `filesystem` |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_BASE_PATH` | Base path for filesystem storage | `./artifacts` |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_BASE_URL` | Override base URL for direct downloads | (auto-generated) |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_ENDPOINT` | MinIO/S3 endpoint URL | - |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_ACCESS_KEY` | MinIO/S3 access key | - |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_SECRET_KEY` | MinIO/S3 secret key | - |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_BUCKET_NAME` | MinIO/S3 bucket name | `artifacts` |
| **Artifacts** | `A2A_ARTIFACTS_STORAGE_USE_SSL` | Use SSL for MinIO/S3 connections | `true` |
| **Artifacts** | `A2A_ARTIFACTS_RETENTION_MAX_ARTIFACTS` | Max artifacts per task (0 = unlimited) | `5` |
| **Artifacts** | `A2A_ARTIFACTS_RETENTION_MAX_AGE` | Max artifact age (0 = no age limit) | `168h` |
| **Artifacts** | `A2A_ARTIFACTS_RETENTION_CLEANUP_INTERVAL` | Cleanup frequency (0 = manual only) | `24h` |
| **Authentication** | `A2A_AUTH_ENABLE` | Enable OIDC authentication | `false` |

## Development

```bash
# Generate code from ADL
task generate

# Run tests
task test

# Build the application
task build

# Run linter
task lint

# Format code
task fmt
```

### Adding Dependencies

The generator owns the baseline toolchain pins (SDK, server framework,
logging, CLI, sandbox utilities). To extend the project without forking
the templates, declare extras in `agent.yaml` - every empty list below
is rendered by `adl init --defaults` precisely so it's discoverable:

| Where | Purpose | Example entry | Rendered into |
|-------|---------|---------------|---------------|
| `spec.language.go.vendor.deps` | Runtime Go modules | `github.com/stretchr/testify@v1.10.0` | `go.mod` `require` block |
| `spec.language.go.vendor.devdeps` | Executable dev tools (Go 1.24 `tool` directive) | `golang.org/x/tools/cmd/stringer@v0.20.0` | `go.mod` `tool` directive |
| `spec.development.deps` | Cross-cutting sandbox tools (not tied to one language) | `kubectl@1.31.0`, `terraform@1.9.5`, `deno@2.1.4` | Flox `manifest.toml` / devcontainer feature |

Entries use the `<package>@<version>` form. Built-in pins always win on
conflict; the generator prints a warning and skips the user entry when
shadowing is attempted. After editing `agent.yaml`, re-run `task generate`
to refresh the manifests.

### Debugging

Use the [A2A Debugger](https://github.com/inference-gateway/a2a-debugger) to test and debug your A2A agent during development. It provides a web interface for sending requests to your agent and inspecting responses, making it easier to troubleshoot issues and validate your implementation.

```bash
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest --server-url http://localhost:8080 tasks submit "What are your skills?"
```

```bash
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest --server-url http://localhost:8080 tasks list
```

```bash
docker run --rm -it --network host ghcr.io/inference-gateway/a2a-debugger:latest --server-url http://localhost:8080 tasks get <task ID>
```

## Deployment

### Docker

The Docker image can be built with custom version information using build arguments:

```bash
# Build with default values from ADL
docker build -t n8n-agent .

# Build with custom version information
docker build \
  --build-arg VERSION=1.2.3 \
  --build-arg AGENT_NAME="My Custom Agent" \
  --build-arg AGENT_DESCRIPTION="Custom agent description" \
  -t n8n-agent:1.2.3 .
```

**Available Build Arguments:**

- `VERSION` - Agent version (default: `0.2.7`)
- `AGENT_NAME` - Agent name (default: `n8n-agent`)
- `AGENT_DESCRIPTION` - Agent description (default: `A2A agent server specialized in generating and automating n8n workflows`)

These values are embedded into the binary at build time using linker flags, making them accessible at runtime without requiring environment variables.

## License

Apache 2.0 License - see LICENSE file for details
