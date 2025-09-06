# Twilio

## Description

Send SMS and WhatsApp messages or make phone calls

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Twilio
    parameters:
      resource: "sms"
      operation: "send" # Send SMS/MMS/WhatsApp message
      operation: "make"
      from: "" # The number from which to send the message
      to: "" # The number to which to send the message
      toWhatsapp: false # Whether the message should be sent to WhatsApp
      message: "" # The message to send
      twiml: false # Whether to use the <a href="https://www.twilio.com/docs/voice/twiml">Twilio Markup Language</a> in the message
      message: ""
      options: # Status Callbacks allow you to receive events related to the REST resources managed by Twilio: Rooms, Recordings and Compositions
        statusCallback: "" # Status Callbacks allow you to receive events related to the REST resources managed by Twilio: Rooms, Recordings and Compositions
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.twilio
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
- **Description**: Send SMS/MMS/WhatsApp message

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"make"`

### From

- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number from which to send the message
- **Placeholder**: +14155238886

### To

- **Name**: `to`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number to which to send the message
- **Placeholder**: +14155238886

### To Whatsapp

- **Name**: `toWhatsapp`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the message should be sent to WhatsApp

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send

### Use TwiML

- **Name**: `twiml`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use the <a href="https://www.twilio.com/docs/voice/twiml">Twilio Markup Language</a> in the message

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Status Callbacks allow you to receive events related to the REST resources managed by Twilio: Rooms, Recordings and Compositions
- **Placeholder**: Add Field

**Options:**

#### Status Callback
- **Name**: `statusCallback`
- **Type**: `string`
- **Default**: `""`
- **Description**: Status Callbacks allow you to receive events related to the REST resources managed by Twilio: Rooms, Recordings and Compositions



## Node Information

- **Node Type**: `n8n-nodes-base.twilio`
- **Display Name**: Twilio
- **Internal Name**: `twilio`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Twilio/Twilio.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
