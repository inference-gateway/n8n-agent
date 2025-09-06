# Freshdesk

## Description

Consume Freshdesk API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Freshdesk
    parameters:
      resource: "ticket"
      operation: "create" # Create a new ticket
      requester: "requesterId" # Email address of the requester. If no contact exists with this email address in Freshdesk, it will be added as a new contact.
      requesterIdentificationValue: "" # Value of the identification selected
      status: "pending"
      priority: "low"
      source: "portal" # The channel through which the ticket was created
      jsonParameters: false
      options: # ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        agent: "" # ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        ccEmails: "" # Separated by a comma (,) email addresses added in the 'cc' field of the incoming ticket email
        company: "" # Company ID of the requester. This attribute can only be set if the Multiple Companies feature is enabled (Estate plan and above). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        description: "" # HTML content of the ticket
        dueBy: "" # Timestamp that denotes when the ticket is due to be resolved
        emailConfigId: "" # ID of email config which is used for this ticket. (i.e., support@yourcompany.com/sales@yourcompany.com) If product_id is given and email_config_id is not given, product's primary email_config_id will be set.
        frDueBy: "" # Timestamp that denotes when the first response is due
        group: "" # ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        name: "" # Name of the requester
        product: "" # ID of the product to which the ticket is associated. It will be ignored if the email_config_id attribute is set in the request. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        subject: "" # Subject of the ticket
        tags: "" # Separated by a comma (,) tags that have been associated with the ticket
      customFieldsUi: "" # Key value pairs containing the names and values of custom fields.
      customFieldsJson: "" # Key value pairs containing the names and values of custom fields.
      ticketId: ""
      updateFields: # ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        agent: "" # ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        ccEmails: "" # Separated by a comma (,) email addresses added in the 'cc' field of the incoming ticket email
        company: "" # Company ID of the requester. This attribute can only be set if the Multiple Companies feature is enabled (Estate plan and above). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        dueBy: "" # Timestamp that denotes when the ticket is due to be resolved
        emailConfigId: "" # ID of email config which is used for this ticket. (i.e., support@yourcompany.com/sales@yourcompany.com) If product_id is given and email_config_id is not given, product's primary email_config_id will be set.
        frDueBy: "" # Timestamp that denotes when the first response is due
        group: "" # ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        name: "" # Name of the requester
        product: "" # ID of the product to which the ticket is associated. It will be ignored if the email_config_id attribute is set in the request. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      ticketId: ""
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "5" # Max number of results to return
      options: # Order sort attribute ascending or descending
        companyId: ""
      ticketId: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.freshdesk
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"ticket"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new ticket

### Requester Identification

- **Name**: `requester`
- **Type**: `options`
- **Default**: `"requesterId"`
- **Description**: Email address of the requester. If no contact exists with this email address in Freshdesk, it will be added as a new contact.

### Value

- **Name**: `requesterIdentificationValue`
- **Type**: `string`
- **Default**: `""`
- **Description**: Value of the identification selected

### Status

- **Name**: `status`
- **Type**: `options`
- **Default**: `"pending"`

### Priority

- **Name**: `priority`
- **Type**: `options`
- **Default**: `"low"`

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"portal"`
- **Description**: The channel through which the ticket was created

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add option

**Options:**

#### Agent Name or ID
- **Name**: `agent`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### CC Emails
- **Name**: `ccEmails`
- **Type**: `string`
- **Default**: `""`
- **Description**: Separated by a comma (,) email addresses added in the 'cc' field of the incoming ticket email

#### Company Name or ID
- **Name**: `company`
- **Type**: `options`
- **Default**: `""`
- **Description**: Company ID of the requester. This attribute can only be set if the Multiple Companies feature is enabled (Estate plan and above). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Description
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: HTML content of the ticket

#### Due By
- **Name**: `dueBy`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Timestamp that denotes when the ticket is due to be resolved

#### Email Config ID
- **Name**: `emailConfigId`
- **Type**: `number`
- **Default**: `""`
- **Description**: ID of email config which is used for this ticket. (i.e., support@yourcompany.com/sales@yourcompany.com) If product_id is given and email_config_id is not given, product's primary email_config_id will be set.

#### FR Due By
- **Name**: `frDueBy`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Timestamp that denotes when the first response is due

#### Group Name or ID
- **Name**: `group`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the requester

#### Product Name or ID
- **Name**: `product`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the product to which the ticket is associated. It will be ignored if the email_config_id attribute is set in the request. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Subject
- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`
- **Description**: Subject of the ticket

#### Tags
- **Name**: `tags`
- **Type**: `string`
- **Default**: `""`
- **Description**: Separated by a comma (,) tags that have been associated with the ticket


### Custom Fields

- **Name**: `customFieldsUi`
- **Type**: `fixedCollection`
- **Default**: `""`
- **Description**: Key value pairs containing the names and values of custom fields.
- **Placeholder**: Add Custom fields

### Custom Fields

- **Name**: `customFieldsJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Key value pairs containing the names and values of custom fields.
- **Placeholder**: {
			// 		'gadget': 'Cold Welder',
			// 	}

### Ticket ID

- **Name**: `ticketId`
- **Type**: `string`
- **Default**: `""`

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field

**Options:**

#### Agent Name or ID
- **Name**: `agent`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the agent to whom the ticket has been assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### CC Emails
- **Name**: `ccEmails`
- **Type**: `string`
- **Default**: `""`
- **Description**: Separated by a comma (,) email addresses added in the 'cc' field of the incoming ticket email

#### Company Name or ID
- **Name**: `company`
- **Type**: `options`
- **Default**: `""`
- **Description**: Company ID of the requester. This attribute can only be set if the Multiple Companies feature is enabled (Estate plan and above). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Due By
- **Name**: `dueBy`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Timestamp that denotes when the ticket is due to be resolved

#### Email Config ID
- **Name**: `emailConfigId`
- **Type**: `number`
- **Default**: `""`
- **Description**: ID of email config which is used for this ticket. (i.e., support@yourcompany.com/sales@yourcompany.com) If product_id is given and email_config_id is not given, product's primary email_config_id will be set.

#### FR Due By
- **Name**: `frDueBy`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Timestamp that denotes when the first response is due

#### Group Name or ID
- **Name**: `group`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the group to which the ticket has been assigned. The default value is the ID of the group that is associated with the given email_config_id. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the requester

#### Product Name or ID
- **Name**: `product`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the product to which the ticket is associated. It will be ignored if the email_config_id attribute is set in the request. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Ticket ID

- **Name**: `ticketId`
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
- **Default**: `"5"`
- **Description**: Max number of results to return

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Order sort attribute ascending or descending
- **Placeholder**: Add option

**Options:**

#### Company ID
- **Name**: `companyId`
- **Type**: `string`
- **Default**: `""`


### Ticket ID

- **Name**: `ticketId`
- **Type**: `string`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.freshdesk`
- **Display Name**: Freshdesk
- **Internal Name**: `freshdesk`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshdesk/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Freshdesk/Freshdesk.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
