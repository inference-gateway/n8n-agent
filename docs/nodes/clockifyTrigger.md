# Clockify Trigger

## Description

Listens to Clockify events

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Clockify Trigger
    parameters:
      workspaceId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      watchField: "EntryTypes.NEW_TIME_ENTRY"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.clockifyTrigger
```

## Parameters

### Workspace Name or ID

- **Name**: `workspaceId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Trigger

- **Name**: `watchField`
- **Type**: `options`
- **Default**: `"EntryTypes.NEW_TIME_ENTRY"`


## Node Information

- **Node Type**: `n8n-nodes-base.clockifyTrigger`
- **Display Name**: Clockify Trigger
- **Internal Name**: `clockifyTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clockifytrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Clockify/ClockifyTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
