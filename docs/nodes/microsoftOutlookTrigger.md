# Microsoft Outlook Trigger

## Description

Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Outlook Trigger
    parameters:
      authentication: "microsoftOutlookOAuth2Api" # App-only access via a Microsoft Entra app registration. Choose which mailbox to act on under "Mailbox".
      servicePrincipalNotice: ""
      event: "messageReceived"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftOutlookTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftOutlookOAuth2Api"`
- **Description**: App-only access via a Microsoft Entra app registration. Choose which mailbox to act on under "Mailbox".

### Unless restricted by an Application Access Policy (Exchange Online New-ApplicationAccessPolicy), the Mail.Read application permission lets this app read any mailbox in the tenant

- **Name**: `servicePrincipalNotice`
- **Type**: `notice`
- **Default**: `""`

### Trigger On

- **Name**: `event`
- **Type**: `options`
- **Default**: `"messageReceived"`


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftOutlookTrigger`
- **Display Name**: Microsoft Outlook Trigger
- **Internal Name**: `microsoftOutlookTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlooktrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/Outlook/MicrosoftOutlookTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
