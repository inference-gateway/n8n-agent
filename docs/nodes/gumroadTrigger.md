# Gumroad Trigger

## Description

Handle Gumroad events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Gumroad Trigger
    parameters:
      resource: "" # When subscribed to this resource, you will be notified of cancellations of the user's subscribers
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.gumroadTrigger
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `""`
- **Description**: When subscribed to this resource, you will be notified of cancellations of the user's subscribers


## Node Information

- **Node Type**: `n8n-nodes-base.gumroadTrigger`
- **Display Name**: Gumroad Trigger
- **Internal Name**: `gumroadTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gumroadtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Gumroad/GumroadTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
