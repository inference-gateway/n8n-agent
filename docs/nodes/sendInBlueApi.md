# Brevo Trigger

## Description

Starts the workflow when Brevo events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Brevo Trigger
    parameters:
      type: "transactional"
      events: [] # Triggers when transactional email is blocked
      events: [] # Triggers when marketing email is clicked
      events: [] # Triggers when inbound email is processed
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.sendInBlueApi
```

## Parameters

### Resource

- **Name**: `type`
- **Type**: `options`
- **Default**: `"transactional"`

### Trigger On

- **Name**: `events`
- **Type**: `string`
- **Default**: `"[]"`
- **Description**: Triggers when transactional email is blocked
- **Placeholder**: Add Event

### Trigger On

- **Name**: `events`
- **Type**: `string`
- **Default**: `"[]"`
- **Description**: Triggers when marketing email is clicked
- **Placeholder**: Add Event

### Trigger On

- **Name**: `events`
- **Type**: `string`
- **Default**: `"[]"`
- **Description**: Triggers when inbound email is processed
- **Placeholder**: Add Event


## Node Information

- **Node Type**: `n8n-nodes-base.sendInBlueApi`
- **Display Name**: Brevo Trigger
- **Internal Name**: `sendInBlueApi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sendinblueapi/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Brevo/BrevoTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
