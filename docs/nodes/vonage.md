# Vonage

## Description

Consume Vonage API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Vonage
    parameters:
      resource: "sms"
      operation: "send"
      from: "" # The name or number the message should be sent from
      to: "" # The number that the message should be sent to. Numbers are specified in E.164 format.
      type: "text" # The format of the message body
      binaryPropertyName: "data" # Object property name which holds binary data.
      body: "" # Hex encoded binary data
      udh: "" # Your custom Hex encoded User Data Header
      title: "" # The title for a wappush SMS
      url: "" # The URL of your website
      validity: "0" # The availability for an SMS in minutes
      message: "" # The body of the message being sent
      vcard: "" # A business card in vCard format
      vcal: "" # A calendar event in vCal format
      additionalFields: # An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email support@nexmo.com.
        account-ref: "" # An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email support@nexmo.com.
        callback: "" # The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard.
        client-ref: "" # You can optionally include your own reference of up to 40 characters
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.vonage
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"sms"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`

### From

- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name or number the message should be sent from

### To

- **Name**: `to`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number that the message should be sent to. Numbers are specified in E.164 format.

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"text"`
- **Description**: The format of the message body

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Object property name which holds binary data.

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: Hex encoded binary data

### UDH

- **Name**: `udh`
- **Type**: `string`
- **Default**: `""`
- **Description**: Your custom Hex encoded User Data Header

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title for a wappush SMS

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL of your website

### Validity (in minutes)

- **Name**: `validity`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The availability for an SMS in minutes

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the message being sent

### VCard

- **Name**: `vcard`
- **Type**: `string`
- **Default**: `""`
- **Description**: A business card in vCard format

### VCal

- **Name**: `vcal`
- **Type**: `string`
- **Default**: `""`
- **Description**: A calendar event in vCal format

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email support@nexmo.com.
- **Placeholder**: Add Field

**Options:**

#### Account Ref
- **Name**: `account-ref`
- **Type**: `string`
- **Default**: `""`
- **Description**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email support@nexmo.com.

#### Callback
- **Name**: `callback`
- **Type**: `string`
- **Default**: `""`
- **Description**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard.

#### Client Ref
- **Name**: `client-ref`
- **Type**: `string`
- **Default**: `""`
- **Description**: You can optionally include your own reference of up to 40 characters



## Node Information

- **Node Type**: `n8n-nodes-base.vonage`
- **Display Name**: Vonage
- **Internal Name**: `vonage`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.vonage/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Vonage/Vonage.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
