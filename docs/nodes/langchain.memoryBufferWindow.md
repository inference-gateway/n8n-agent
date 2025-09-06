# Simple Memory

## Description

Stores in n8n memory, so no credentials required

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Simple Memory
    parameters:
      sessionKey: "chat_history" # The key to use to store the memory in the workflow data
      sessionKey: "={{ $json.sessionId }}" # The key to use to store the memory
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryBufferWindow
```

## Parameters

### Session Key

- **Name**: `sessionKey`
- **Type**: `string`
- **Default**: `"chat_history"`
- **Description**: The key to use to store the memory in the workflow data

### Session ID

- **Name**: `sessionKey`
- **Type**: `string`
- **Default**: `"={{ $json.sessionId }}"`
- **Description**: The key to use to store the memory


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryBufferWindow`
- **Display Name**: Simple Memory
- **Internal Name**: `memoryBufferWindow`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorybufferwindow/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryBufferWindow/MemoryBufferWindow.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
