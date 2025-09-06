# Respond to Chat

## Description

Send a message to a chat

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Respond to Chat
    parameters:
      generalNotice: ""
      message: ""
      options:
        memoryConnection: false
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.chat
```

## Parameters

### Verify you're using a chat trigger with the 'Response Mode' option set to 'Using Response Nodes'

- **Name**: `generalNotice`
- **Type**: `notice`
- **Default**: `""`

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option

**Options:**

#### Add Memory Input Connection
- **Name**: `memoryConnection`
- **Type**: `boolean`
- **Default**: `false`



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.chat`
- **Display Name**: Respond to Chat
- **Internal Name**: `chat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/Chat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
