# N8N Agent Example

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
  - [1. Configuration](#1-configuration)
  - [2. Start the Services](#2-start-the-services)
  - [3. Test the Agent](#3-test-the-agent)
- [Usage Examples](#usage-examples)
  - [Basic N8N Documentation Queries](#basic-n8n-documentation-queries)
  - [Workflow Generation Examples](#workflow-generation-examples)
  - [Complex Automation Examples](#complex-automation-examples)
  - [N8N Best Practices and Troubleshooting](#n8n-best-practices-and-troubleshooting)
  - [Integration-Specific Examples](#integration-specific-examples)
  - [Downloading Generated Workflows](#downloading-generated-workflows)
- [Architecture](#architecture)
- [Available Skills](#available-skills)
- [Troubleshooting](#troubleshooting)
  - [Agent Not Responding](#agent-not-responding)
  - [API Key Issues](#api-key-issues)
  - [Debugging Tips](#debugging-tips)
- [Development](#development)
  - [Building from Source](#building-from-source)
  - [Using a Different Inference Provider](#using-a-different-inference-provider)
  - [Running Services Individually](#running-services-individually)
- [Cleanup](#cleanup)
- [Additional Resources](#additional-resources)
- [License](#license)

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

You can interact with the agent using either the **Inference Gateway CLI** (recommended) or the **A2A Debugger**.

#### Using the Inference Gateway CLI (Recommended)

The CLI provides an interactive chat interface for a better user experience:

```bash
# Start interactive chat session
docker compose run --rm cli
```

This opens an interactive chat where you can have conversations with the agent, ask questions, and request workflow generation.

#### Using the A2A Debugger

For quick one-off queries, you can use the A2A debugger:

```bash
docker compose run --rm a2a-debugger tasks submit-streaming "How do I create an email campaign in n8n?"
```

## Usage Examples

Below are example prompts you can try with the N8N agent:

### Basic N8N Documentation Queries

**Using CLI (interactive chat):**
```bash
docker compose run --rm cli
# Then in the chat interface, ask:
# - How do I use the HTTP Request node?
# - What are the authentication options for the Gmail node?
# - Show me how to use the Code node to transform data
# - What N8N nodes are available for database operations?
# - How do I handle errors in n8n workflows?
# - Explain the Webhook node and its use cases
```

**Using A2A Debugger:**
```bash
docker compose run --rm a2a-debugger tasks submit-streaming "How do I use the HTTP Request node?"
docker compose run --rm a2a-debugger tasks submit-streaming "What are the authentication options for the Gmail node?"
docker compose run --rm a2a-debugger tasks submit "What N8N nodes are available for database operations?"
```

### Workflow Generation Examples

**Using CLI (interactive chat):**
```bash
docker compose run --rm cli
# Then in the chat interface, request workflows like:
# - Create a workflow that sends Slack notifications when new emails arrive
# - Build a workflow that monitors a GitHub repository for new issues and creates Trello cards
# - Generate a workflow that fetches data from an API every hour and stores it in a PostgreSQL database
# - Create a workflow that processes incoming webhook data and sends formatted messages to Discord
# - Build a workflow that backs up Airtable records to Google Sheets daily
# - Create a workflow that monitors RSS feeds and posts new articles to Twitter
# - Generate a workflow that processes CSV files from Google Drive and sends summary reports via email
```

**Using A2A Debugger:**
```bash
docker compose run --rm a2a-debugger tasks submit-streaming "Create a workflow that sends Slack notifications when new emails arrive"
docker compose run --rm a2a-debugger tasks submit-streaming "Build a workflow that monitors a GitHub repository for new issues and creates Trello cards"
docker compose run --rm a2a-debugger tasks submit-streaming "Generate a workflow that fetches data from an API every hour and stores it in a PostgreSQL database"
```

### Complex Automation Examples

**Using CLI:**
```bash
docker compose run --rm cli
# Complex multi-step workflows:
# - Create a customer onboarding workflow that: 1) receives form submissions via webhook, 2) creates a record in Airtable, 3) sends a welcome email, and 4) notifies the team in Slack
# - Build a data pipeline workflow that: 1) fetches sales data from Shopify API, 2) transforms and aggregates the data, 3) updates a Google Sheet, and 4) sends a daily summary to the sales team
# - Create a support ticket automation that: 1) monitors incoming emails, 2) categorizes them using AI, 3) creates tickets in Zendesk, and 4) notifies the appropriate team based on priority
# - Generate a social media automation workflow that: 1) pulls content from a content calendar in Notion, 2) generates image thumbnails, 3) schedules posts to multiple platforms, and 4) tracks engagement metrics
```

**Using A2A Debugger:**
```bash
docker compose run --rm a2a-debugger tasks submit-streaming "Create a customer onboarding workflow that: 1) receives form submissions via webhook, 2) creates a record in Airtable, 3) sends a welcome email, and 4) notifies the team in Slack"
```

### N8N Best Practices and Troubleshooting

**Using CLI:**
```bash
docker compose run --rm cli
# Ask questions like:
# - What are best practices for error handling in n8n workflows?
# - How do I optimize workflows for better performance?
# - How can I debug a workflow that's not working as expected?
# - What's the difference between the Function and Code nodes?
# - How do I securely store API credentials in n8n?
# - Explain n8n workflow execution modes and when to use each
```

**Using A2A Debugger:**
```bash
docker compose run --rm a2a-debugger tasks submit "What are best practices for error handling in n8n workflows?"
docker compose run --rm a2a-debugger tasks submit "How do I optimize workflows for better performance?"
```

### Integration-Specific Examples

**Using CLI:**
```bash
docker compose run --rm cli
# Integration questions:
# - How do I connect n8n to Salesforce and sync contacts?
# - Create a workflow that triggers when a new row is added to a Google Sheet
# - How do I authenticate with the OpenAI API in n8n?
# - Build a workflow that posts to multiple social media platforms simultaneously
# - How do I use n8n to automate Jira ticket creation from Slack messages?
```

### Downloading Generated Workflows

When workflows are generated, they are saved as artifacts and can be downloaded. The generated YAML files will be available in the `./downloads` directory (mapped from the CLI container's `/tmp/downloads`).

**Note**: The CLI is configured to automatically save workflow artifacts to this directory when they are created.

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

View all available tasks:
```bash
docker compose run --rm a2a-debugger tasks list --include-artifacts
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