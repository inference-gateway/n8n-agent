# Onfleet

## Description

Consume Onfleet API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Onfleet
    parameters:
      resource: "task" # The resource to perform operations on
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.onfleet
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"task"`
- **Description**: The resource to perform operations on


## Node Information

- **Node Type**: `n8n-nodes-base.onfleet`
- **Display Name**: Onfleet
- **Internal Name**: `onfleet`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onfleet/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Onfleet/Onfleet.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
