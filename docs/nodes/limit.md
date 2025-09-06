# Limit

## Description

Restrict the number of items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Limit
    parameters:
      maxItems: "1" # If there are more items than this number, some are removed
      keep: "firstItems" # When removing items, whether to keep the ones at the start or the ending
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.limit
```

## Parameters

### Max Items

- **Name**: `maxItems`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: If there are more items than this number, some are removed

### Keep

- **Name**: `keep`
- **Type**: `options`
- **Default**: `"firstItems"`
- **Description**: When removing items, whether to keep the ones at the start or the ending


## Node Information

- **Node Type**: `n8n-nodes-base.limit`
- **Display Name**: Limit
- **Internal Name**: `limit`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.limit/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/Limit/Limit.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
