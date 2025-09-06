# Customer.io Trigger

## Description

Starts the workflow on a Customer.io update (Beta)

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Customer.io Trigger
    parameters:
      events: [] # The events that can trigger the webhook and whether they are enabled
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.customerIoTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The events that can trigger the webhook and whether they are enabled


## Node Information

- **Node Type**: `n8n-nodes-base.customerIoTrigger`
- **Display Name**: Customer.io Trigger
- **Internal Name**: `customerIoTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.customeriotrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CustomerIo/CustomerIoTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
