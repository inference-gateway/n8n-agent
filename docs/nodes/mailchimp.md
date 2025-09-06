# Mailchimp

## Description

Consume Mailchimp API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mailchimp
    parameters:
      authentication: "apiKey"
      resource: "member"
      operation: "create" # Create a new member on list
      operation: "create" # Add tags from a list member
      operation: "getAll" # Get many groups
      operation: "getAll" # Delete a campaign
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Email address for a subscriber
      status: "" # Subscriber's current status
      jsonParameters: false
      options: {} # Type of email this member asked to get
      locationFieldsUi: {} # Subscriber location information.n
      mergeFieldsUi: {} # An individual merge var and value for a member
      mergeFieldsJson: ""
      locationJson: ""
      groupsUi: {} # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      groupJson: ""
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Member's email
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Member's email
      options: # A comma-separated list of fields to return
        fields: "" # A comma-separated list of fields to return
        excludeFields: "" # A comma-separated list of fields to exclude
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "500" # Max number of results to return
      options: # Restrict results to subscribers whose information changed before the set timeframe
        beforeLastChanged: "" # Restrict results to subscribers whose information changed before the set timeframe
        beforeTimestampOpt: "" # Restrict results to subscribers who opted-in before the set timeframe
        fields: "" # A comma-separated list of fields to return.
        excludeFields: "" # A comma-separated list of fields to exclude.
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Email address of the subscriber
      jsonParameters: false
      updateFields: {} # Type of email this member asked to get
      mergeFieldsJson: ""
      locationJson: ""
      groupJson: ""
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      email: "" # Email address of the subscriber
      tags: []
      options: # Whether automations based on the tags in the request will not fire
        isSyncing: false # Whether automations based on the tags in the request will not fire
      list: "" # List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      groupCategory: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "500" # Max number of results to return
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "10" # Max number of results to return
      options: # Restrict the response to campaigns created before the set time
        beforeCreateTime: "" # Restrict the response to campaigns created before the set time
        beforeSendTime: "" # Restrict the response to campaigns sent before the set time
      campaignId: "" # List of Campaigns
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mailchimp
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiKey"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"member"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new member on list

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Add tags from a list member

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Get many groups

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Delete a campaign

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address for a subscriber
- **Placeholder**: name@email.com

### Status

- **Name**: `status`
- **Type**: `options`
- **Default**: `""`
- **Description**: Subscriber's current status

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Type of email this member asked to get
- **Placeholder**: Add option

### Location

- **Name**: `locationFieldsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Subscriber location information.n
- **Placeholder**: Add Location

### Merge Fields

- **Name**: `mergeFieldsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: An individual merge var and value for a member
- **Placeholder**: Add Merge Fields

### Merge Fields

- **Name**: `mergeFieldsJson`
- **Type**: `json`
- **Default**: `""`

### Location

- **Name**: `locationJson`
- **Type**: `json`
- **Default**: `""`

### Interest Groups

- **Name**: `groupsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **Placeholder**: Add Interest Group

### Interest Groups

- **Name**: `groupJson`
- **Type**: `json`
- **Default**: `""`

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Member's email
- **Placeholder**: name@email.com

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Member's email
- **Placeholder**: name@email.com

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: A comma-separated list of fields to return
- **Placeholder**: Add option

**Options:**

#### Fields
- **Name**: `fields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated list of fields to return

#### Exclude Fields
- **Name**: `excludeFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated list of fields to exclude


### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"500"`
- **Description**: Max number of results to return

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Restrict results to subscribers whose information changed before the set timeframe
- **Placeholder**: Add option

**Options:**

#### Before Last Changed
- **Name**: `beforeLastChanged`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Restrict results to subscribers whose information changed before the set timeframe

#### Before Timestamp Opt
- **Name**: `beforeTimestampOpt`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Restrict results to subscribers who opted-in before the set timeframe

#### Fields
- **Name**: `fields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated list of fields to return.

#### Exclude Fields
- **Name**: `excludeFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated list of fields to exclude.


### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the subscriber
- **Placeholder**: name@email.com

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Type of email this member asked to get
- **Placeholder**: Add Field

### Merge Fields

- **Name**: `mergeFieldsJson`
- **Type**: `json`
- **Default**: `""`

### Location

- **Name**: `locationJson`
- **Type**: `json`
- **Default**: `""`

### Interest Groups

- **Name**: `groupJson`
- **Type**: `json`
- **Default**: `""`

### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the subscriber
- **Placeholder**: name@email.com

### Tags

- **Name**: `tags`
- **Type**: `string`
- **Default**: `"[]"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether automations based on the tags in the request will not fire
- **Placeholder**: Add option

**Options:**

#### Is Syncing
- **Name**: `isSyncing`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether automations based on the tags in the request will not fire


### List Name or ID

- **Name**: `list`
- **Type**: `options`
- **Default**: `""`
- **Description**: List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Group Category Name or ID

- **Name**: `groupCategory`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"500"`
- **Description**: Max number of results to return

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: Max number of results to return

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Restrict the response to campaigns created before the set time
- **Placeholder**: Add option

**Options:**

#### Before Create Time
- **Name**: `beforeCreateTime`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Restrict the response to campaigns created before the set time

#### Before Send Time
- **Name**: `beforeSendTime`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Restrict the response to campaigns sent before the set time


### Campaign ID

- **Name**: `campaignId`
- **Type**: `string`
- **Default**: `""`
- **Description**: List of Campaigns


## Node Information

- **Node Type**: `n8n-nodes-base.mailchimp`
- **Display Name**: Mailchimp
- **Internal Name**: `mailchimp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mailchimp/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mailchimp/Mailchimp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
