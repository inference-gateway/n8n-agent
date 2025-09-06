# Pipedrive Trigger

## Description

Starts the workflow when Pipedrive events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pipedrive Trigger
    parameters:
      authentication: "apiToken"
      incomingAuthentication: "none" # If authentication should be activated for the webhook (makes it more secure)
      action: "*" # Data got added
      action: "*" # Any change
      entity: "*" # Type of object to receive notifications about
      object: "*" # Type of object to receive notifications about
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pipedriveTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Incoming Authentication

- **Name**: `incomingAuthentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: If authentication should be activated for the webhook (makes it more secure)

### Action

- **Name**: `action`
- **Type**: `options`
- **Default**: `"*"`
- **Description**: Data got added

### Action

- **Name**: `action`
- **Type**: `options`
- **Default**: `"*"`
- **Description**: Any change

### Entity

- **Name**: `entity`
- **Type**: `options`
- **Default**: `"*"`
- **Description**: Type of object to receive notifications about

### Object

- **Name**: `object`
- **Type**: `options`
- **Default**: `"*"`
- **Description**: Type of object to receive notifications about


## Node Information

- **Node Type**: `n8n-nodes-base.pipedriveTrigger`
- **Display Name**: Pipedrive Trigger
- **Internal Name**: `pipedriveTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pipedrivetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pipedrive/PipedriveTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
