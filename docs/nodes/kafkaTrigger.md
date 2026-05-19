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
      resolveOffset: "onCompletion" # Select on which condition the offsets should be resolved. In the manual mode, when execution started by clicking on Execute Workflow or Execute Step button, offsets are always resolved immediately after message received.
      allowedStatuses: "['success']"
      useSchemaRegistry: false # Whether to use Confluent Schema Registry
      schemaRegistryUrl: "" # URL of the schema registry
      options: # Whether to allow sending message to a previously non-existing topic
        allowAutoTopicCreation: false # Whether to allow sending message to a previously non-existing topic
        autoCommitThreshold: "0" # The consumer will commit offsets after resolving a given number of messages
        autoCommitInterval: "0" # The consumer will commit offsets after a given period, for example, five seconds
        batchSize: "1" # Number of messages to process in each batch, when set to 1, message-by-message processing is enabled
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

### Resolve Offset

- **Name**: `resolveOffset`
- **Type**: `options`
- **Default**: `"onCompletion"`
- **Description**: Select on which condition the offsets should be resolved. In the manual mode, when execution started by clicking on Execute Workflow or Execute Step button, offsets are always resolved immediately after message received.

### Allowed Statuses

- **Name**: `allowedStatuses`
- **Type**: `multiOptions`
- **Default**: `"['success']"`

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
- **Description**: Whether to allow sending message to a previously non-existing topic
- **Placeholder**: Add option

**Options:**

#### Allow Topic Creation
- **Name**: `allowAutoTopicCreation`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to allow sending message to a previously non-existing topic

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

#### Batch Size
- **Name**: `batchSize`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Number of messages to process in each batch, when set to 1, message-by-message processing is enabled



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
