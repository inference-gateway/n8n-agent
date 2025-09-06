# Xata

## Description

Use Xata Memory

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Xata
    parameters:
      sessionId: ""
      sessionId: "={{ $json.sessionId }}" # The key to use to store the memory
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryXata
```

## Parameters

### Session ID

- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `""`

### Session ID

- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `"={{ $json.sessionId }}"`
- **Description**: The key to use to store the memory


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryXata`
- **Display Name**: Xata
- **Internal Name**: `memoryXata`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memoryxata/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryXata/MemoryXata.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
