# Respond to Webhook

## Description

Returns data for Webhook

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Respond to Webhook
    parameters:
      enableResponseOutput: false # Whether to provide an additional output branch with the response sent to the webhook
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.respondToWebhook
```

## Parameters

### Enable Response Output Branch

- **Name**: `enableResponseOutput`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to provide an additional output branch with the response sent to the webhook


## Node Information

- **Node Type**: `n8n-nodes-base.respondToWebhook`
- **Display Name**: Respond to Webhook
- **Internal Name**: `respondToWebhook`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.respondtowebhook/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/RespondToWebhook/RespondToWebhook.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
