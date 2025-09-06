# seven

## Description

Send SMS and make text-to-speech calls

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: seven
    parameters:
      resource: "sms"
      operation: "send" # Send SMS
      operation: "send" # Converts text to voice and calls a given number
      from: "" # The caller ID displayed in the receivers display. Max 16 numeric or 11 alphanumeric characters.
      to: "" # The number of your recipient(s) separated by comma. Can be regular numbers or contact/groups from seven.
      message: "" # The message to send. Max. 1520 characters
      options: # Pick a date for time delayed dispatch
        delay: "" # Pick a date for time delayed dispatch
        foreign_id: "" # Custom foreign ID returned in DLR callbacks
        flash: false # Send as flash message being displayed directly the receiver's display
        label: "" # Custom label used to group analytics
        performance_tracking: false # Whether to enable performance tracking for URLs found in the message text
        ttl: "2880" # Custom time to live specifying the validity period of a message in minutes
      options: # The caller ID. Please use only verified sender IDs, one of your virtual inbound numbers or one of our shared virtual numbers.
        from: "" # The caller ID. Please use only verified sender IDs, one of your virtual inbound numbers or one of our shared virtual numbers.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.sms77
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
- **Description**: Send SMS

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`
- **Description**: Converts text to voice and calls a given number

### From

- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: The caller ID displayed in the receivers display. Max 16 numeric or 11 alphanumeric characters.
- **Placeholder**: +4901234567890

### To

- **Name**: `to`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number of your recipient(s) separated by comma. Can be regular numbers or contact/groups from seven.
- **Placeholder**: +49876543210, MyGroup

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send. Max. 1520 characters

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Pick a date for time delayed dispatch
- **Placeholder**: Add Option

**Options:**

#### Delay
- **Name**: `delay`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Pick a date for time delayed dispatch

#### Foreign ID
- **Name**: `foreign_id`
- **Type**: `string`
- **Default**: `""`
- **Description**: Custom foreign ID returned in DLR callbacks

#### Flash
- **Name**: `flash`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Send as flash message being displayed directly the receiver's display

#### Label
- **Name**: `label`
- **Type**: `string`
- **Default**: `""`
- **Description**: Custom label used to group analytics

#### Performance Tracking
- **Name**: `performance_tracking`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to enable performance tracking for URLs found in the message text

#### TTL
- **Name**: `ttl`
- **Type**: `number`
- **Default**: `"2880"`
- **Description**: Custom time to live specifying the validity period of a message in minutes


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The caller ID. Please use only verified sender IDs, one of your virtual inbound numbers or one of our shared virtual numbers.
- **Placeholder**: Add Option

**Options:**

#### From
- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: The caller ID. Please use only verified sender IDs, one of your virtual inbound numbers or one of our shared virtual numbers.



## Node Information

- **Node Type**: `n8n-nodes-base.sms77`
- **Display Name**: seven
- **Internal Name**: `sms77`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sms77/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Sms77/Sms77.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
