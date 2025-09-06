# Mailjet Trigger

## Description

Handle Mailjet events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mailjet Trigger
    parameters:
      event: "open" # Determines which resource events the webhook is triggered for
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mailjetTrigger
```

## Parameters

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"open"`
- **Description**: Determines which resource events the webhook is triggered for


## Node Information

- **Node Type**: `n8n-nodes-base.mailjetTrigger`
- **Display Name**: Mailjet Trigger
- **Internal Name**: `mailjetTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailjettrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mailjet/MailjetTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
