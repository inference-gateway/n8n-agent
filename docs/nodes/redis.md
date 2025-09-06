# Redis

## Description

Get, send and update data in Redis

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Redis
    parameters:
      operation: "info" # Delete a key from Redis
      key: "" # Name of the key to delete from Redis
      propertyName: "propertyName" # Name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
      key: "" # Name of the key to get from Redis
      keyType: "automatic" # Requests the type before requesting the data (slower)
      options: # <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
        dotNotation: true # <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
      key: "" # Name of the key to increment
      expire: false # Whether to set a timeout on key
      ttl: "60" # Number of seconds before key expiration
      keyPattern: "" # The key pattern for the keys to return
      getValues: true # Whether to get the value of matching keys
      key: "" # Name of the key to set in Redis
      value: "" # The value to write in Redis
      keyType: "automatic" # Tries to figure out the type automatically depending on the data
      valueIsJSON: true # Whether the value is JSON or key value pairs
      expire: false # Whether to set a timeout on key
      ttl: "60" # Number of seconds before key expiration
      channel: "" # Channel name
      messageData: "" # Data to publish
      list: "" # Name of the list in Redis
      messageData: "" # Data to push
      tail: false # Whether to push or pop data from the end of the list
      propertyName: "propertyName" # Optional name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".
      options: # <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
        dotNotation: true # <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.redis
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"info"`
- **Description**: Delete a key from Redis

### Key

- **Name**: `key`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the key to delete from Redis

### Name

- **Name**: `propertyName`
- **Type**: `string`
- **Default**: `"propertyName"`
- **Description**: Name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".

### Key

- **Name**: `key`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the key to get from Redis

### Key Type

- **Name**: `keyType`
- **Type**: `options`
- **Default**: `"automatic"`
- **Description**: Requests the type before requesting the data (slower)

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
- **Placeholder**: Add option

**Options:**

#### Dot Notation
- **Name**: `dotNotation`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.


### Key

- **Name**: `key`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the key to increment

### Expire

- **Name**: `expire`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to set a timeout on key

### TTL

- **Name**: `ttl`
- **Type**: `number`
- **Default**: `"60"`
- **Description**: Number of seconds before key expiration

### Key Pattern

- **Name**: `keyPattern`
- **Type**: `string`
- **Default**: `""`
- **Description**: The key pattern for the keys to return

### Get Values

- **Name**: `getValues`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to get the value of matching keys

### Key

- **Name**: `key`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the key to set in Redis

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: The value to write in Redis

### Key Type

- **Name**: `keyType`
- **Type**: `options`
- **Default**: `"automatic"`
- **Description**: Tries to figure out the type automatically depending on the data

### Value Is JSON

- **Name**: `valueIsJSON`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the value is JSON or key value pairs

### Expire

- **Name**: `expire`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to set a timeout on key

### TTL

- **Name**: `ttl`
- **Type**: `number`
- **Default**: `"60"`
- **Description**: Number of seconds before key expiration

### Channel

- **Name**: `channel`
- **Type**: `string`
- **Default**: `""`
- **Description**: Channel name

### Data

- **Name**: `messageData`
- **Type**: `string`
- **Default**: `""`
- **Description**: Data to publish

### List

- **Name**: `list`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the list in Redis

### Data

- **Name**: `messageData`
- **Type**: `string`
- **Default**: `""`
- **Description**: Data to push

### Tail

- **Name**: `tail`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to push or pop data from the end of the list

### Name

- **Name**: `propertyName`
- **Type**: `string`
- **Default**: `"propertyName"`
- **Description**: Optional name of the property to write received data to. Supports dot-notation. Example: "data.person[0].name".

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.
- **Placeholder**: Add option

**Options:**

#### Dot Notation
- **Name**: `dotNotation`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: <p>By default, dot-notation is used in property names. This means that "a.b" will set the property "b" underneath "a" so { "a": { "b": value} }.<p></p>If that is not intended this can be deactivated, it will then set { "a.b": value } instead.</p>.



## Node Information

- **Node Type**: `n8n-nodes-base.redis`
- **Display Name**: Redis
- **Internal Name**: `redis`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redis/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Redis/Redis.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
