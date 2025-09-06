# Hunter

## Description

Consume Hunter API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Hunter
    parameters:
      operation: "domainSearch" # Get every email address found on the internet using a given domain name, with sources
      domain: "" # Domain name from which you want to find the email addresses. For example, "stripe.com".
      onlyEmails: true # Whether to return only the found emails
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      filters: {}
      domain: "" # Domain name from which you want to find the email addresses. For example, "stripe.com".
      firstname: "" # The person's first name. It doesn't need to be in lowercase.
      lastname: "" # The person's last name. It doesn't need to be in lowercase.
      email: "" # The email address you want to verify
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.hunter
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"domainSearch"`
- **Description**: Get every email address found on the internet using a given domain name, with sources

### Domain

- **Name**: `domain`
- **Type**: `string`
- **Default**: `""`
- **Description**: Domain name from which you want to find the email addresses. For example, "stripe.com".

### Only Emails

- **Name**: `onlyEmails`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return only the found emails

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

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Filter

### Domain

- **Name**: `domain`
- **Type**: `string`
- **Default**: `""`
- **Description**: Domain name from which you want to find the email addresses. For example, "stripe.com".

### First Name

- **Name**: `firstname`
- **Type**: `string`
- **Default**: `""`
- **Description**: The person's first name. It doesn't need to be in lowercase.

### Last Name

- **Name**: `lastname`
- **Type**: `string`
- **Default**: `""`
- **Description**: The person's last name. It doesn't need to be in lowercase.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address you want to verify
- **Placeholder**: name@email.com


## Node Information

- **Node Type**: `n8n-nodes-base.hunter`
- **Display Name**: Hunter
- **Internal Name**: `hunter`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hunter/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Hunter/Hunter.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
