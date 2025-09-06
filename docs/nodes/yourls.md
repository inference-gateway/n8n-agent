# Yourls

## Description

Consume Yourls API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Yourls
    parameters:
      resource: "url"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.yourls
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"url"`


## Node Information

- **Node Type**: `n8n-nodes-base.yourls`
- **Display Name**: Yourls
- **Internal Name**: `yourls`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.yourls/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Yourls/Yourls.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
