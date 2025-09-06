# Ghost

## Description

Consume Ghost API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Ghost
    parameters:
      source: "contentApi" # Pick where your data comes from, Content or Admin API
      resource: "post"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.ghost
```

## Parameters

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"contentApi"`
- **Description**: Pick where your data comes from, Content or Admin API

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"post"`


## Node Information

- **Node Type**: `n8n-nodes-base.ghost`
- **Display Name**: Ghost
- **Internal Name**: `ghost`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ghost/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Ghost/Ghost.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
