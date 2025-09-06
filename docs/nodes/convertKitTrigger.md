# ConvertKit Trigger

## Description

Handle ConvertKit events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: ConvertKit Trigger
    parameters:
      event: "" # The events that can trigger the webhook and whether they are enabled
      formId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      courseId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      link: "" # The URL of the initiating link
      productId: ""
      tagId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.convertKitTrigger
```

## Parameters

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: The events that can trigger the webhook and whether they are enabled

### Form Name or ID

- **Name**: `formId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Sequence Name or ID

- **Name**: `courseId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Initiating Link

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL of the initiating link

### Product ID

- **Name**: `productId`
- **Type**: `string`
- **Default**: `""`

### Tag Name or ID

- **Name**: `tagId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>


## Node Information

- **Node Type**: `n8n-nodes-base.convertKitTrigger`
- **Display Name**: ConvertKit Trigger
- **Internal Name**: `convertKitTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.convertkittrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ConvertKit/ConvertKitTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
