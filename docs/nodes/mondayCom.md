# Monday.com

## Description

Consume Monday.com API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Monday.com
    parameters:
      authentication: "accessToken"
      resource: "board"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mondayCom
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"board"`


## Node Information

- **Node Type**: `n8n-nodes-base.mondayCom`
- **Display Name**: Monday.com
- **Internal Name**: `mondayCom`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mondaycom/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MondayCom/MondayCom.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
