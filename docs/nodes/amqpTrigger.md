# AMQP Trigger

## Description

Listens to AMQP 1.0 Messages

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AMQP Trigger
    parameters:
      sink: "" # Name of the queue of topic to listen to
      clientname: "" # Leave empty for non-durable topic subscriptions or queues
      subscription: "" # Leave empty for non-durable topic subscriptions or queues
      options: # Will be used to pass to the RHEA Backend as container_id
        containerId: "" # Will be used to pass to the RHEA Backend as container_id
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.amqpTrigger
```

## Parameters

### Queue / Topic

- **Name**: `sink`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the queue of topic to listen to
- **Placeholder**: topic://sourcename.something

### Clientname

- **Name**: `clientname`
- **Type**: `string`
- **Default**: `""`
- **Description**: Leave empty for non-durable topic subscriptions or queues
- **Placeholder**: e.g. n8n

### Subscription

- **Name**: `subscription`
- **Type**: `string`
- **Default**: `""`
- **Description**: Leave empty for non-durable topic subscriptions or queues
- **Placeholder**: e.g. order-worker

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



## Node Information

- **Node Type**: `n8n-nodes-base.amqpTrigger`
- **Display Name**: AMQP Trigger
- **Internal Name**: `amqpTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.amqptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Amqp/AmqpTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
