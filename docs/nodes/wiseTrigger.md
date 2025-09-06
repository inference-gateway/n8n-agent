# Wise Trigger

## Description

Handle Wise events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Wise Trigger
    parameters:
      profileId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      event: "" # Triggered every time a balance account is credited
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.wiseTrigger
```

## Parameters

### Profile Name or ID

- **Name**: `profileId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: Triggered every time a balance account is credited


## Node Information

- **Node Type**: `n8n-nodes-base.wiseTrigger`
- **Display Name**: Wise Trigger
- **Internal Name**: `wiseTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wisetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Wise/WiseTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
