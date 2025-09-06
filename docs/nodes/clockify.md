# Clockify

## Description

Consume Clockify REST API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Clockify
    parameters:
      resource: "project"
      workspaceId: [] # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.clockify
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"project"`

### Workspace Name or ID

- **Name**: `workspaceId`
- **Type**: `options`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>


## Node Information

- **Node Type**: `n8n-nodes-base.clockify`
- **Display Name**: Clockify
- **Internal Name**: `clockify`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clockify/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Clockify/Clockify.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
