# Customer Datastore (n8n training)

## Description

Dummy node used for n8n training

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Customer Datastore (n8n training)
    parameters:
      operation: "getOnePerson"
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "5" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.n8nTrainingCustomerDatastore
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getOnePerson"`

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"5"`
- **Description**: Max number of results to return


## Node Information

- **Node Type**: `n8n-nodes-base.n8nTrainingCustomerDatastore`
- **Display Name**: Customer Datastore (n8n training)
- **Internal Name**: `n8nTrainingCustomerDatastore`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.n8ntrainingcustomerdatastore/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/N8nTrainingCustomerDatastore/N8nTrainingCustomerDatastore.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
