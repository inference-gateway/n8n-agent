# Simulate

## Description

Simulate a node

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Simulate
    parameters:
      output: "all"
      numberOfItems: "1" # Number input of items to return, if greater then input length all items will be returned
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.simulate
```

## Parameters

### Output

- **Name**: `output`
- **Type**: `options`
- **Default**: `"all"`

### Number of Items

- **Name**: `numberOfItems`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Number input of items to return, if greater then input length all items will be returned


## Node Information

- **Node Type**: `n8n-nodes-base.simulate`
- **Display Name**: Simulate
- **Internal Name**: `simulate`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.simulate/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Simulate/Simulate.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
