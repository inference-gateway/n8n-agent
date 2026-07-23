---
name: n8n-workflow-validation
description: Use this to validate an n8n workflow before saving it as an artifact, or whenever a user asks to check, lint, or validate an existing workflow. Runs validate_n8n_workflow, fixes every reported error, and re-validates until the workflow is VALID. Validation is mandatory before create_artifact.
tags:
  - n8n
  - workflow
  - validation
  - yaml
  - json
---

# n8n-workflow-validation

## When to use

Apply this skill:

- **Always before persisting a workflow.** Never call `create_artifact` with a
  workflow that has not passed `validate_n8n_workflow` in this turn. This is the
  mandatory final gate of the n8n-workflow-generation skill (its Step 3).
- **On demand**, whenever the user pastes a workflow and asks to "validate",
  "check", "lint", "is this correct?", or "will this import into n8n?". In that
  case run the validation and report the result - only create an artifact if the
  user also asked you to save it.

A workflow-generation task is only complete once `validate_n8n_workflow` reports
**VALID**.

## Workflow

Execute these steps in order.

### Step 1 - Collect the workflow content

Take the complete workflow as a single string - the full YAML or JSON document,
not a fragment. If you just drafted it, use exactly the content you intend to
save.

### Step 2 - Validate (mandatory)

Call `validate_n8n_workflow` with:

- `workflow_content`: the entire workflow document.
- `format`: `yaml`, `json`, or `auto` (default). Pass `auto` unless you know the
  format and the auto-detector guessed wrong.

The tool first checks that the content **parses** as YAML or JSON, then checks
it against the n8n workflow **schema** (see "What the validator checks").

### Step 3 - Interpret the result

- **VALID** - the workflow passed. Address any warnings too if the user asked
  for a production-grade flow; otherwise proceed.
- **INVALID** - the response lists concrete `Errors`. Do not proceed. Go to
  Step 4.

### Step 4 - Fix every error, then re-validate (loop)

For each reported error, edit the workflow to correct it (see "Common fixes"),
then call `validate_n8n_workflow` again on the corrected content. Repeat this
fix-and-revalidate loop until the result is **VALID**. Never stop at INVALID and
never save an INVALID workflow.

If an error is genuinely ambiguous (for example a required credential the user
has not supplied), fix everything you can and then ask the user for the missing
detail rather than shipping an invalid workflow.

### Step 5 - Proceed or report

- Inside the generation flow: once VALID, continue to `create_artifact`.
- Standalone validation request: report `VALID` / `INVALID`, list the errors you
  fixed (if any) and any remaining warnings, and return the corrected workflow.

## What the validator checks

`validate_n8n_workflow` enforces the following. Treat every **error** as a hard
blocker and every **warning** as advisory.

**Parseability (error)**

- Content must parse as valid YAML or JSON. A syntax error fails immediately
  before any schema checks run.

**Workflow structure**

- `nodes`: must contain at least one node (**error** if empty).
- `name`: recommended (**warning** if missing).

**Nodes** (each entry in `nodes`)

- `id`: required and unique across the workflow (**error**).
- `name`: required (**error**).
- `type`: required and must match `n8n-nodes-base.<node>` or
  `@n8n/n8n-nodes-langchain.<node>` (**error**).
- `position`: must be an array of exactly two numbers `[x, y]` (**error**).
- `parameters`: use `{}` when the node needs none (**warning** if omitted).

**Connections** (each entry in `connections`)

- `source` / `target`: required, and each must reference an existing node `id`
  (**error**).
- A node may not connect to itself (**error**).
- `sourceIndex` / `targetIndex`: must be `>= 0` (**error**).
- Multi-node workflow with no connections defined (**warning** - nodes will not
  be linked).

**Logic**

- At least one trigger node (webhook, schedule, manual, cron, timer, …) is
  recommended so the workflow can run automatically (**warning** if none).

## Common fixes

| Error | Fix |
| ----- | --- |
| `Invalid YAML/JSON format` | Correct the syntax (indentation, quoting, brackets) and re-validate. |
| `Unable to detect workflow format` | Ensure the content is valid YAML or JSON, or pass `format` explicitly. |
| `Workflow must contain at least one node` | Add the node(s) the workflow needs, including a trigger. |
| `'id' is required` / `duplicate node ID` | Give every node a unique `id`. |
| `'name' is required` | Add a human-readable `name` to the node. |
| `invalid node type format` | Use a fully-qualified type, e.g. `n8n-nodes-base.httpRequest`. Look it up with `search_n8n_docs` if unsure. |
| `'position' must be an array of exactly 2 numbers` | Set `position: [x, y]` with two numeric values. |
| `source/target node '…' does not exist` | Point the connection at real node `id`s. |
| `node cannot connect to itself` | Remove or re-target the self-referencing connection. |
| `sourceIndex/targetIndex must be >= 0` | Use non-negative output/input indexes. |

## Tools

- `validate_n8n_workflow` - schema + parse validation (this skill's core tool).
- `search_n8n_docs` - look up correct node `type`s and parameters when fixing
  `invalid node type format` or unknown-node errors.
