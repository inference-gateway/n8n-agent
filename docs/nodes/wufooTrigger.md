# Wufoo Trigger

## Description

Handle Wufoo events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Wufoo Trigger
    parameters:
      form: "" # The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      onlyAnswers: true # Whether to return only the answers of the form and not any of the other data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.wufooTrigger
```

## Parameters

### Forms Name or ID

- **Name**: `form`
- **Type**: `options`
- **Default**: `""`
- **Description**: The form upon which will trigger this node when a new entry is made. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Only Answers

- **Name**: `onlyAnswers`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return only the answers of the form and not any of the other data


## Node Information

- **Node Type**: `n8n-nodes-base.wufooTrigger`
- **Display Name**: Wufoo Trigger
- **Internal Name**: `wufooTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wufootrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Wufoo/WufooTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
