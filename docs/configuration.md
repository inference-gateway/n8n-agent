# Configuration

n8n-agent is configured through environment variables (prefix `A2A_`). This
page lists the variables most relevant to this agent; see the
[README](../README.md#environment-variables) for the complete list.

## LLM provider (required)

The agent needs an OpenAI-compatible LLM client to reason about workflows.

| Variable | Description | Example |
|----------|-------------|---------|
| `A2A_AGENT_CLIENT_PROVIDER` | Provider: `openai`, `anthropic`, `azure`, `ollama`, `deepseek` | `openai` |
| `A2A_AGENT_CLIENT_MODEL` | Model identifier | `gpt-4o` |
| `A2A_AGENT_CLIENT_API_KEY` | Provider API key | `sk-...` |
| `A2A_AGENT_CLIENT_BASE_URL` | Custom endpoint (optional) | `https://api.openai.com/v1` |

## Artifacts (workflow downloads)

Generated workflows are persisted as downloadable artifacts through the
built-in `create_artifact` tool, so artifact storage must be enabled.

| Variable | Description | Default |
|----------|-------------|---------|
| `A2A_ARTIFACTS_ENABLE` | Enable artifacts support | `false` |
| `A2A_ARTIFACTS_STORAGE_PROVIDER` | `filesystem` or `minio` | `filesystem` |
| `A2A_ARTIFACTS_STORAGE_BASE_PATH` | Base path for filesystem storage | `./artifacts` |

## Tools

| Variable | Description | Default |
|----------|-------------|---------|
| `TOOLS_READ_ENABLED` | Enable the `read` tool used to load skill playbooks | `true` |

The `read` tool must stay enabled - the `n8n-workflow-generation` skill loads
its `SKILL.md` body on demand through it.

## Server

| Variable | Description | Default |
|----------|-------------|---------|
| `A2A_PORT` | Server port | `8080` |
| `A2A_DEBUG` | Enable debug logging | `false` |
| `A2A_STREAMING_STATUS_UPDATE_INTERVAL` | Streaming status update frequency | `1s` |

## Capabilities

Streaming is enabled by default; push notifications and state-transition
history are disabled.

| Variable | Description | Default |
|----------|-------------|---------|
| `A2A_CAPABILITIES_STREAMING` | Enable streaming responses | `true` |
| `A2A_CAPABILITIES_PUSH_NOTIFICATIONS` | Enable push notifications | `false` |
| `A2A_CAPABILITIES_STATE_TRANSITION_HISTORY` | Track state transitions | `false` |
