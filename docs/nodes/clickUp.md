# ClickUp

## Description

Consume ClickUp API (Beta)

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: ClickUp
    parameters:
      authentication: "accessToken"
      resource: "task"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.clickUp
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"task"`


## Node Information

- **Node Type**: `n8n-nodes-base.clickUp`
- **Display Name**: ClickUp
- **Internal Name**: `clickUp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clickup/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ClickUp/ClickUp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
