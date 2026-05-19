# Message an n8n Agent

## Description

Send a message to a n8n agent

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Message an n8n Agent
    parameters:
      publishedAgentNotice: ""
      agentId: "{ mode: 'list', value: '' }" # The agent to send the message to
      message: "" # The message to send to the agent
      advanced: # Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
        sessionId: "" # Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.messageAnAgent
```

## Parameters

### Create an n8n agent <a href="/new-agent" target="_blank">here</a>. Only published agents are listed below.

- **Name**: `publishedAgentNotice`
- **Type**: `notice`
- **Default**: `""`

### Agent

- **Name**: `agentId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The agent to send the message to
- **Placeholder**: e.g. abc123

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send to the agent

### Advanced

- **Name**: `advanced`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
- **Placeholder**: Add Option

**Options:**

#### Session ID
- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.



## Node Information

- **Node Type**: `n8n-nodes-base.messageAnAgent`
- **Display Name**: Message an n8n Agent
- **Internal Name**: `messageAnAgent`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.messageanagent/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MessageAnAgent/MessageAnAgent.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
