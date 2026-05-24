---
name: n8n-workflow-generation
description: Use this when the user requests a new n8n workflow or asks to automate a process. Searches relevant nodes with search_n8n_docs, drafts the workflow YAML, validates it with validate_n8n_workflow, then saves it via create_artifact.
tags:
  - n8n
  - workflow
  - automation
---

# n8n-workflow-generation

## When to use

Apply this skill whenever the user asks you to build, generate, scaffold, or
automate an n8n workflow - phrasings like "create a workflow that…",
"automate X with n8n", "I need a flow that does Y", or a description of a
trigger plus one or more actions. The skill produces a complete, validated
workflow YAML and saves it as an artifact for download.

## Workflow

Execute these steps in order. Do not skip steps 3 or 4.

### Step 1 - Search for relevant nodes

Call `search_n8n_docs` for each capability the workflow needs (trigger,
integrations, transformations, output). Use the `node_type` and `category`
filters to narrow results when the request mentions a specific service or
when you only need triggers vs. actions.

### Step 2 - Draft the workflow YAML

Compose a complete n8n workflow YAML with:

- `name`: a descriptive workflow name.
- `nodes`: one entry per node, each with `id`, `name`, `type` (must match
  `n8n-nodes-base.*` or `@n8n/n8n-nodes-langchain.*`), `parameters`
  (use `{}` when none are needed), and `position` as `[x, y]`.
- `connections`: list every link between nodes by their `id`s, with
  `sourceIndex` and `targetIndex`.

Bias toward including a trigger node (webhook, schedule, manual, …) - without
one the workflow cannot run automatically.

### Step 3 - Validate (mandatory)

Call `validate_n8n_workflow` with the drafted YAML. If the result is INVALID,
fix every reported error and re-run validation. Repeat until the validator
returns `VALID`. Treat warnings as informational unless the user asked for a
production-grade flow, in which case address them too.

### Step 4 - Save the artifact (mandatory)

Once validation passes, call `create_artifact` with:

- A descriptive filename ending in `.yaml`
  (e.g. `customer_onboarding_workflow.yaml`).
- The validated YAML as content.

Never inline the full YAML in the chat response - it always goes through
`create_artifact`.

### Step 5 - Respond concisely

Reply with:

1. A 2–3 sentence summary of what the workflow does.
2. The artifact download link.
3. A short bulleted list of follow-up configuration the user must do
   (credentials, webhook URLs, environment variables, etc.).

## Tools

This skill orchestrates three tools, in this order:

1. `search_n8n_docs` - discover the right node types and parameters.
2. `validate_n8n_workflow` - schema check before persistence.
3. `create_artifact` - built-in tool that persists the YAML for download.

## Example response

> I've created a customer onboarding workflow with a webhook trigger,
> Airtable lookup, welcome email, and Slack notification.
>
> Download: [customer_onboarding_workflow.yaml](artifact_url)
>
> Configuration needed:
> - Add Airtable API credentials
> - Configure the email service (Gmail/SendGrid)
> - Add a Slack webhook URL
> - Point your form at the webhook URL emitted by n8n
