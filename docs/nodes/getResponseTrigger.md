# GetResponse Trigger

## Description

Starts the workflow when GetResponse events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GetResponse Trigger
    parameters:
      authentication: "apiKey"
      events: [] # Receive notifications when a customer is subscribed to a list
      listIds: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      options: # Whether to delete the current subscription
        delete: false # Whether to delete the current subscription
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.getResponseTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Receive notifications when a customer is subscribed to a list

### List Names or IDs

- **Name**: `listIds`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to delete the current subscription
- **Placeholder**: Add option

**Options:**

#### Delete Current Subscription
- **Name**: `delete`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to delete the current subscription



## Node Information

- **Node Type**: `n8n-nodes-base.getResponseTrigger`
- **Display Name**: GetResponse Trigger
- **Internal Name**: `getResponseTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.getresponsetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/GetResponse/GetResponseTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
