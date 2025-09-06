# Kafka Trigger

## Description

Consume messages from a Kafka topic

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Kafka Trigger
    parameters:
      topic: "" # Name of the queue of topic to consume from
      groupId: "" # ID of the consumer group
      useSchemaRegistry: false # Whether to use Confluent Schema Registry
      schemaRegistryUrl: "" # URL of the schema registry
      options: # Whether to allow sending message to a previously non exisiting topic
        allowAutoTopicCreation: false # Whether to allow sending message to a previously non exisiting topic
        autoCommitThreshold: "0" # The consumer will commit offsets after resolving a given number of messages
        autoCommitInterval: "0" # The consumer will commit offsets after a given period, for example, five seconds
        heartbeatInterval: "3000" # Heartbeats are used to ensure that the consumer's session stays active
        maxInFlightRequests: "1" # The maximum number of unacknowledged requests the client will send on a single connection
        fromBeginning: true # Whether to read message from beginning
        jsonParseMessage: false # Whether to try to parse the message to an object
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.kafkaTrigger
```

## Parameters

### Topic

- **Name**: `topic`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the queue of topic to consume from
- **Placeholder**: topic-name

### Group ID

- **Name**: `groupId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the consumer group
- **Placeholder**: n8n-kafka

### Use Schema Registry

- **Name**: `useSchemaRegistry`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use Confluent Schema Registry

### Schema Registry URL

- **Name**: `schemaRegistryUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL of the schema registry
- **Placeholder**: https://schema-registry-domain:8081

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to allow sending message to a previously non exisiting topic
- **Placeholder**: Add option

**Options:**

#### Allow Topic Creation
- **Name**: `allowAutoTopicCreation`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to allow sending message to a previously non exisiting topic

#### Auto Commit Threshold
- **Name**: `autoCommitThreshold`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The consumer will commit offsets after resolving a given number of messages

#### Auto Commit Interval
- **Name**: `autoCommitInterval`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The consumer will commit offsets after a given period, for example, five seconds

#### Heartbeat Interval
- **Name**: `heartbeatInterval`
- **Type**: `number`
- **Default**: `"3000"`
- **Description**: Heartbeats are used to ensure that the consumer's session stays active

#### Max Number of Requests
- **Name**: `maxInFlightRequests`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: The maximum number of unacknowledged requests the client will send on a single connection

#### Read Messages From Beginning
- **Name**: `fromBeginning`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to read message from beginning

#### JSON Parse Message
- **Name**: `jsonParseMessage`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to try to parse the message to an object



## Node Information

- **Node Type**: `n8n-nodes-base.kafkaTrigger`
- **Display Name**: Kafka Trigger
- **Internal Name**: `kafkaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kafkatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Kafka/KafkaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
