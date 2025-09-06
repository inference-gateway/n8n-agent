# MQTT Trigger

## Description

Listens to MQTT events

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MQTT Trigger
    parameters:
      topics: "" # Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2
      options: # Whether to try parse the message to an object
        jsonParseBody: false # Whether to try parse the message to an object
        onlyMessage: false # Whether to return only the message property
        parallelProcessing: true # Whether to process messages in parallel or by keeping the message in order
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mqttTrigger
```

## Parameters

### Topics

- **Name**: `topics`
- **Type**: `string`
- **Default**: `""`
- **Description**: Topics to subscribe to, multiple can be defined with comma. Wildcard characters are supported (+ - for single level and # - for multi level). By default all subscription used QoS=0. To set a different QoS, write the QoS desired after the topic preceded by a colom. For Example: topicA:1,topicB:2

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to try parse the message to an object
- **Placeholder**: Add option

**Options:**

#### JSON Parse Body
- **Name**: `jsonParseBody`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to try parse the message to an object

#### Only Message
- **Name**: `onlyMessage`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return only the message property

#### Parallel Processing
- **Name**: `parallelProcessing`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to process messages in parallel or by keeping the message in order



## Node Information

- **Node Type**: `n8n-nodes-base.mqttTrigger`
- **Display Name**: MQTT Trigger
- **Internal Name**: `mqttTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mqtttrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MQTT/MqttTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
