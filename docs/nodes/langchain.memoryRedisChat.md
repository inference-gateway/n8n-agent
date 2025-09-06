# Redis Chat Memory

## Description

Stores the chat history in Redis.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Redis Chat Memory
    parameters:
      sessionKey: "chat_history" # The key to use to store the memory in the workflow data
      sessionKey: "={{ $json.sessionId }}" # The key to use to store the memory
      sessionTTL: "0" # For how long the session should be stored in seconds. If set to 0 it will not expire.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryRedisChat
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

### Session Time To Live

- **Name**: `sessionTTL`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: For how long the session should be stored in seconds. If set to 0 it will not expire.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryRedisChat`
- **Display Name**: Redis Chat Memory
- **Internal Name**: `memoryRedisChat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memoryredischat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryRedisChat/MemoryRedisChat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
