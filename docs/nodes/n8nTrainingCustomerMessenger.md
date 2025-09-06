# Customer Messenger (n8n training)

## Description

Dummy node used for n8n training

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Customer Messenger (n8n training)
    parameters:
      customerId: ""
      message: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.n8nTrainingCustomerMessenger
```

## Parameters

### Customer ID

- **Name**: `customerId`
- **Type**: `string`
- **Default**: `""`

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.n8nTrainingCustomerMessenger`
- **Display Name**: Customer Messenger (n8n training)
- **Internal Name**: `n8nTrainingCustomerMessenger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.n8ntrainingcustomermessenger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/N8nTrainingCustomerMessenger/N8nTrainingCustomerMessenger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
