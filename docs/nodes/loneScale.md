# LoneScale

## Description

Create List, add / delete items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: LoneScale
    parameters:
      resource: "list" # Manipulate list
      operation: "create" # Create a list
      operation: "add" # Create an item
      type: "PEOPLE" # List of company
      list: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      first_name: "" # Contact first name
      last_name: "" # Contact last name
      company_name: "" # Contact company name
      peopleAdditionalFields: # Contact full name
        full_name: "" # Contact full name
        email: ""
        company_name: "" # Contact company name
        current_position: "" # Contact current position
        domain: "" # Contact company domain
        linkedin_url: "" # Contact Linkedin URL
        location: ""
        contact_id: "" # Contact ID from your source
      companyAdditionalFields: # Company Linkedin URL
        linkedin_url: "" # Company Linkedin URL
        domain: "" # Company company domain
        location: ""
        contact_id: "" # Contact ID from your source
      name: "" # Name of your list
      type: "COMPANY" # Create a list of companies
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.loneScale
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"list"`
- **Description**: Manipulate list

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a list

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Create an item

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"PEOPLE"`
- **Description**: List of company

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### First Name

- **Name**: `first_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact first name

### Last Name

- **Name**: `last_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact last name

### Company Name

- **Name**: `company_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact company name

### Additional Fields

- **Name**: `peopleAdditionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Contact full name
- **Placeholder**: Add Field

**Options:**

#### Full Name
- **Name**: `full_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact full name

#### Contact Email
- **Name**: `email`
- **Type**: `string`
- **Default**: `""`

#### Company Name
- **Name**: `company_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact company name

#### Current Position
- **Name**: `current_position`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact current position

#### Company Domain
- **Name**: `domain`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact company domain

#### Linkedin Url
- **Name**: `linkedin_url`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact Linkedin URL

#### Contact Location
- **Name**: `location`
- **Type**: `string`
- **Default**: `""`

#### Contact ID
- **Name**: `contact_id`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact ID from your source


### Additional Fields

- **Name**: `companyAdditionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Company Linkedin URL
- **Placeholder**: Add Field

**Options:**

#### Linkedin Url
- **Name**: `linkedin_url`
- **Type**: `string`
- **Default**: `""`
- **Description**: Company Linkedin URL

#### Company Domain
- **Name**: `domain`
- **Type**: `string`
- **Default**: `""`
- **Description**: Company company domain

#### Contact Location
- **Name**: `location`
- **Type**: `string`
- **Default**: `""`

#### Contact ID
- **Name**: `contact_id`
- **Type**: `string`
- **Default**: `""`
- **Description**: Contact ID from your source


### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of your list
- **Placeholder**: list name

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"COMPANY"`
- **Description**: Create a list of companies


## Node Information

- **Node Type**: `n8n-nodes-base.loneScale`
- **Display Name**: LoneScale
- **Internal Name**: `loneScale`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.lonescale/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/LoneScale/LoneScale.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
