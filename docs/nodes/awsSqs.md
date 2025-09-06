# AWS SQS

## Description

Sends messages to AWS SQS

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS SQS
    parameters:
      operation: "sendMessage" # Send a message to a queue
      queue: "" # Queue to send a message to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      queueType: "standard" # FIFO SQS queue
      sendInputData: true # Whether to send the data the node receives as JSON to SQS
      message: "" # Message to send to the queue
      messageGroupId: "" # Tag that specifies that a message belongs to a specific message group. Applies only to FIFO (first-in-first-out) queues.
      options: {} # How long, in seconds, to delay a message for
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsSqs
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"sendMessage"`
- **Description**: Send a message to a queue

### Queue Name or ID

- **Name**: `queue`
- **Type**: `options`
- **Default**: `""`
- **Description**: Queue to send a message to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Queue Type

- **Name**: `queueType`
- **Type**: `options`
- **Default**: `"standard"`
- **Description**: FIFO SQS queue

### Send Input Data

- **Name**: `sendInputData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to send the data the node receives as JSON to SQS

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: Message to send to the queue

### Message Group ID

- **Name**: `messageGroupId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Tag that specifies that a message belongs to a specific message group. Applies only to FIFO (first-in-first-out) queues.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: How long, in seconds, to delay a message for
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.awsSqs`
- **Display Name**: AWS SQS
- **Internal Name**: `awsSqs`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awssqs/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/SQS/AwsSqs.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
