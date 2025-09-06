# Manual Chat Trigger

## Description

Runs the flow on new manual chat message

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Manual Chat Trigger
    parameters:
      notice: ""
      openChat: ""
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.manualChatTrigger
```

## Parameters

### This node is where a manual chat workflow execution starts. To make one, go back to the canvas and click ‘Chat’

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Chat and execute workflow

- **Name**: `openChat`
- **Type**: `button`
- **Default**: `""`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.manualChatTrigger`
- **Display Name**: Manual Chat Trigger
- **Internal Name**: `manualChatTrigger`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.manualchattrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/trigger/ManualChatTrigger/ManualChatTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
