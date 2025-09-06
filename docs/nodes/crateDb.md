# CrateDB

## Description

Add and update data in CrateDB

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: CrateDB
    parameters:
      operation: "insert" # Execute an SQL query
      query: "" # The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
      schema: "doc" # Name of the schema the table belongs to
      table: "" # Name of the table in which to insert data to
      columns: "" # Comma-separated list of the properties which should used as columns for the new rows
      schema: "doc" # Name of the schema the table belongs to
      table: "" # Name of the table in which to update data in
      updateKey: "id" # Comma-separated list of the properties which decides which rows in the database should be updated. Normally that would be "id".
      columns: "" # Comma-separated list of the properties which should used as columns for rows to update
      returnFields: "*" # Comma-separated list of the fields that the operation will return
      additionalFields: {} # Execute each query independently
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.crateDb
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
- **Description**: The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
- **Placeholder**: SELECT id, name FROM product WHERE quantity > $1 AND price <= $2

### Schema

- **Name**: `schema`
- **Type**: `string`
- **Default**: `"doc"`
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

### Schema

- **Name**: `schema`
- **Type**: `string`
- **Default**: `"doc"`
- **Description**: Name of the schema the table belongs to

### Table

- **Name**: `table`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the table in which to update data in

### Update Key

- **Name**: `updateKey`
- **Type**: `string`
- **Default**: `"id"`
- **Description**: Comma-separated list of the properties which decides which rows in the database should be updated. Normally that would be "id".

### Columns

- **Name**: `columns`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comma-separated list of the properties which should used as columns for rows to update
- **Placeholder**: name,description

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


## Node Information

- **Node Type**: `n8n-nodes-base.crateDb`
- **Display Name**: CrateDB
- **Internal Name**: `crateDb`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cratedb/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CrateDb/CrateDb.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
