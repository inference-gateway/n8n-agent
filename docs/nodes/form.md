# n8n Form

## Description

Generate webforms in n8n and pass their responses to the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: n8n Form
    parameters:
      triggerNotice: ""
      operation: "page"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.form
```

## Parameters

### An n8n Form Trigger node must be set up before this node

- **Name**: `triggerNotice`
- **Type**: `notice`
- **Default**: `""`

### Page Type

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"page"`


## Node Information

- **Node Type**: `n8n-nodes-base.form`
- **Display Name**: n8n Form
- **Internal Name**: `form`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.form/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Form/Form.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
