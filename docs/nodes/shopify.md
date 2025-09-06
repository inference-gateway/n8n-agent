# Shopify

## Description

Consume Shopify API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Shopify
    parameters:
      apiVersion: ""
      authentication: "apiKey"
      resource: "order"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.shopify
```

## Parameters

### Shopify API Version: 2024-07

- **Name**: `apiVersion`
- **Type**: `notice`
- **Default**: `""`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"order"`


## Node Information

- **Node Type**: `n8n-nodes-base.shopify`
- **Display Name**: Shopify
- **Internal Name**: `shopify`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.shopify/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Shopify/Shopify.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
