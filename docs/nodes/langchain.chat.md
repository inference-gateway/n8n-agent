# Chat

## Description

Send a message into the chat

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Chat
    parameters:
      generalNotice: ""
      operation: "send"
      message: ""
      options: {}
      options: {}
      options: {}
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.chat
```

## Parameters

### Verify you're using a chat trigger with the 'Response Mode' option set to 'Using Response Nodes'

- **Name**: `generalNotice`
- **Type**: `notice`
- **Default**: `""`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.chat`
- **Display Name**: Chat
- **Internal Name**: `chat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/Chat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
