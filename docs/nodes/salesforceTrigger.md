# Salesforce Trigger

## Description

Fetches data from Salesforce and starts the workflow on specified polling intervals.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Salesforce Trigger
    parameters:
      triggerOn: "" # Which Salesforce event should trigger the node
      customObject: "" # Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.salesforceTrigger
```

## Parameters

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`
- **Description**: Which Salesforce event should trigger the node

### Custom Object Name or ID

- **Name**: `customObject`
- **Type**: `options`
- **Default**: `""`
- **Description**: Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


## Node Information

- **Node Type**: `n8n-nodes-base.salesforceTrigger`
- **Display Name**: Salesforce Trigger
- **Internal Name**: `salesforceTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.salesforcetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Salesforce/SalesforceTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
