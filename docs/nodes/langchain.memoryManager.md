# Chat Memory Manager

## Description

Manage chat messages memory and use it in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Chat Memory Manager
    parameters:
      mode: "load" # Retrieve chat messages from connected memory
      insertMode: "insert" # Choose how new messages are inserted into the memory
      deleteMode: "lastN" # How messages are deleted from memory
      messages: {} # Chat messages to insert into memory
      lastMessagesCount: "2" # The amount of last messages to delete
      simplifyOutput: true # Whether to simplify the output to only include the sender and the text
      options: # Whether to group messages into a single item or return each message as a separate item
        groupMessages: true # Whether to group messages into a single item or return each message as a separate item
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryManager
```

## Parameters

### Operation Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"load"`
- **Description**: Retrieve chat messages from connected memory

### Insert Mode

- **Name**: `insertMode`
- **Type**: `options`
- **Default**: `"insert"`
- **Description**: Choose how new messages are inserted into the memory

### Delete Mode

- **Name**: `deleteMode`
- **Type**: `options`
- **Default**: `"lastN"`
- **Description**: How messages are deleted from memory

### Chat Messages

- **Name**: `messages`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Chat messages to insert into memory
- **Placeholder**: Add message

### Messages Count

- **Name**: `lastMessagesCount`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: The amount of last messages to delete

### Simplify Output

- **Name**: `simplifyOutput`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to simplify the output to only include the sender and the text

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to group messages into a single item or return each message as a separate item
- **Placeholder**: Add Option

**Options:**

#### Group Messages
- **Name**: `groupMessages`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to group messages into a single item or return each message as a separate item



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryManager`
- **Display Name**: Chat Memory Manager
- **Internal Name**: `memoryManager`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorymanager/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryManager/MemoryManager.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
