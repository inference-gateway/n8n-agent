# Zendesk Trigger

## Description

Handle Zendesk events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Zendesk Trigger
    parameters:
      authentication: "apiToken"
      service: "support"
      options: {} # The fields to return the values of. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      conditions: {} # The condition to set
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.zendeskTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Service

- **Name**: `service`
- **Type**: `options`
- **Default**: `"support"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The fields to return the values of. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add option

### Conditions

- **Name**: `conditions`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The condition to set
- **Placeholder**: Add Condition


## Node Information

- **Node Type**: `n8n-nodes-base.zendeskTrigger`
- **Display Name**: Zendesk Trigger
- **Internal Name**: `zendeskTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesktrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Zendesk/ZendeskTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
