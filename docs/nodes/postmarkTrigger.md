# Postmark Trigger

## Description

Starts the workflow when Postmark events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Postmark Trigger
    parameters:
      events: [] # Trigger on bounce
      firstOpen: false # Only fires on first open for event "Open"
      includeContent: false # Whether to include message content for events "Bounce" and "Spam Complaint"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.postmarkTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Trigger on bounce

### First Open

- **Name**: `firstOpen`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Only fires on first open for event "Open"

### Include Content

- **Name**: `includeContent`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include message content for events "Bounce" and "Spam Complaint"


## Node Information

- **Node Type**: `n8n-nodes-base.postmarkTrigger`
- **Display Name**: Postmark Trigger
- **Internal Name**: `postmarkTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postmarktrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Postmark/PostmarkTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
