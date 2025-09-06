# Jira Trigger

## Description

Starts the workflow when Jira events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Jira Trigger
    parameters:
      jiraVersion: "cloud"
      authenticateWebhook: false # Whether authentication should be activated for the incoming webhooks (makes it more secure)
      incomingAuthentication: "none" # If authentication should be activated for the webhook (makes it more secure)
      events: [] # The events to listen to
      additionalFields: # Whether a request with empty body will be sent to the URL. Leave unchecked if you want to receive JSON.
        excludeBody: false # Whether a request with empty body will be sent to the URL. Leave unchecked if you want to receive JSON.
        filter: "" # You can specify a JQL query to send only events triggered by matching issues. The JQL filter only applies to events under the Issue and Comment columns.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jiraTrigger
```

## Parameters

### Jira Version

- **Name**: `jiraVersion`
- **Type**: `options`
- **Default**: `"cloud"`

### Authenticate Incoming Webhook

- **Name**: `authenticateWebhook`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether authentication should be activated for the incoming webhooks (makes it more secure)

### Authenticate Webhook With

- **Name**: `incomingAuthentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: If authentication should be activated for the webhook (makes it more secure)

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The events to listen to

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether a request with empty body will be sent to the URL. Leave unchecked if you want to receive JSON.
- **Placeholder**: Add Field

**Options:**

#### Exclude Body
- **Name**: `excludeBody`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether a request with empty body will be sent to the URL. Leave unchecked if you want to receive JSON.

#### Filter
- **Name**: `filter`
- **Type**: `string`
- **Default**: `""`
- **Description**: You can specify a JQL query to send only events triggered by matching issues. The JQL filter only applies to events under the Issue and Comment columns.



## Node Information

- **Node Type**: `n8n-nodes-base.jiraTrigger`
- **Display Name**: Jira Trigger
- **Internal Name**: `jiraTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jiratrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Jira/JiraTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
