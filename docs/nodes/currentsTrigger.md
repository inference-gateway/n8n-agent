# Currents Trigger

## Description

Starts the workflow when Currents events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Currents Trigger
    parameters:
      noticeGroups: ""
      events: [] # Triggered when a run is manually canceled
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.currentsTrigger
```

## Parameters

### Currents sends separate webhook events for each group in a run. If your run has multiple groups, you will receive separate events for each group.

- **Name**: `noticeGroups`
- **Type**: `notice`
- **Default**: `""`

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Triggered when a run is manually canceled


## Node Information

- **Node Type**: `n8n-nodes-base.currentsTrigger`
- **Display Name**: Currents Trigger
- **Internal Name**: `currentsTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.currentstrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Currents/CurrentsTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
