# Mailgun

## Description

Sends an email via Mailgun

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mailgun
    parameters:
      fromEmail: "" # Email address of the sender optional with name
      toEmail: "" # Email address of the recipient. Multiple ones can be separated by comma.
      ccEmail: "" # Cc Email address of the recipient. Multiple ones can be separated by comma.
      bccEmail: "" # Bcc Email address of the recipient. Multiple ones can be separated by comma.
      replyTo: "" # Reply-To header. Recipients will use this address when replying.
      customHeaders: {} # Arbitrary email headers. Enter only the header name (e.g. X-Custom-Header); the h: prefix is added automatically.
      tags: "" # Tags for segmentation and analytics (comma-separated). Sent as o:tag.
      subject: "" # Subject line of the email
      text: "" # Plain text message of email
      html: "" # HTML text message of email
      attachments: "" # Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mailgun
```

## Parameters

### From Email

- **Name**: `fromEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the sender optional with name
- **Placeholder**: Admin <admin@example.com>

### To Email

- **Name**: `toEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the recipient. Multiple ones can be separated by comma.
- **Placeholder**: info@example.com

### Cc Email

- **Name**: `ccEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Cc Email address of the recipient. Multiple ones can be separated by comma.

### Bcc Email

- **Name**: `bccEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Bcc Email address of the recipient. Multiple ones can be separated by comma.

### Reply-To

- **Name**: `replyTo`
- **Type**: `string`
- **Default**: `""`
- **Description**: Reply-To header. Recipients will use this address when replying.
- **Placeholder**: reply@example.com

### Custom Headers

- **Name**: `customHeaders`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Arbitrary email headers. Enter only the header name (e.g. X-Custom-Header); the h: prefix is added automatically.
- **Placeholder**: Add Header

### Tags

- **Name**: `tags`
- **Type**: `string`
- **Default**: `""`
- **Description**: Tags for segmentation and analytics (comma-separated). Sent as o:tag.
- **Placeholder**: tag1, tag2

### Subject

- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`
- **Description**: Subject line of the email
- **Placeholder**: My subject line

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Plain text message of email

### HTML

- **Name**: `html`
- **Type**: `string`
- **Default**: `""`
- **Description**: HTML text message of email

### Attachments

- **Name**: `attachments`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated.


## Node Information

- **Node Type**: `n8n-nodes-base.mailgun`
- **Display Name**: Mailgun
- **Internal Name**: `mailgun`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailgun/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mailgun/Mailgun.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
