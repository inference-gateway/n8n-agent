# QuestDB

## Description

Get, add and update data in QuestDB

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: QuestDB
    parameters:
      operation: "insert" # Executes a SQL query
      query: "" # The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
      schema: "" # Name of the schema the table belongs to
      table: "" # Name of the table in which to insert data to
      columns: "" # Comma-separated list of the properties which should used as columns for the new rows
      returnFields: "*" # Comma-separated list of the fields that the operation will return
      additionalFields: {} # Execute each query independently
      additionalFields: {}
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.questDb
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"insert"`
- **Description**: Executes a SQL query

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
- **Placeholder**: SELECT id, name FROM product WHERE quantity > $1 AND price <= $2

### Schema

- **Name**: `schema`
- **Type**: `hidden`
- **Default**: `""`
- **Description**: Name of the schema the table belongs to

### Table

- **Name**: `table`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the table in which to insert data to

### Columns

- **Name**: `columns`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comma-separated list of the properties which should used as columns for the new rows
- **Placeholder**: id,name,description

### Return Fields

- **Name**: `returnFields`
- **Type**: `string`
- **Default**: `"*"`
- **Description**: Comma-separated list of the fields that the operation will return

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Execute each query independently
- **Placeholder**: Add Field

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `hidden`
- **Default**: `"{}"`


## Node Information

- **Node Type**: `n8n-nodes-base.questDb`
- **Display Name**: QuestDB
- **Internal Name**: `questDb`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.questdb/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/QuestDb/QuestDb.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
