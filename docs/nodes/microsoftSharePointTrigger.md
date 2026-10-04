# Microsoft SharePoint Trigger

## Description

Starts a workflow when a file or list item changes in Microsoft SharePoint

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft SharePoint Trigger
    parameters:
      authentication: "microsoftOAuth2Api" # Generic Microsoft Graph credential. Enable the scopes this trigger needs (e.g. Sites.Read.All) on the credential.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftSharePointTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Enable the scopes this trigger needs (e.g. Sites.Read.All) on the credential.


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftSharePointTrigger`
- **Display Name**: Microsoft SharePoint Trigger
- **Internal Name**: `microsoftSharePointTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftsharepointtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePointTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
