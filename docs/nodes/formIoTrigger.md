# Form.io Trigger

## Description

Handle form.io events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Form.io Trigger
    parameters:
      projectId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      formId: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      events: []
      simple: true # Whether to return a simplified version of the response instead of the raw data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.formIoTrigger
```

## Parameters

### Project Name or ID

- **Name**: `projectId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Form Name or ID

- **Name**: `formId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Trigger Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data


## Node Information

- **Node Type**: `n8n-nodes-base.formIoTrigger`
- **Display Name**: Form.io Trigger
- **Internal Name**: `formIoTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.formiotrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/FormIo/FormIoTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
