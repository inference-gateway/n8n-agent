# Typeform Trigger

## Description

Starts the workflow on a Typeform form submission

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Typeform Trigger
    parameters:
      authentication: "accessToken"
      formId: "" # Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      simplifyAnswers: true # Whether to convert the answers to a key:value pair ("FIELD_TITLE":"USER_ANSER") to be easily processable
      onlyAnswers: true # Whether to return only the answers of the form and not any of the other data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.typeformTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Form Name or ID

- **Name**: `formId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Form which should trigger workflow on submission. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Simplify Answers

- **Name**: `simplifyAnswers`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to convert the answers to a key:value pair ("FIELD_TITLE":"USER_ANSER") to be easily processable

### Only Answers

- **Name**: `onlyAnswers`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return only the answers of the form and not any of the other data


## Node Information

- **Node Type**: `n8n-nodes-base.typeformTrigger`
- **Display Name**: Typeform Trigger
- **Internal Name**: `typeformTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.typeformtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Typeform/TypeformTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
