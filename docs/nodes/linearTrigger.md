# Linear Trigger

## Description

Starts the workflow when Linear events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Linear Trigger
    parameters:
      authentication: "apiToken"
      notice: ""
      teamId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.linearTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Make sure your credential has the "Admin" scope to create webhooks.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Team Name or ID

- **Name**: `teamId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>


## Node Information

- **Node Type**: `n8n-nodes-base.linearTrigger`
- **Display Name**: Linear Trigger
- **Internal Name**: `linearTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.lineartrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Linear/LinearTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
