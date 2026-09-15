# Microsoft To Do

## Description

Consume Microsoft To Do API.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft To Do
    parameters:
      authentication: "microsoftToDoOAuth2Api" # Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Tasks.ReadWrite) on the credential.
      resource: "task"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftToDo
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftToDoOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Tasks.ReadWrite) on the credential.

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"task"`


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftToDo`
- **Display Name**: Microsoft To Do
- **Internal Name**: `microsoftToDo`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/ToDo/MicrosoftToDo.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
