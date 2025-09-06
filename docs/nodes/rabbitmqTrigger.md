# RabbitMQ Trigger

## Description

Listens to RabbitMQ messages

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: RabbitMQ Trigger
    parameters:
      queue: "" # The name of the queue to read from
      options: # Whether to save the content as binary
        contentIsBinary: false # Whether to save the content as binary
      laterMessageNode: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.rabbitmqTrigger
```

## Parameters

### Queue / Topic

- **Name**: `queue`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the queue to read from
- **Placeholder**: queue-name

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to save the content as binary
- **Placeholder**: Add option

**Options:**

#### Content Is Binary
- **Name**: `contentIsBinary`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to save the content as binary


### To delete an item from the queue, insert a RabbitMQ node later in the workflow and use the 'Delete from queue' operation

- **Name**: `laterMessageNode`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.rabbitmqTrigger`
- **Display Name**: RabbitMQ Trigger
- **Internal Name**: `rabbitmqTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rabbitmqtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/RabbitMQ/RabbitMQTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
