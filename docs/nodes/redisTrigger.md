# Redis Trigger

## Description

Subscribe to redis channel

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Redis Trigger
    parameters:
      channels: "" # Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported.
      options: # Whether to try to parse the message to an object
        jsonParseBody: false # Whether to try to parse the message to an object
        onlyMessage: false # Whether to return only the message property
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.redisTrigger
```

## Parameters

### Channels

- **Name**: `channels`
- **Type**: `string`
- **Default**: `""`
- **Description**: Channels to subscribe to, multiple channels be defined with comma. Wildcard character(*) is supported.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to try to parse the message to an object
- **Placeholder**: Add option

**Options:**

#### JSON Parse Body
- **Name**: `jsonParseBody`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to try to parse the message to an object

#### Only Message
- **Name**: `onlyMessage`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return only the message property



## Node Information

- **Node Type**: `n8n-nodes-base.redisTrigger`
- **Display Name**: Redis Trigger
- **Internal Name**: `redisTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redistrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Redis/RedisTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
