# Databricks AI Agent

## Description

An AI agent that exports its runs to MLflow Tracing in Databricks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Databricks AI Agent
    parameters:
      hasOutputParser: false
      notice: ""
      needsFallback: false
      fallbackNotice: ""
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.databricksAiAgent
```

## Parameters

### Require Specific Output Format

- **Name**: `hasOutputParser`
- **Type**: `boolean`
- **Default**: `false`

### Connect an <a data-action='openSelectiveNodeCreator' data-action-parameter-connectiontype='${NodeConnectionTypes.AiOutputParser}'>output parser</a> on the canvas to specify the output format you require

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Enable Fallback Model

- **Name**: `needsFallback`
- **Type**: `boolean`
- **Default**: `false`

### Connect an additional language model on the canvas to use it as a fallback if the main model fails

- **Name**: `fallbackNotice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.databricksAiAgent`
- **Display Name**: Databricks AI Agent
- **Internal Name**: `databricksAiAgent`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.databricksaiagent/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vendors/Databricks/DatabricksAiAgent.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
