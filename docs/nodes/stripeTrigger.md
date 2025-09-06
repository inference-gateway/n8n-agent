# Stripe Trigger

## Description

Handle Stripe events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Stripe Trigger
    parameters:
      events: [] # The event to listen to
      apiVersion: "" # The API version to use for requests. It controls the format and structure of the incoming event payloads that Stripe sends to your webhook. If empty, Stripe will use the default API version set in your account at the time, which may lead to event processing issues if the API version changes in the future.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.stripeTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The event to listen to

### API Version

- **Name**: `apiVersion`
- **Type**: `string`
- **Default**: `""`
- **Description**: The API version to use for requests. It controls the format and structure of the incoming event payloads that Stripe sends to your webhook. If empty, Stripe will use the default API version set in your account at the time, which may lead to event processing issues if the API version changes in the future.
- **Placeholder**: 2025-05-28.basil


## Node Information

- **Node Type**: `n8n-nodes-base.stripeTrigger`
- **Display Name**: Stripe Trigger
- **Internal Name**: `stripeTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stripetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Stripe/StripeTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
