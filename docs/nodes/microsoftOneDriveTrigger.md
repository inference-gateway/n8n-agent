# Microsoft OneDrive Trigger

## Description

Trigger for Microsoft OneDrive API.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft OneDrive Trigger
    parameters:
      authentication: "microsoftOneDriveOAuth2Api" # Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Files.ReadWrite.All) on the credential.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftOneDriveTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftOneDriveOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Files.ReadWrite.All) on the credential.


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftOneDriveTrigger`
- **Display Name**: Microsoft OneDrive Trigger
- **Internal Name**: `microsoftOneDriveTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrivetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDriveTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
