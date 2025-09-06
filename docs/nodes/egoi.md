# E-goi

## Description

Consume E-goi API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: E-goi
    parameters:
      resource: "contact"
      operation: "create" # Create a member
      list: "" # ID of list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Email address for a subscriber
      contactId: "" # Contact ID of the subscriber
      resolveData: true # By default the response just includes the contact ID. If this option gets activated, it will resolve the data automatically.
      additionalFields: # Birth date of a subscriber
        birth_date: "" # Birth date of a subscriber
        cellphone: "" # Cellphone of a subscriber
      updateFields: # Birth date of subscriber
        birth_date: "" # Birth date of subscriber
        cellphone: "" # Cellphone of subscriber
        email: "" # Email address for subscriber
      by: "id" # Search by
      contactId: "" # Contact ID of the subscriber
      email: "" # Email address for subscriber
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      simple: true # Whether to return a simplified version of the response instead of the raw data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.egoi
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"contact"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a member

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address for a subscriber
- **Placeholder**: name@email.com

### Contact ID

- **Name**: `contactId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact ID of the subscriber

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default the response just includes the contact ID. If this option gets activated, it will resolve the data automatically.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Birth date of a subscriber
- **Placeholder**: Add Field

**Options:**

#### Birth Date
- **Name**: `birth_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Birth date of a subscriber

#### Cellphone
- **Name**: `cellphone`
- **Type**: `string`
- **Default**: `""`
- **Description**: Cellphone of a subscriber


### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Birth date of subscriber
- **Placeholder**: Add Field

**Options:**

#### Birth Date
- **Name**: `birth_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Birth date of subscriber

#### Cellphone
- **Name**: `cellphone`
- **Type**: `string`
- **Default**: `""`
- **Description**: Cellphone of subscriber

#### Email
- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address for subscriber


### By

- **Name**: `by`
- **Type**: `options`
- **Default**: `"id"`
- **Description**: Search by

### Contact ID

- **Name**: `contactId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact ID of the subscriber

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address for subscriber
- **Placeholder**: name@email.com

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data


## Node Information

- **Node Type**: `n8n-nodes-base.egoi`
- **Display Name**: E-goi
- **Internal Name**: `egoi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.egoi/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Egoi/Egoi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
