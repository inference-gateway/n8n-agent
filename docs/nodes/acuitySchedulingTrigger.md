# Acuity Scheduling Trigger

## Description

Handle Acuity Scheduling events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Acuity Scheduling Trigger
    parameters:
      authentication: "apiKey"
      event: "" # Is called whenever an appointment is canceled
      resolveData: true # By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.acuitySchedulingTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: Is called whenever an appointment is canceled

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default does the webhook-data only contain the ID of the object. If this option gets activated, it will resolve the data automatically.


## Node Information

- **Node Type**: `n8n-nodes-base.acuitySchedulingTrigger`
- **Display Name**: Acuity Scheduling Trigger
- **Internal Name**: `acuitySchedulingTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.acuityschedulingtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/AcuityScheduling/AcuitySchedulingTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
