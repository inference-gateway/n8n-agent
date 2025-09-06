# MessageBird

## Description

Sends SMS via MessageBird

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MessageBird
    parameters:
      resource: "sms"
      operation: "send" # Send text messages (SMS)
      operation: "get" # Get the balance
      originator: "" # The number from which to send the message
      recipients: "" # All recipients separated by commas
      message: "" # The message to be send
      additionalFields: # The date and time of the creation of the message in RFC3339 format (Y-m-dTH:i:sP)
        createdDatetime: "" # The date and time of the creation of the message in RFC3339 format (Y-m-dTH:i:sP)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.messageBird
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
- **Description**: Send text messages (SMS)

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get the balance

### From

- **Name**: `originator`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number from which to send the message
- **Placeholder**: 14155238886

### To

- **Name**: `recipients`
- **Type**: `string`
- **Default**: `""`
- **Description**: All recipients separated by commas
- **Placeholder**: 14155238886/+14155238886

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to be send

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The date and time of the creation of the message in RFC3339 format (Y-m-dTH:i:sP)
- **Placeholder**: Add Fields

**Options:**

#### Created Date-Time
- **Name**: `createdDatetime`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: The date and time of the creation of the message in RFC3339 format (Y-m-dTH:i:sP)



## Node Information

- **Node Type**: `n8n-nodes-base.messageBird`
- **Display Name**: MessageBird
- **Internal Name**: `messageBird`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.messagebird/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MessageBird/MessageBird.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
