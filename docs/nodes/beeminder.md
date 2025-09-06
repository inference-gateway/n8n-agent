# Beeminder

## Description

Consume Beeminder API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Beeminder
    parameters:
      authentication: "apiToken"
      resource: "datapoint"
      operation: "create" # Create a charge
      operation: "create" # Create datapoint for goal
      operation: "get" # Create a new goal
      operation: "get" # Get user information
      goalName: "" # The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      goalName: "" # The name of the goal to derail. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      goalName: "" # The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      amount: "0" # Charge amount in USD
      datapoints: [] # Array of datapoint objects to create. Each object should contain value and optionally timestamp, comment, etc.
      slug: "" # Unique identifier for the goal
      title: "" # Human-readable title for the goal
      goal_type: "hustler" # Type of goal. <a href="https://api.beeminder.com/#attributes-2">More info here.</a>.
      gunits: "" # Units for the goal (e.g., "hours", "pages", "pounds")
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "30" # Max number of results to return
      value: "1" # Datapoint value to send
      datapointId: ""
      additionalFields: # Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created
        comment: ""
        timestamp: "" # Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created
        requestid: "" # String to uniquely identify a datapoint
      additionalFields: # Charge explanation
        note: "" # Charge explanation
        dryrun: false # Whether to test charge creation without actually charging
      additionalFields: # Target date for the goal
        goaldate: "null" # Target date for the goal
        goalval: "null" # Target value for the goal
        rate: "null" # Rate of progress (units per day)
        initval: "0" # Initial value for today's date
        secret: false # Whether the goal is secret
        datapublic: false # Whether the data is public
      updateFields: # Human-readable title for the goal
        title: "" # Human-readable title for the goal
        yaxis: "" # Y-axis label for the goal graph
        tmin: "" # Minimum date for the goal in format yyyy-mm-dd
        tmax: "" # Maximum date for the goal in format yyyy-mm-dd
        secret: false # Whether the goal is secret
        datapublic: false # Whether the data is public
      additionalFields: # Whether to include datapoints in the response
        datapoints: false # Whether to include datapoints in the response
        emaciated: false # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal object
      additionalFields: # Whether to include associations in the response
        associations: false # Whether to include associations in the response
        diff_since: "null" # Only goals and datapoints that have been created or updated since the timestamp will be returned
        skinny: false # Whether to return minimal user data
        emaciated: false # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from any goal objects returned with the user
        datapoints_count: "null" # Number of datapoints to include
      additionalFields: # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
        emaciated: false # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
      additionalFields: # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
        emaciated: false # Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
      options: # Attribute to sort on
        sort: "id" # Attribute to sort on
      updateFields: # Datapoint value to send
        value: "1" # Datapoint value to send
        comment: ""
        timestamp: "" # Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.beeminder
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"datapoint"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a charge

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create datapoint for goal

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Create a new goal

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get user information

### Goal Name or ID

- **Name**: `goalName`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Goal Name or ID

- **Name**: `goalName`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the goal to derail. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Goal Name or ID

- **Name**: `goalName`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the goal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Amount

- **Name**: `amount`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Charge amount in USD

### Datapoints

- **Name**: `datapoints`
- **Type**: `json`
- **Default**: `"[]"`
- **Description**: Array of datapoint objects to create. Each object should contain value and optionally timestamp, comment, etc.
- **Placeholder**: [{"value": 1, "comment": "First datapoint"}, {"value": 2, "comment": "Second datapoint"}]

### Goal Slug

- **Name**: `slug`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the goal

### Goal Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Human-readable title for the goal

### Goal Type

- **Name**: `goal_type`
- **Type**: `options`
- **Default**: `"hustler"`
- **Description**: Type of goal. <a href="https://api.beeminder.com/#attributes-2">More info here.</a>.

### Goal Units

