# Sendy

## Description

Consume Sendy API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Sendy
    parameters:
      resource: "subscriber"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.sendy
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"subscriber"`


## Node Information

- **Node Type**: `n8n-nodes-base.sendy`
- **Display Name**: Sendy
- **Internal Name**: `sendy`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendy/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Sendy/Sendy.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
