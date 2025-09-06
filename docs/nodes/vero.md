# Vero

## Description

Consume Vero API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Vero
    parameters:
      resource: "user" # Create, update and manage the subscription status of your users
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.vero
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"user"`
- **Description**: Create, update and manage the subscription status of your users


## Node Information

- **Node Type**: `n8n-nodes-base.vero`
- **Display Name**: Vero
- **Internal Name**: `vero`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.vero/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Vero/Vero.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
