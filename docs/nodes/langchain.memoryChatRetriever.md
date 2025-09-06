# Chat Messages Retriever

## Description

Retrieve chat messages from memory and use them in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Chat Messages Retriever
    parameters:
      deprecatedNotice: ""
      simplifyOutput: true # Whether to simplify the output to only include the sender and the text
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryChatRetriever
```

## Parameters

### This node is deprecated. Use 'Chat Memory Manager' node instead.

- **Name**: `deprecatedNotice`
- **Type**: `notice`
- **Default**: `""`

### Simplify Output

- **Name**: `simplifyOutput`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to simplify the output to only include the sender and the text


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryChatRetriever`
- **Display Name**: Chat Messages Retriever
- **Internal Name**: `memoryChatRetriever`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorychatretriever/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryChatRetriever/MemoryChatRetriever.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
