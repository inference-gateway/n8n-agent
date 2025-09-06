# Eventbrite Trigger

## Description

Handle Eventbrite events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Eventbrite Trigger
    parameters:
      authentication: "privateKey"
      organization: "" # The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      event: "" # Limit the triggers to this event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      actions: [] # One or more action to subscribe to
      resolveData: true # By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.eventbriteTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"privateKey"`

### Organization Name or ID

- **Name**: `organization`
- **Type**: `options`
- **Default**: `""`
- **Description**: The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Event Name or ID

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: Limit the triggers to this event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Actions

- **Name**: `actions`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: One or more action to subscribe to

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically.


## Node Information

- **Node Type**: `n8n-nodes-base.eventbriteTrigger`
- **Display Name**: Eventbrite Trigger
- **Internal Name**: `eventbriteTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.eventbritetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Eventbrite/EventbriteTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
