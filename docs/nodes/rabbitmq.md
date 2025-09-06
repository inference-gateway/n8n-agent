# RabbitMQ

## Description

Sends messages to a RabbitMQ topic

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: RabbitMQ
    parameters:
      operation: "sendMessage"
      operation: "sendMessage"
      deleteMessage: ""
      mode: "queue" # Publish data to queue
      queue: "" # Name of the queue to publish to
      exchange: "" # Name of the exchange to publish to
      exchangeType: "fanout" # Direct exchange type
      routingKey: "" # The routing key for the message
      sendInputData: true # Whether to send the data the node receives as JSON
      message: "" # The message to be sent
      options: {} # An exchange to send messages to if this exchange can’t route them to any queues
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.rabbitmq
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `hidden`
- **Default**: `"sendMessage"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"sendMessage"`

### Will delete an item from the queue triggered earlier in the workflow by a RabbitMQ Trigger node

- **Name**: `deleteMessage`
- **Type**: `notice`
- **Default**: `""`

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"queue"`
- **Description**: Publish data to queue

### Queue / Topic

- **Name**: `queue`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the queue to publish to
- **Placeholder**: queue-name

### Exchange

- **Name**: `exchange`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the exchange to publish to
- **Placeholder**: exchange-name

### Type

- **Name**: `exchangeType`
- **Type**: `options`
- **Default**: `"fanout"`
- **Description**: Direct exchange type

### Routing Key

- **Name**: `routingKey`
- **Type**: `string`
- **Default**: `""`
- **Description**: The routing key for the message
- **Placeholder**: routing-key

### Send Input Data

- **Name**: `sendInputData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to send the data the node receives as JSON

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to be sent

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: An exchange to send messages to if this exchange can’t route them to any queues
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.rabbitmq`
- **Display Name**: RabbitMQ
- **Internal Name**: `rabbitmq`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/RabbitMQ/RabbitMQ.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
