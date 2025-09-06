# Chargebee

## Description

Retrieve data from Chargebee API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Chargebee
    parameters:
      resource: "invoice"
      operation: "create" # Create a customer
      properties: # Properties to set on the new user
        id: "" # ID for the new customer. If not given, this will be auto-generated.
        first_name: "" # The first name of the customer
        last_name: "" # The last name of the customer
        email: "" # The email address of the customer
        phone: "" # The phone number of the customer
        company: "" # The company of the customer
      operation: "list" # Return the invoices
      maxResults: "10" # Max. amount of results to return(< 100).
      filters: {} # Filter for invoices
      invoiceId: "" # The ID of the invoice to get
      operation: "delete" # Cancel a subscription
      subscriptionId: "" # The ID of the subscription to cancel
      endOfTerm: false # Whether it will not cancel it directly in will instead schedule the cancelation for the end of the term
      subscriptionId: "" # The ID of the subscription to delete
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.chargebee
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"invoice"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a customer

### Properties

- **Name**: `properties`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Properties to set on the new user
- **Placeholder**: Add Property

**Options:**

#### User ID
- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID for the new customer. If not given, this will be auto-generated.

#### First Name
- **Name**: `first_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The first name of the customer

#### Last Name
- **Name**: `last_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The last name of the customer

#### Email
- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address of the customer

#### Phone
- **Name**: `phone`
- **Type**: `string`
- **Default**: `""`
- **Description**: The phone number of the customer

#### Company
- **Name**: `company`
- **Type**: `string`
- **Default**: `""`
- **Description**: The company of the customer


### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"list"`
- **Description**: Return the invoices

### Max Results

- **Name**: `maxResults`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: Max. amount of results to return(< 100).

### Filters

- **Name**: `filters`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Filter for invoices
- **Placeholder**: Add Filter

### Invoice ID

- **Name**: `invoiceId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the invoice to get

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"delete"`
- **Description**: Cancel a subscription

### Subscription ID

- **Name**: `subscriptionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the subscription to cancel

### Schedule End of Term

- **Name**: `endOfTerm`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether it will not cancel it directly in will instead schedule the cancelation for the end of the term

### Subscription ID

- **Name**: `subscriptionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the subscription to delete


## Node Information

- **Node Type**: `n8n-nodes-base.chargebee`
- **Display Name**: Chargebee
- **Internal Name**: `chargebee`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.chargebee/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Chargebee/Chargebee.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
