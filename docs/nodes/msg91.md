# MSG91

## Description

Sends transactional SMS via MSG91

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MSG91
    parameters:
      resource: "sms"
      operation: "send" # Send SMS
      from: "" # The number from which to send the message
      to: "" # The number, with coutry code, to which to send the message
      message: "" # The message to send
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.msg91
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

### Sender ID

- **Name**: `from`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number from which to send the message
- **Placeholder**: 4155238886

### To

- **Name**: `to`
- **Type**: `string`
- **Default**: `""`
- **Description**: The number, with coutry code, to which to send the message
- **Placeholder**: +14155238886

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send


## Node Information

- **Node Type**: `n8n-nodes-base.msg91`
- **Display Name**: MSG91
- **Internal Name**: `msg91`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.msg91/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Msg91/Msg91.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
