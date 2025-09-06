# Start

## Description

Starts the workflow execution from this node

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Start
    parameters:
      notice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.start
```

## Parameters

### This node is where a manual workflow execution starts. To make one, go back to the canvas and click ‘execute workflow’

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.start`
- **Display Name**: Start
- **Internal Name**: `start`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.start/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Start/Start.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
