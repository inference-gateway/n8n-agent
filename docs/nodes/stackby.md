# Stackby

## Description

Read, write, and delete data in Stackby

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Stackby
    parameters:
      operation: "append"
      stackId: "" # The ID of the stack to access
      table: "" # Enter Table Name
      id: "" # ID of the record to return
      returnAll: true # Whether to return all results or only up to a given limit
      limit: "1000" # Max number of results to return
      additionalFields: # The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view.
        view: "" # The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view.
      columns: "" # Comma-separated list of the properties which should used as columns for the new rows
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.stackby
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"append"`
- **Placeholder**: Action to perform

### Stack ID

- **Name**: `stackId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the stack to access

### Table

- **Name**: `table`
- **Type**: `string`
- **Default**: `""`
- **Description**: Enter Table Name
- **Placeholder**: Stories

### ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the record to return

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"1000"`
- **Description**: Max number of results to return

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view.
- **Placeholder**: Add Field

**Options:**

#### View
- **Name**: `view`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view.


### Columns

- **Name**: `columns`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comma-separated list of the properties which should used as columns for the new rows
- **Placeholder**: id,name,description


## Node Information

- **Node Type**: `n8n-nodes-base.stackby`
- **Display Name**: Stackby
- **Internal Name**: `stackby`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stackby/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Stackby/Stackby.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
