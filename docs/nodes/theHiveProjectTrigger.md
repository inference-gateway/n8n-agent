# TheHive 5 Trigger

## Description

Starts the workflow when TheHive events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: TheHive 5 Trigger
    parameters:
      notice: ""
      events: [] # Events types
      filters: {} # Filter any incoming events based on their fields
      options: # Whether to output data with additional details and omit headers
        outputOnlyData: false # Whether to output data with additional details and omit headers
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.theHiveProjectTrigger
```

## Parameters

### You must set up the webhook in TheHive — instructions <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger/#configure-a-webhook-in-thehive" target="_blank">here</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Events types

### Filters

- **Name**: `filters`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Filter any incoming events based on their fields
- **Placeholder**: Add Filter

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to output data with additional details and omit headers
- **Placeholder**: Add option

**Options:**

#### Output Only Data
- **Name**: `outputOnlyData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to output data with additional details and omit headers



## Node Information

- **Node Type**: `n8n-nodes-base.theHiveProjectTrigger`
- **Display Name**: TheHive 5 Trigger
- **Internal Name**: `theHiveProjectTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehiveprojecttrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/TheHiveProject/TheHiveProjectTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
