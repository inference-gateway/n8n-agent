# Automizy

## Description

Consume Automizy API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Automizy
    parameters:
      deprecated: ""
      resource: "contact"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.automizy
```

## Parameters

### This service may no longer exist and will be removed from n8n in a future release.

- **Name**: `deprecated`
- **Type**: `notice`
- **Default**: `""`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"contact"`


## Node Information

- **Node Type**: `n8n-nodes-base.automizy`
- **Display Name**: Automizy
- **Internal Name**: `automizy`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.automizy/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Automizy/Automizy.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
