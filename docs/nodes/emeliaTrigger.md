# Emelia Trigger

## Description

Handle Emelia campaign activity events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Emelia Trigger
    parameters:
      campaignId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      events: []
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.emeliaTrigger
```

## Parameters

### Campaign Name or ID

- **Name**: `campaignId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`


## Node Information

- **Node Type**: `n8n-nodes-base.emeliaTrigger`
- **Display Name**: Emelia Trigger
- **Internal Name**: `emeliaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.emeliatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Emelia/EmeliaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
