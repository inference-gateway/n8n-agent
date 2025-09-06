# Kitemaker

## Description

Consume the Kitemaker GraphQL API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Kitemaker
    parameters:
      resource: "workItem"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.kitemaker
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"workItem"`


## Node Information

- **Node Type**: `n8n-nodes-base.kitemaker`
- **Display Name**: Kitemaker
- **Internal Name**: `kitemaker`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kitemaker/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Kitemaker/Kitemaker.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
