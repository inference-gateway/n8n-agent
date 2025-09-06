# Pushcut

## Description

Consume Pushcut API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pushcut
    parameters:
      resource: "notification"
      operation: "send" # Send a notification
      notificationName: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      additionalFields: {} # List of devices this notification is sent to. (default is all devices). Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pushcut
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"notification"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`
- **Description**: Send a notification

### Notification Name or ID

- **Name**: `notificationName`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: List of devices this notification is sent to. (default is all devices). Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field


## Node Information

- **Node Type**: `n8n-nodes-base.pushcut`
- **Display Name**: Pushcut
- **Internal Name**: `pushcut`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pushcut/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pushcut/Pushcut.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
