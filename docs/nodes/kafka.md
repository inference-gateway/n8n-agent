# Kafka

## Description

Sends messages to a Kafka topic

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Kafka
    parameters:
      topic: "" # Name of the queue of topic to publish to
      sendInputData: true # Whether to send the data the node receives as JSON to Kafka
      message: "" # The message to be sent
      jsonParameters: false
      useSchemaRegistry: false # Whether to use Confluent Schema Registry
      schemaRegistryUrl: "" # URL of the schema registry
      useKey: false # Whether to use a message key
      key: "" # The message key
      eventName: "" # Namespace and Name of Schema in Schema Registry (namespace.name)
      headersUi: {}
      headerParametersJson: "" # Header parameters as JSON (flat object)
      options: # Whether or not producer must wait for acknowledgement from all replicas
        acks: false # Whether or not producer must wait for acknowledgement from all replicas
        compression: false # Whether to send the data in a compressed format using the GZIP codec
        timeout: "30000" # The time to await a response in ms
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.kafka
```

## Parameters

### Topic

- **Name**: `topic`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the queue of topic to publish to
- **Placeholder**: topic-name

### Send Input Data

- **Name**: `sendInputData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to send the data the node receives as JSON to Kafka

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to be sent

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

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

### Use Key

- **Name**: `useKey`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use a message key

### Key

- **Name**: `key`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message key

### Event Name

- **Name**: `eventName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Namespace and Name of Schema in Schema Registry (namespace.name)

### Headers

- **Name**: `headersUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Placeholder**: Add Header

### Headers (JSON)

- **Name**: `headerParametersJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Header parameters as JSON (flat object)

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether or not producer must wait for acknowledgement from all replicas
- **Placeholder**: Add option

**Options:**

#### Acks
- **Name**: `acks`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether or not producer must wait for acknowledgement from all replicas

#### Compression
- **Name**: `compression`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to send the data in a compressed format using the GZIP codec

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"30000"`
- **Description**: The time to await a response in ms



## Node Information

- **Node Type**: `n8n-nodes-base.kafka`
- **Display Name**: Kafka
- **Internal Name**: `kafka`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kafka/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Kafka/Kafka.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
