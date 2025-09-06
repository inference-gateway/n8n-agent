# Strapi

## Description

Consume Strapi API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Strapi
    parameters:
      authentication: "password"
      resource: "entry"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.strapi
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"password"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"entry"`


## Node Information

- **Node Type**: `n8n-nodes-base.strapi`
- **Display Name**: Strapi
- **Internal Name**: `strapi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.strapi/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Strapi/Strapi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
