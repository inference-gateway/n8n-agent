# Action Network

## Description

Consume the Action Network API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Action Network
    parameters:
      resource: "attendance"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.actionNetwork
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"attendance"`


## Node Information

- **Node Type**: `n8n-nodes-base.actionNetwork`
- **Display Name**: Action Network
- **Internal Name**: `actionNetwork`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ActionNetwork/ActionNetwork.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
