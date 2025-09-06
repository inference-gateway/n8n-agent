# Chat Trigger

## Description

Runs the workflow when an n8n generated webchat is submitted

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Chat Trigger
    parameters:
      public: false # Whether the chat should be publicly available or only accessible through the manual chat interface
      mode: "hostedChat" # Chat on a page served by n8n
      hostedChatNotice: ""
      embeddedChatNotice: ""
      authentication: "none" # Simple username and password (the same one for all users)
      initialMessages: "Hi there! 👋\nMy name is Nathan. How can I assist you today?" # Default messages shown at the start of the chat, one per line
      options: {}
      options: {} # When and how to respond to the webhook
      options: {} # When and how to respond to the webhook
      options: {} # When and how to respond to the chat
      options: {} # When and how to respond to the chat
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.chatTrigger
```

## Parameters

### Make Chat Publicly Available

- **Name**: `public`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the chat should be publicly available or only accessible through the manual chat interface

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"hostedChat"`
- **Description**: Chat on a page served by n8n

### Chat will be live at the URL above once you activate this workflow. Live executions will show up in the ‘executions’ tab

- **Name**: `hostedChatNotice`
- **Type**: `notice`
- **Default**: `""`

### Follow the instructions <a href="https://www.npmjs.com/package/@n8n/chat" target="_blank">here</a> to embed chat in a webpage (or just call the webhook URL at the top of this section). Chat will be live once you activate this workflow

- **Name**: `embeddedChatNotice`
- **Type**: `notice`
- **Default**: `""`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Simple username and password (the same one for all users)

### Initial Message(s)

- **Name**: `initialMessages`
- **Type**: `string`
- **Default**: `"Hi there! 👋\\nMy name is Nathan. How can I assist you today?"`
- **Description**: Default messages shown at the start of the chat, one per line

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Field

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: When and how to respond to the webhook
- **Placeholder**: Add Field

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: When and how to respond to the webhook
- **Placeholder**: Add Field

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: When and how to respond to the chat
- **Placeholder**: Add Field

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: When and how to respond to the chat
- **Placeholder**: Add Field


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.chatTrigger`
- **Display Name**: Chat Trigger
- **Internal Name**: `chatTrigger`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chattrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/ChatTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
