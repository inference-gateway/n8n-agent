# Mautic Trigger

## Description

Handle Mautic events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mautic Trigger
    parameters:
      authentication: "credentials"
      events: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      eventsOrder: "ASC" # Order direction for queued events in one webhook. Can be “DESC” or “ASC”.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mauticTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"credentials"`

### Event Names or IDs

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Events Order

- **Name**: `eventsOrder`
- **Type**: `options`
- **Default**: `"ASC"`
- **Description**: Order direction for queued events in one webhook. Can be “DESC” or “ASC”.


## Node Information

- **Node Type**: `n8n-nodes-base.mauticTrigger`
- **Display Name**: Mautic Trigger
- **Internal Name**: `mauticTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mautictrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mautic/MauticTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
