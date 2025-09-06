# PayPal Trigger

## Description

Handle PayPal events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: PayPal Trigger
    parameters:
      events: [] # The event to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.payPalTrigger
```

## Parameters

### Event Names or IDs

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The event to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


## Node Information

- **Node Type**: `n8n-nodes-base.payPalTrigger`
- **Display Name**: PayPal Trigger
- **Internal Name**: `payPalTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paypaltrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/PayPal/PayPalTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
