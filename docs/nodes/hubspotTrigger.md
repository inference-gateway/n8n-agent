# HubSpot Trigger

## Description

Starts the workflow when HubSpot events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: HubSpot Trigger
    parameters:
      eventsUi: {} # To get notified if any company is created in a customer's account
      additionalFields:
        maxConcurrentRequests: "5"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.hubspotTrigger
```

## Parameters

### Events

- **Name**: `eventsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: To get notified if any company is created in a customer's account
- **Placeholder**: Add Event

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Field

**Options:**

#### Max Concurrent Requests
- **Name**: `maxConcurrentRequests`
- **Type**: `number`
- **Default**: `"5"`



## Node Information

- **Node Type**: `n8n-nodes-base.hubspotTrigger`
- **Display Name**: HubSpot Trigger
- **Internal Name**: `hubspotTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hubspottrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Hubspot/HubspotTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
