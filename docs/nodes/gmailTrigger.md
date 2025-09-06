# Gmail Trigger

## Description

Fetches emails from Gmail and starts the workflow on specified polling intervals.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Gmail Trigger
    parameters:
      authentication: "oAuth2"
      event: "messageReceived"
      simple: true # Whether to return a simplified version of the response instead of the raw data
      filters: # Whether to include messages from SPAM and TRASH in the results
        includeSpamTrash: false # Whether to include messages from SPAM and TRASH in the results
        includeDrafts: false # Whether to include email drafts in the results
      options: # Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'.
        dataPropertyAttachmentsPrefixName: "attachment_" # Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'.
        downloadAttachments: false # Whether the email's attachments will be downloaded
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.gmailTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"messageReceived"`

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include messages from SPAM and TRASH in the results
- **Placeholder**: Add Filter

**Options:**

#### Include Spam and Trash
- **Name**: `includeSpamTrash`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include messages from SPAM and TRASH in the results

#### Include Drafts
- **Name**: `includeDrafts`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include email drafts in the results


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'.
- **Placeholder**: Add option

**Options:**

#### Attachment Prefix
- **Name**: `dataPropertyAttachmentsPrefixName`
- **Type**: `string`
- **Default**: `"attachment_"`
- **Description**: Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'.

#### Download Attachments
- **Name**: `downloadAttachments`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the email's attachments will be downloaded



## Node Information

- **Node Type**: `n8n-nodes-base.gmailTrigger`
- **Display Name**: Gmail Trigger
- **Internal Name**: `gmailTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmailtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Gmail/GmailTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
