# Affinity Trigger

## Description

Handle Affinity events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Affinity Trigger
    parameters:
      events: [] # Webhook events that will be enabled for that endpoint
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.affinityTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Webhook events that will be enabled for that endpoint


## Node Information

- **Node Type**: `n8n-nodes-base.affinityTrigger`
- **Display Name**: Affinity Trigger
- **Internal Name**: `affinityTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.affinitytrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Affinity/AffinityTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
