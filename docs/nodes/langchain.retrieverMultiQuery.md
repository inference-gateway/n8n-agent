# MultiQuery Retriever

## Description

Automates prompt tuning, generates diverse queries and expands document pool for enhanced retrieval.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MultiQuery Retriever
    parameters:
      options: # Additional options to add
        queryCount: "3" # Number of different versions of the given question to generate
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.retrieverMultiQuery
```

## Parameters

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Query Count
- **Name**: `queryCount`
- **Type**: `number`
- **Default**: `"3"`
- **Description**: Number of different versions of the given question to generate



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.retrieverMultiQuery`
- **Display Name**: MultiQuery Retriever
- **Internal Name**: `retrieverMultiQuery`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.retrievermultiquery/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverMultiQuery/RetrieverMultiQuery.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
