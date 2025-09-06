# Pushbullet

## Description

Consume Pushbullet API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pushbullet
    parameters:
      resource: "push"
      operation: "create" # Create a push
      type: "note"
      title: "" # Title of the push
      body: "" # Body of the push
      url: "" # URL of the push
      binaryPropertyName: "data"
      target: "default" # Send the push to all subscribers to your channel that has this tag
      value: "" # The value to be set depending on the target selected. For example, if the target selected is email then this field would take the email address of the person you are trying to send the push to.
      value: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      pushId: ""
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      filters: # Don't return deleted pushes
        active: false # Don't return deleted pushes
        modified_after: "" # Request pushes modified after this timestamp
      pushId: ""
      dismissed: false # Whether to mark a push as having been dismissed by the user, will cause any notifications for the push to be hidden if possible
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pushbullet
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"push"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a push

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"note"`

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Title of the push

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: Body of the push

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL of the push

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Target

- **Name**: `target`
- **Type**: `options`
- **Default**: `"default"`
- **Description**: Send the push to all subscribers to your channel that has this tag

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: The value to be set depending on the target selected. For example, if the target selected is email then this field would take the email address of the person you are trying to send the push to.

### Value Name or ID

- **Name**: `value`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Push ID

- **Name**: `pushId`
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
- **Default**: `"100"`
- **Description**: Max number of results to return

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Don't return deleted pushes
- **Placeholder**: Add Filter

**Options:**

#### Active
- **Name**: `active`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Don't return deleted pushes

#### Modified After
- **Name**: `modified_after`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Request pushes modified after this timestamp


### Push ID

- **Name**: `pushId`
- **Type**: `string`
- **Default**: `""`

### Dismissed

- **Name**: `dismissed`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to mark a push as having been dismissed by the user, will cause any notifications for the push to be hidden if possible


## Node Information

- **Node Type**: `n8n-nodes-base.pushbullet`
- **Display Name**: Pushbullet
- **Internal Name**: `pushbullet`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pushbullet/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pushbullet/Pushbullet.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
