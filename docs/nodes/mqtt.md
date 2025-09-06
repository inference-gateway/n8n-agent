# MQTT

## Description

Push messages to MQTT

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MQTT
    parameters:
      topic: "" # The topic to publish to
      sendInputData: true # Whether to send the data the node receives as JSON
      message: "" # The message to publish
      options: {} # QoS subscription level
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mqtt
```

## Parameters

### Topic

- **Name**: `topic`
- **Type**: `string`
- **Default**: `""`
- **Description**: The topic to publish to

### Send Input Data

- **Name**: `sendInputData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to send the data the node receives as JSON

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to publish

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: QoS subscription level
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.mqtt`
- **Display Name**: MQTT
- **Internal Name**: `mqtt`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mqtt/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MQTT/Mqtt.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
