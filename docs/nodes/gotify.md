# Gotify

## Description

Consume Gotify API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Gotify
    parameters:
      resource: "message"
      operation: "create"
      message: "" # The message to send, If using Markdown add the Content Type option
      additionalFields: # The priority of the message
        priority: "1" # The priority of the message
        title: "" # The title of the message
      options: {} # The message content type
      messageId: ""
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.gotify
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send, If using Markdown add the Content Type option

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The priority of the message
- **Placeholder**: Add Field

**Options:**

#### Priority
- **Name**: `priority`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: The priority of the message

#### Title
- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title of the message


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The message content type
- **Placeholder**: Add option

### Message ID

- **Name**: `messageId`
- **Type**: `string`
- **Default**: `""`

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"20"`
- **Description**: Max number of results to return


## Node Information

- **Node Type**: `n8n-nodes-base.gotify`
- **Display Name**: Gotify
- **Internal Name**: `gotify`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gotify/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Gotify/Gotify.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
