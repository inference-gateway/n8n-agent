# Pushcut Trigger

## Description

Starts the workflow when Pushcut events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pushcut Trigger
    parameters:
      actionName: "" # Choose any name you would like. It will show up as a server action in the app.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pushcutTrigger
```

## Parameters

### Action Name

- **Name**: `actionName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Choose any name you would like. It will show up as a server action in the app.


## Node Information

- **Node Type**: `n8n-nodes-base.pushcutTrigger`
- **Display Name**: Pushcut Trigger
- **Internal Name**: `pushcutTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pushcuttrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pushcut/PushcutTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
