# Mocean

## Description

Send SMS and voice messages via Mocean

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mocean
    parameters:
      resource: "sms"
      operation: "send" # Send SMS/Voice message
      from: "" # Number to which to send the message
      to: "" # Number from which to send the message
      language: "en-US"
      message: "" # Message to send
      options:
        dlrUrl: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mocean
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
- **Description**: Send SMS/Voice message

### From

- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: Number to which to send the message
- **Placeholder**: Sender Number

### To

- **Name**: `to`
- **Type**: `string`
- **Default**: `""`
- **Description**: Number from which to send the message
- **Placeholder**: Receipient number

### Language

- **Name**: `language`
- **Type**: `options`
- **Default**: `"en-US"`

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: Message to send

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Field

**Options:**

#### Delivery Report URL
- **Name**: `dlrUrl`
- **Type**: `string`
- **Default**: `""`



## Node Information

- **Node Type**: `n8n-nodes-base.mocean`
- **Display Name**: Mocean
- **Internal Name**: `mocean`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mocean/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mocean/Mocean.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
