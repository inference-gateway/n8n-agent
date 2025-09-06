# Mailchimp Trigger

## Description

Handle Mailchimp events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mailchimp Trigger
    parameters:
      authentication: "apiKey"
      list: "" # The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      events: [] # The events that can trigger the webhook and whether they are enabled
      sources: [] # The possible sources of any events that can trigger the webhook and whether they are enabled
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mailchimpTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The events that can trigger the webhook and whether they are enabled

### Sources

- **Name**: `sources`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The possible sources of any events that can trigger the webhook and whether they are enabled


## Node Information

- **Node Type**: `n8n-nodes-base.mailchimpTrigger`
- **Display Name**: Mailchimp Trigger
- **Internal Name**: `mailchimpTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailchimptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mailchimp/MailchimpTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
