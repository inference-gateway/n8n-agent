# Workable Trigger

## Description

Starts the workflow when Workable events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Workable Trigger
    parameters:
      triggerOn: ""
      filters: # Get notifications only for one job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        job: "" # Get notifications only for one job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        stage: "" # Get notifications for specific stages. e.g. \'hired\'. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.workableTrigger
```

## Parameters

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Get notifications only for one job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Filter

**Options:**

#### Job Name or ID
- **Name**: `job`
- **Type**: `options`
- **Default**: `""`
- **Description**: Get notifications only for one job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Stage Name or ID
- **Name**: `stage`
- **Type**: `options`
- **Default**: `""`
- **Description**: Get notifications for specific stages. e.g. \'hired\'. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.



## Node Information

- **Node Type**: `n8n-nodes-base.workableTrigger`
- **Display Name**: Workable Trigger
- **Internal Name**: `workableTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.workabletrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Workable/WorkableTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
