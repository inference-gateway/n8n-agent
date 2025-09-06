# JotForm Trigger

## Description

Handle JotForm events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: JotForm Trigger
    parameters:
      form: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      resolveData: true # By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names.
      onlyAnswers: true # Whether to return only the answers of the form and not any of the other data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jotFormTrigger
```

## Parameters

### Form Name or ID

- **Name**: `form`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default does the webhook-data use internal keys instead of the names. If this option gets activated, it will resolve the keys automatically to the actual names.

### Only Answers

- **Name**: `onlyAnswers`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return only the answers of the form and not any of the other data


## Node Information

- **Node Type**: `n8n-nodes-base.jotFormTrigger`
- **Display Name**: JotForm Trigger
- **Internal Name**: `jotFormTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jotformtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/JotForm/JotFormTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
