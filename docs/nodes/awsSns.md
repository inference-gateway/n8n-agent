# AWS SNS

## Description

Sends data to AWS SNS

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS SNS
    parameters:
      operation: "publish" # Create a topic
      name: ""
      options: # The display name to use for a topic with SMS subscriptions
        displayName: "" # The display name to use for a topic with SMS subscriptions
        fifoTopic: false # Whether the topic you want to create is a FIFO (first-in-first-out) topic
      topic: "{ mode: 'list', value: '' }"
      subject: "" # Subject when the message is delivered to email endpoints
      message: "" # The message you want to send
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsSns
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"publish"`
- **Description**: Create a topic

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The display name to use for a topic with SMS subscriptions
- **Placeholder**: Add option

**Options:**

#### Display Name
- **Name**: `displayName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The display name to use for a topic with SMS subscriptions

#### Fifo Topic
- **Name**: `fifoTopic`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the topic you want to create is a FIFO (first-in-first-out) topic


### Topic

- **Name**: `topic`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select a topic...

### Subject

- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`
- **Description**: Subject when the message is delivered to email endpoints

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message you want to send


## Node Information

- **Node Type**: `n8n-nodes-base.awsSns`
- **Display Name**: AWS SNS
- **Internal Name**: `awsSns`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awssns/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/AwsSns.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
