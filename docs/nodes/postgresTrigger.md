# Postgres Trigger

## Description

Listens to Postgres messages

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Postgres Trigger
    parameters:
      triggerMode: "createTrigger" # Insert, update or delete
      schema: "{ mode: 'list', value: 'public' }"
      tableName: "{ mode: 'list', value: '' }"
      channelName: "" # Name of the channel to listen to
      firesOn: "INSERT"
      additionalFields: # Name of the channel to listen to
        channelName: "" # Name of the channel to listen to
        functionName: "" # Name of the function to create
        replaceIfExists: false # Whether to replace an existing function and trigger with the same name
        triggerName: "" # Name of the trigger to create
      options: # Number of seconds reserved for connecting to the database
        connectionTimeout: "30" # Number of seconds reserved for connecting to the database
        delayClosingIdleConnection: "0" # Number of seconds to wait before idle connection would be eligible for closing
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.postgresTrigger
```

## Parameters

### Listen For

- **Name**: `triggerMode`
- **Type**: `options`
- **Default**: `"createTrigger"`
- **Description**: Insert, update or delete

### Schema Name

- **Name**: `schema`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: 'public' }"`
- **Placeholder**: Select a schema

### Table Name

- **Name**: `tableName`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select a table

### Channel Name

- **Name**: `channelName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the channel to listen to
- **Placeholder**: e.g. n8n_channel

### Event to listen for

- **Name**: `firesOn`
- **Type**: `options`
- **Default**: `"INSERT"`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Name of the channel to listen to
- **Placeholder**: Add Field

**Options:**

#### Channel Name
- **Name**: `channelName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the channel to listen to

#### Function Name
- **Name**: `functionName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the function to create

#### Replace if Exists
- **Name**: `replaceIfExists`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to replace an existing function and trigger with the same name

#### Trigger Name
- **Name**: `triggerName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the trigger to create


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Number of seconds reserved for connecting to the database
- **Placeholder**: Add option

**Options:**

#### Connection Timeout
- **Name**: `connectionTimeout`
- **Type**: `number`
- **Default**: `"30"`
- **Description**: Number of seconds reserved for connecting to the database

#### Delay Closing Idle Connection
- **Name**: `delayClosingIdleConnection`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Number of seconds to wait before idle connection would be eligible for closing



## Node Information

- **Node Type**: `n8n-nodes-base.postgresTrigger`
- **Display Name**: Postgres Trigger
- **Internal Name**: `postgresTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.postgrestrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Postgres/PostgresTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
