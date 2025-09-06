# Snowflake

## Description

Get, add and update data in Snowflake

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Snowflake
    parameters:
      operation: "insert" # Execute an SQL query
      query: "" # The SQL query to execute
      table: "" # Name of the table in which to insert data to
      columns: "" # Comma-separated list of the properties which should used as columns for the new rows
      table: "" # Name of the table in which to update data in
      updateKey: "id" # Name of the property which decides which rows in the database should be updated. Normally that would be "id".
      columns: "" # Comma-separated list of the properties which should used as columns for rows to update
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.snowflake
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"insert"`
- **Description**: Execute an SQL query

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The SQL query to execute
- **Placeholder**: SELECT id, name FROM product WHERE id < 40

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

### Table

- **Name**: `table`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the table in which to update data in

### Update Key

- **Name**: `updateKey`
- **Type**: `string`
- **Default**: `"id"`
- **Description**: Name of the property which decides which rows in the database should be updated. Normally that would be "id".

### Columns

- **Name**: `columns`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comma-separated list of the properties which should used as columns for rows to update
- **Placeholder**: name,description


## Node Information

- **Node Type**: `n8n-nodes-base.snowflake`
- **Display Name**: Snowflake
- **Internal Name**: `snowflake`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.snowflake/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Snowflake/Snowflake.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
