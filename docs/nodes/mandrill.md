# Mandrill

## Description

Consume Mandrill API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mandrill
    parameters:
      resource: "message" # Send a message
      operation: "sendTemplate" # Send message based on template
      template: "" # The template you want to send. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      fromEmail: "" # Email address of the sender optional with name
      toEmail: "" # Email address of the recipient. Multiple ones can be separated by comma.
      jsonParameters: false
      options: # Whether to enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
        async: false # Whether to enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
        autoText: false # Whether or not to automatically generate a text part for messages that are not given text
        autoHtml: false # Whether or not to automatically generate an HTML part for messages that are not given HTML
        bccAddress: "" # An optional address to receive an exact copy of each recipient's email
        fromName: "" # Optional from name to be used
        googleAnalyticsCampaign: "" # Optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.
        googleAnalyticsDomains: "" # An array of strings separated by a comma (,) indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically
      mergeVarsJson: "" # Global merge variables
      mergeVarsUi: {} # Per-recipient merge variables
      metadataUi: {} # Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
      metadataJson: "" # Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
      attachmentsJson: "" # An array of supported attachments to add to the message
      attachmentsUi: "" # The MIME type of the attachment
      headersJson: "" # Optional extra headers to add to the message (most headers are allowed)
      headersUi: {} # Optional extra headers to add to the message (most headers are allowed)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mandrill
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`
- **Description**: Send a message

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"sendTemplate"`
- **Description**: Send message based on template

### Template Name or ID

- **Name**: `template`
- **Type**: `options`
- **Default**: `""`
- **Description**: The template you want to send. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### From Email

- **Name**: `fromEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the sender optional with name
- **Placeholder**: Admin <example@yourdomain.com>

### To Email

- **Name**: `toEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the recipient. Multiple ones can be separated by comma.
- **Placeholder**: info@example.com

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
- **Placeholder**: Add option

**Options:**

#### Async
- **Name**: `async`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.

#### Auto Text
- **Name**: `autoText`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether or not to automatically generate a text part for messages that are not given text

#### Auto HTML
- **Name**: `autoHtml`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether or not to automatically generate an HTML part for messages that are not given HTML

#### BCC Address
- **Name**: `bccAddress`
- **Type**: `string`
- **Default**: `""`
- **Description**: An optional address to receive an exact copy of each recipient's email

#### From Name
- **Name**: `fromName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Optional from name to be used

#### Google Analytics Campaign
- **Name**: `googleAnalyticsCampaign`
- **Type**: `string`
- **Default**: `""`
- **Description**: Optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.

#### Google Analytics Domains
- **Name**: `googleAnalyticsDomains`
- **Type**: `string`
- **Default**: `""`
- **Description**: An array of strings separated by a comma (,) indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically


### Merge Vars

- **Name**: `mergeVarsJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Global merge variables
- **Placeholder**: [
	{
		{ "name": "name", "content": "content" }
	}
]

### Merge Vars

- **Name**: `mergeVarsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Per-recipient merge variables
- **Placeholder**: Add Merge Vars

### Metadata

- **Name**: `metadataUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
- **Placeholder**: Add Metadata

### Metadata

- **Name**: `metadataJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
- **Placeholder**: {
	"website": "www.example.com"
}

### Attachments

- **Name**: `attachmentsJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: An array of supported attachments to add to the message
- **Placeholder**: [
	{
		"type": "text/plain" (the MIME type of the attachment),
		"name": "myfile.txt" (the file name of the attachment),
		"content": "ZXhhbXBsZSBmaWxl" (the content of the attachment as a base64-encoded string)
	}
]

### Attachments

- **Name**: `attachmentsUi`
- **Type**: `fixedCollection`
- **Default**: `""`
- **Description**: The MIME type of the attachment
- **Placeholder**: Add Attachments

### Headers

- **Name**: `headersJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Optional extra headers to add to the message (most headers are allowed)
- **Placeholder**: {
	"Reply-To": "replies@example.com"
}

### Headers

- **Name**: `headersUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Optional extra headers to add to the message (most headers are allowed)
- **Placeholder**: Add Headers


## Node Information

- **Node Type**: `n8n-nodes-base.mandrill`
- **Display Name**: Mandrill
- **Internal Name**: `mandrill`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mandrill/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mandrill/Mandrill.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
