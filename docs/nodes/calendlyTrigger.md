# Calendly Trigger

## Description

Starts the workflow when Calendly events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Calendly Trigger
    parameters:
      authentication: "apiKey"
      deprecationNotice: ""
      scope: "user" # Triggers the webhook for all subscribed events within the organization
      events: [] # Receive notifications when a new Calendly event is created
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.calendlyTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### Action required: Calendly will discontinue API Key authentication on May 31, 2025. Update node to use OAuth2 authentication now to ensure your workflows continue to work.

- **Name**: `deprecationNotice`
- **Type**: `notice`
- **Default**: `""`

### Scope

- **Name**: `scope`
- **Type**: `options`
- **Default**: `"user"`
- **Description**: Triggers the webhook for all subscribed events within the organization

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Receive notifications when a new Calendly event is created


## Node Information

- **Node Type**: `n8n-nodes-base.calendlyTrigger`
- **Display Name**: Calendly Trigger
- **Internal Name**: `calendlyTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.calendlytrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Calendly/CalendlyTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
