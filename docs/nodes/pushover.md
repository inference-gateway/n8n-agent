# Pushover

## Description

Consume Pushover API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pushover
    parameters:
      resource: "message"
      operation: "push"
      userKey: "" # The user/group key (not e-mail address) of your user (or you), viewable when logged into the <a href="https://pushover.net/">dashboard</a> (often referred to as <code>USER_KEY</code> in the <a href="https://support.pushover.net/i44-example-code-and-pushover-libraries">libraries</a> and code examples)
      message: "" # Your message
      priority: "-2" # Send as -2 to generate no notification/alert, -1 to always send as a quiet notification, 1 to display as high-priority and bypass the user's quiet hours, or 2 to also require confirmation from the user
      retry: "30" # Specifies how often (in seconds) the Pushover servers will send the same notification to the user. This parameter must have a value of at least 30 seconds between retries.
      expire: "30" # Specifies how many seconds your notification will continue to be retried for (every retry seconds)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pushover
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"push"`

### User Key

- **Name**: `userKey`
- **Type**: `string`
- **Default**: `""`
- **Description**: The user/group key (not e-mail address) of your user (or you), viewable when logged into the <a href="https://pushover.net/">dashboard</a> (often referred to as <code>USER_KEY</code> in the <a href="https://support.pushover.net/i44-example-code-and-pushover-libraries">libraries</a> and code examples)

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: Your message

### Priority

- **Name**: `priority`
- **Type**: `options`
- **Default**: `"-2"`
- **Description**: Send as -2 to generate no notification/alert, -1 to always send as a quiet notification, 1 to display as high-priority and bypass the user's quiet hours, or 2 to also require confirmation from the user

### Retry (Seconds)

- **Name**: `retry`
- **Type**: `number`
- **Default**: `"30"`
- **Description**: Specifies how often (in seconds) the Pushover servers will send the same notification to the user. This parameter must have a value of at least 30 seconds between retries.

### Expire (Seconds)

- **Name**: `expire`
- **Type**: `number`
- **Default**: `"30"`
- **Description**: Specifies how many seconds your notification will continue to be retried for (every retry seconds)


## Node Information

- **Node Type**: `n8n-nodes-base.pushover`
- **Display Name**: Pushover
- **Internal Name**: `pushover`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pushover/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pushover/Pushover.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
