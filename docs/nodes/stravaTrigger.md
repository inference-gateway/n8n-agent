# Strava Trigger

## Description

Starts the workflow when Strava events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Strava Trigger
    parameters:
      object: "*"
      event: "*"
      resolveData: true # By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically.
      options: # Strava allows just one subscription at all times. If you want to delete the current subscription to make room for a new subscription with the current parameters, set this parameter to true. Keep in mind this is a destructive operation.
        deleteIfExist: false # Strava allows just one subscription at all times. If you want to delete the current subscription to make room for a new subscription with the current parameters, set this parameter to true. Keep in mind this is a destructive operation.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.stravaTrigger
```

## Parameters

### Object

- **Name**: `object`
- **Type**: `options`
- **Default**: `"*"`

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"*"`

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default the webhook-data only contain the Object ID. If this option gets activated, it will resolve the data automatically.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Strava allows just one subscription at all times. If you want to delete the current subscription to make room for a new subscription with the current parameters, set this parameter to true. Keep in mind this is a destructive operation.
- **Placeholder**: Add option

**Options:**

#### Delete If Exist
- **Name**: `deleteIfExist`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Strava allows just one subscription at all times. If you want to delete the current subscription to make room for a new subscription with the current parameters, set this parameter to true. Keep in mind this is a destructive operation.



## Node Information

- **Node Type**: `n8n-nodes-base.stravaTrigger`
- **Display Name**: Strava Trigger
- **Internal Name**: `stravaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stravatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Strava/StravaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
