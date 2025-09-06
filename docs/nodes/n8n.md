# n8n

## Description

Handle events and perform actions on your n8n instance

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: n8n
    parameters:
      resource: "workflow"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.n8n
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"workflow"`


## Node Information

- **Node Type**: `n8n-nodes-base.n8n`
- **Display Name**: n8n
- **Internal Name**: `n8n`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/N8n/N8n.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
