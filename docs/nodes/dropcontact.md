# Dropcontact

## Description

Find B2B emails and enrich contacts

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Dropcontact
    parameters:
      resource: "contact"
      operation: "enrich" # Find B2B emails and enrich your contact from his name and his website
      requestId: ""
      email: ""
      simplify: false # When off, waits for the contact data before completing. Waiting time can be adjusted with Extend Wait Time option. When on, returns a request_id that can be used later in the Fetch Request operation.
      additionalFields:
        num_siren: ""
        siret: ""
        company: ""
        country: ""
        first_name: ""
        full_name: ""
        last_name: ""
        linkedin: ""
        phone: ""
        website: ""
      options: {} # When not simplifying the response, data will be fetched in two steps. This parameter controls how long to wait (in seconds) before trying the second step.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.dropcontact
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"contact"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"enrich"`
- **Description**: Find B2B emails and enrich your contact from his name and his website

### Request ID

- **Name**: `requestId`
- **Type**: `string`
- **Default**: `""`

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: name@email.com

### Simplify Output (Faster)

- **Name**: `simplify`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When off, waits for the contact data before completing. Waiting time can be adjusted with Extend Wait Time option. When on, returns a request_id that can be used later in the Fetch Request operation.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Field

**Options:**

#### Company SIREN Number
- **Name**: `num_siren`
- **Type**: `string`
- **Default**: `""`

#### Company SIRET Code
- **Name**: `siret`
- **Type**: `string`
- **Default**: `""`

#### Company Name
- **Name**: `company`
- **Type**: `string`
- **Default**: `""`

#### Country
- **Name**: `country`
- **Type**: `string`
- **Default**: `""`

#### First Name
- **Name**: `first_name`
- **Type**: `string`
- **Default**: `""`

#### Full Name
- **Name**: `full_name`
- **Type**: `string`
- **Default**: `""`

#### Last Name
- **Name**: `last_name`
- **Type**: `string`
- **Default**: `""`

#### LinkedIn Profile
- **Name**: `linkedin`
- **Type**: `string`
- **Default**: `""`

#### Phone Number
- **Name**: `phone`
- **Type**: `string`
- **Default**: `""`

#### Website
- **Name**: `website`
- **Type**: `string`
- **Default**: `""`


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: When not simplifying the response, data will be fetched in two steps. This parameter controls how long to wait (in seconds) before trying the second step.
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.dropcontact`
- **Display Name**: Dropcontact
- **Internal Name**: `dropcontact`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dropcontact/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Dropcontact/Dropcontact.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
