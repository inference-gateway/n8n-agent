# Trello Trigger

## Description

Starts the workflow when Trello events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Trello Trigger
    parameters:
      id: "" # ID of the model of which to subscribe to events
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.trelloTrigger
```

## Parameters

### Model ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the model of which to subscribe to events
- **Placeholder**: 4d5ea62fd76aa1136000000c


## Node Information

- **Node Type**: `n8n-nodes-base.trelloTrigger`
- **Display Name**: Trello Trigger
- **Internal Name**: `trelloTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.trellotrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/TrelloTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
