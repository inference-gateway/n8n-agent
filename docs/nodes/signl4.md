# SIGNL4

## Description

Consume SIGNL4 API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: SIGNL4
    parameters:
      resource: "alert"
      operation: "send" # Send an alert
      message: "" # A more detailed description for the alert
      additionalFields: {} # In case only one person needs to confirm this Signl
      externalId: "" # If the event originates from a record in a 3rd party system, use this parameter to pass the unique ID of that record. That ID will be communicated in outbound webhook notifications from SIGNL4, which is great for correlation/synchronization of that record with the alert. If you resolve / close an alert you must use the same External ID as in the original alert.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.signl4
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"alert"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`
- **Description**: Send an alert

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: A more detailed description for the alert

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: In case only one person needs to confirm this Signl
- **Placeholder**: Add Field

### External ID

- **Name**: `externalId`
- **Type**: `string`
- **Default**: `""`
- **Description**: If the event originates from a record in a 3rd party system, use this parameter to pass the unique ID of that record. That ID will be communicated in outbound webhook notifications from SIGNL4, which is great for correlation/synchronization of that record with the alert. If you resolve / close an alert you must use the same External ID as in the original alert.


## Node Information

- **Node Type**: `n8n-nodes-base.signl4`
- **Display Name**: SIGNL4
- **Internal Name**: `signl4`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.signl4/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Signl4/Signl4.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
