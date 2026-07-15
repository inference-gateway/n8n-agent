# Usage

n8n-agent is an A2A server. Send it a task describing the automation you want
and it searches n8n node documentation, drafts a workflow, validates it, and
returns the workflow as a downloadable artifact.

## Submit a task

Any A2A client works. The examples below use the
[A2A Debugger](https://github.com/inference-gateway/a2a-debugger):

```bash
docker run --rm -it --network host \
  ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 \
  tasks submit "Create a workflow that posts new Airtable records to Slack"
```

```bash
# List tasks, then fetch a result by id
docker run --rm -it --network host \
  ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 tasks list

docker run --rm -it --network host \
  ghcr.io/inference-gateway/a2a-debugger:latest \
  --server-url http://localhost:8080 tasks get <task-id>
```

## What the agent does

For a workflow request it follows the `n8n-workflow-generation` skill:

1. **Search** relevant nodes with `search_n8n_docs`.
2. **Draft** a complete n8n workflow (nodes, parameters, connections).
3. **Validate** the draft with `validate_n8n_workflow` and fix any errors.
4. **Save** the validated YAML as a downloadable artifact.
5. **Reply** with a summary, the download link, and follow-up configuration
   (credentials, webhook URLs, environment variables).

## Other things to ask

- "Which parameters does the HTTP Request node take?" - documentation lookup
  via `search_n8n_docs`.
- "Validate this workflow: `<paste YAML/JSON>`" - a schema check only, using
  `validate_n8n_workflow`.
- "Automate: every morning fetch RSS items and email a digest" - a scheduled
  trigger plus actions.

## Import the result into n8n

The returned artifact is a standard n8n workflow file. Download it, import it
into n8n using its **Import from File** option, and add the credentials the
agent listed before activating the workflow.
