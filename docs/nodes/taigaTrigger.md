# Taiga Trigger

## Description

Handle Taiga events via webhook

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Taiga Trigger
    parameters:
      projectId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      resources: "['all']" # Resources to listen to
      operations: "['all']" # Operations to listen to
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.taigaTrigger
```

## Parameters

### Project Name or ID

- **Name**: `projectId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Resources

- **Name**: `resources`
- **Type**: `multiOptions`
- **Default**: `"['all']"`
- **Description**: Resources to listen to

### Operations

- **Name**: `operations`
- **Type**: `multiOptions`
- **Default**: `"['all']"`
- **Description**: Operations to listen to


## Node Information

- **Node Type**: `n8n-nodes-base.taigaTrigger`
- **Display Name**: Taiga Trigger
- **Internal Name**: `taigaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.taigatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Taiga/TaigaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
