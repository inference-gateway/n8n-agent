# Keap Trigger

## Description

Starts the workflow when Infusionsoft events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Keap Trigger
    parameters:
      eventId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      rawData: false # Whether to return the data exactly in the way it got received from the API
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.keapTrigger
```

## Parameters

### Event Name or ID

- **Name**: `eventId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### RAW Data

- **Name**: `rawData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return the data exactly in the way it got received from the API


## Node Information

- **Node Type**: `n8n-nodes-base.keapTrigger`
- **Display Name**: Keap Trigger
- **Internal Name**: `keapTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.keaptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Keap/KeapTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
