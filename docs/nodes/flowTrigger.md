# Flow Trigger

## Description

Handle Flow events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Flow Trigger
    parameters:
      resource: "" # Resource that triggers the webhook
      listIds: "" # Lists IDs, perhaps known better as "Projects" separated by a comma (,)
      taskIds: "" # Task IDs separated by a comma (,)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.flowTrigger
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `""`
- **Description**: Resource that triggers the webhook

### Project ID

- **Name**: `listIds`
- **Type**: `string`
- **Default**: `""`
- **Description**: Lists IDs, perhaps known better as "Projects" separated by a comma (,)

### Task ID

- **Name**: `taskIds`
- **Type**: `string`
- **Default**: `""`
- **Description**: Task IDs separated by a comma (,)


## Node Information

- **Node Type**: `n8n-nodes-base.flowTrigger`
- **Display Name**: Flow Trigger
- **Internal Name**: `flowTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.flowtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Flow/FlowTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
