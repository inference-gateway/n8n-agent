# Webhook

## Description

Starts the workflow when a webhook is called

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Webhook
    parameters:
      multipleMethods: false # Whether to allow the webhook to listen for multiple HTTP methods
      httpMethod: "['GET', 'POST']" # The HTTP methods to listen to
      path: "" # The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path.
      webhookNotice: ""
      webhookStreamingNotice: ""
      contentTypeNotice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.webhook
```

## Parameters

### Allow Multiple HTTP Methods

- **Name**: `multipleMethods`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to allow the webhook to listen for multiple HTTP methods

### HTTP Methods

- **Name**: `httpMethod`
- **Type**: `multiOptions`
- **Default**: `"['GET', 'POST']"`
- **Description**: The HTTP methods to listen to

### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path.
- **Placeholder**: webhook

### Insert a \'Respond to Webhook\' node to control when and how you respond. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/" target="_blank">More details</a>

- **Name**: `webhookNotice`
- **Type**: `notice`
- **Default**: `""`

### Insert a node that supports streaming (e.g. \'AI Agent\') and enable streaming to stream directly to the response while the workflow is executed. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/" target="_blank">More details</a>

- **Name**: `webhookStreamingNotice`
- **Type**: `notice`
- **Default**: `""`

### If you are sending back a response, add a "Content-Type" response header with the appropriate value to avoid unexpected behavior

- **Name**: `contentTypeNotice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.webhook`
- **Display Name**: Webhook
- **Internal Name**: `webhook`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Webhook/Webhook.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
