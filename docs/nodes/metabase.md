# Metabase

## Description

Use the Metabase API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Metabase
    parameters:
      resource: "questions"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.metabase
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"questions"`


## Node Information

- **Node Type**: `n8n-nodes-base.metabase`
- **Display Name**: Metabase
- **Internal Name**: `metabase`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.metabase/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Metabase/Metabase.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
