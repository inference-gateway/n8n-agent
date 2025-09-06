# AMQP Sender

## Description

Sends a raw-message via AMQP 1.0, executed once per item

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AMQP Sender
    parameters:
      sink: "" # Name of the queue of topic to publish to
      headerParametersJson: "" # Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info.
      options: # Will be used to pass to the RHEA Backend as container_id
        containerId: "" # Will be used to pass to the RHEA Backend as container_id
        dataAsObject: false # Whether to send the data as an object
        reconnect: true # Whether to automatically reconnect if disconnected
        reconnectLimit: "50" # Maximum number of reconnect attempts
        sendOnlyProperty: "" # The only property to send. If empty the whole item will be sent.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.amqp
```

## Parameters

### Queue / Topic

- **Name**: `sink`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the queue of topic to publish to
- **Placeholder**: e.g. topic://sourcename.something

### Headers

- **Name**: `headerParametersJson`
- **Type**: `json`
- **Default**: `""`
- **Description**: Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Will be used to pass to the RHEA Backend as container_id
- **Placeholder**: Add option

**Options:**

#### Container ID
- **Name**: `containerId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Will be used to pass to the RHEA Backend as container_id

#### Data as Object
- **Name**: `dataAsObject`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to send the data as an object

#### Reconnect
- **Name**: `reconnect`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to automatically reconnect if disconnected

#### Reconnect Limit
- **Name**: `reconnectLimit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Maximum number of reconnect attempts

#### Send Property
- **Name**: `sendOnlyProperty`
- **Type**: `string`
- **Default**: `""`
- **Description**: The only property to send. If empty the whole item will be sent.



## Node Information

- **Node Type**: `n8n-nodes-base.amqp`
- **Display Name**: AMQP Sender
- **Internal Name**: `amqp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.amqp/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Amqp/Amqp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
