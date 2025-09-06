# Flow

## Description

Consume Flow API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Flow
    parameters:
      resource: "task" # Tasks are units of work that can be private or assigned to a list. Through this endpoint, you can manipulate your tasks in Flow, including creating new ones.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.flow
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"task"`
- **Description**: Tasks are units of work that can be private or assigned to a list. Through this endpoint, you can manipulate your tasks in Flow, including creating new ones.


## Node Information

- **Node Type**: `n8n-nodes-base.flow`
- **Display Name**: Flow
- **Internal Name**: `flow`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.flow/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Flow/Flow.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