- **Name**: `gunits`
- **Type**: `string`
- **Default**: `""`
- **Description**: Units for the goal (e.g., "hours", "pages", "pounds")

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"30"`
- **Description**: Max number of results to return

### Value

- **Name**: `value`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Datapoint value to send

### Datapoint ID

- **Name**: `datapointId`
- **Type**: `string`
- **Default**: `""`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created
- **Placeholder**: Add Field

**Options:**

#### Comment
- **Name**: `comment`
- **Type**: `string`
- **Default**: `""`

#### Timestamp
- **Name**: `timestamp`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created

#### Request ID
- **Name**: `requestid`
- **Type**: `string`
- **Default**: `""`
- **Description**: String to uniquely identify a datapoint


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Charge explanation
- **Placeholder**: Add Field

**Options:**

#### Note
- **Name**: `note`
- **Type**: `string`
- **Default**: `""`
- **Description**: Charge explanation

#### Dry Run
- **Name**: `dryrun`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to test charge creation without actually charging


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Target date for the goal
- **Placeholder**: Add Field

**Options:**

#### Goal Date
- **Name**: `goaldate`
- **Type**: `dateTime`
- **Default**: `"null"`
- **Description**: Target date for the goal

#### Goal Value
- **Name**: `goalval`
- **Type**: `number`
- **Default**: `"null"`
- **Description**: Target value for the goal

#### Rate
- **Name**: `rate`
- **Type**: `number`
- **Default**: `"null"`
- **Description**: Rate of progress (units per day)

#### Initial Value
- **Name**: `initval`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Initial value for today's date

#### Secret
- **Name**: `secret`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the goal is secret

#### Data Public
- **Name**: `datapublic`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data is public


### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Human-readable title for the goal
- **Placeholder**: Add Field

**Options:**

#### Title
- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Human-readable title for the goal

#### Y-Axis
- **Name**: `yaxis`
- **Type**: `string`
- **Default**: `""`
- **Description**: Y-axis label for the goal graph

#### Tmin
- **Name**: `tmin`
- **Type**: `string`
- **Default**: `""`
- **Description**: Minimum date for the goal in format yyyy-mm-dd

#### Tmax
- **Name**: `tmax`
- **Type**: `string`
- **Default**: `""`
- **Description**: Maximum date for the goal in format yyyy-mm-dd

#### Secret
- **Name**: `secret`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the goal is secret

#### Data Public
- **Name**: `datapublic`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data is public


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include datapoints in the response
- **Placeholder**: Add Field

**Options:**

#### Include Datapoints
- **Name**: `datapoints`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include datapoints in the response

#### Emaciated
- **Name**: `emaciated`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal object


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include associations in the response
- **Placeholder**: Add Field

**Options:**

#### Associations
- **Name**: `associations`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include associations in the response

#### Diff Since
- **Name**: `diff_since`
- **Type**: `dateTime`
- **Default**: `"null"`
- **Description**: Only goals and datapoints that have been created or updated since the timestamp will be returned

#### Skinny
- **Name**: `skinny`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return minimal user data

#### Emaciated
- **Name**: `emaciated`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from any goal objects returned with the user

#### Datapoints Count
- **Name**: `datapoints_count`
- **Type**: `number`
- **Default**: `"null"`
- **Description**: Number of datapoints to include


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
- **Placeholder**: Add Field

**Options:**

#### Emaciated
- **Name**: `emaciated`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects
- **Placeholder**: Add Field

**Options:**

#### Emaciated
- **Name**: `emaciated`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include the goal attributes called road, roadall, and fullroad will be stripped from the goal objects


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Attribute to sort on
- **Placeholder**: Add field

**Options:**

#### Sort
- **Name**: `sort`
- **Type**: `string`
- **Default**: `"id"`
- **Description**: Attribute to sort on


### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Datapoint value to send
- **Placeholder**: Add Field

**Options:**

#### Value
- **Name**: `value`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Datapoint value to send

#### Comment
- **Name**: `comment`
- **Type**: `string`
- **Default**: `""`

#### Timestamp
- **Name**: `timestamp`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Defaults to "now" if none is passed in, or the existing timestamp if the datapoint is being updated rather than created



## Node Information

- **Node Type**: `n8n-nodes-base.beeminder`
- **Display Name**: Beeminder
- **Internal Name**: `beeminder`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.beeminder/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Beeminder/Beeminder.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
