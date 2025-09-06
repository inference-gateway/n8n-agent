# Workflow Retriever

## Description

Use an n8n Workflow as Retriever

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Workflow Retriever
    parameters:
      executeNotice: ""
      source: "database" # Load the workflow from the database by ID
      workflowId: "" # The workflow to execute
      workflowId: ""
      workflowJson: "\n\n\n" # The workflow JSON code to execute
      fields: {} # Set the values which should be made available in the workflow
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.retrieverWorkflow
```

## Parameters

### The workflow will receive "query" as input and the output of the last node will be returned and converted to Documents

- **Name**: `executeNotice`
- **Type**: `notice`
- **Default**: `""`

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"database"`
- **Description**: Load the workflow from the database by ID

### Workflow ID

- **Name**: `workflowId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The workflow to execute

### Workflow

- **Name**: `workflowId`
- **Type**: `workflowSelector`
- **Default**: `""`

### Workflow JSON

- **Name**: `workflowJson`
- **Type**: `json`
- **Default**: `"\\n\\n\\n"`
- **Description**: The workflow JSON code to execute

### Workflow Values

- **Name**: `fields`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Set the values which should be made available in the workflow
- **Placeholder**: Add Value


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.retrieverWorkflow`
- **Display Name**: Workflow Retriever
- **Internal Name**: `retrieverWorkflow`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.retrieverworkflow/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverWorkflow/RetrieverWorkflow.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
