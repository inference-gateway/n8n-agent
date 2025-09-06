# Cal.com Trigger

## Description

Handle Cal.com events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Cal.com Trigger
    parameters:
      events: [] # Receive notifications when a Cal event is canceled
      version: "1"
      version: "2"
      options: # The ID of the App to monitor
        appId: "" # The ID of the App to monitor
        eventTypeId: "" # The EventType to monitor. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        payloadTemplate: "" # Template to customize the webhook payload
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.calTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Receive notifications when a Cal event is canceled

### API Version

- **Name**: `version`
- **Type**: `options`
- **Default**: `"1"`

### API Version

- **Name**: `version`
- **Type**: `options`
- **Default**: `"2"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The ID of the App to monitor
- **Placeholder**: Add Field

**Options:**

#### App ID
- **Name**: `appId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the App to monitor

#### EventType Name or ID
- **Name**: `eventTypeId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The EventType to monitor. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Payload Template
- **Name**: `payloadTemplate`
- **Type**: `string`
- **Default**: `""`
- **Description**: Template to customize the webhook payload



## Node Information

- **Node Type**: `n8n-nodes-base.calTrigger`
- **Display Name**: Cal.com Trigger
- **Internal Name**: `calTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.caltrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Cal/CalTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
