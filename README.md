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
| [Generate a workflow from a plain-English request](examples/generate-a-workflow-from-a-plain-english-request/) | Ask for "a workflow that posts new Airtable records to a Slack channel" and the agent searches the relevant n8n nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, and returns it as a downloadable artifact ready to import into n8n. |
| [Look up n8n node documentation](examples/look-up-n8n-node-documentation/) | Ask "which parameters does the HTTP Request node take?" and the agent uses search_n8n_docs to query its 520+ node documentation set (standard and LangChain AI nodes), answering with accurate node types, categories, and parameters. |
| [Validate an existing workflow](examples/validate-an-existing-workflow/) | Paste an n8n workflow in YAML or JSON and the agent runs validate_n8n_workflow to check it against the schema, confirm required attributes, and report errors and warnings before you import it. |
| [Scaffold a scheduled automation](examples/scaffold-a-scheduled-automation/) | Describe a trigger plus actions - for example "every morning fetch new RSS items and email a digest" - and the agent selects an appropriate trigger node, wires the actions and connections, and produces a ready-to-run workflow with follow-up configuration notes. |

## Skills (loaded into the system prompt)

| Skill | Description | Source |
|-------|-------------|--------|
| `n8n-workflow-generation` | Use this when the user requests a new n8n workflow or asks to automate a process. Searches relevant nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, then saves it via create_artifact. | bare scaffold (`skills/n8n-workflow-generation.md`) |

## Documentation
- [Setup](docs/setup.md)
- [Configuration](docs/configuration.md)
- [Usage](docs/usage.md)

## Configuration

The agent is configured via environment variables. Defaults are derived
from `agent.yaml`; see [CONFIGURATIONS.md](CONFIGURATIONS.md) for the
full reference of custom and `A2A_*` variables.

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
