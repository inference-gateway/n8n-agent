# Copper Trigger

## Description

Handle Copper events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Copper Trigger
    parameters:
      resource: "" # The resource which will fire the event
      event: "" # An existing record is removed
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.copperTrigger
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `""`
- **Description**: The resource which will fire the event

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: An existing record is removed


## Node Information

- **Node Type**: `n8n-nodes-base.copperTrigger`
- **Display Name**: Copper Trigger
- **Internal Name**: `copperTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.coppertrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Copper/CopperTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
