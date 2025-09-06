# Supabase

## Description

Add, get, delete and update data in a table

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Supabase
    parameters:
      useCustomSchema: false # Whether to use a database schema different from the default "public" schema (requires schema exposure in the <a href="https://supabase.com/docs/guides/api/using-custom-schemas?queryGroups=language&language=curl#exposing-custom-schemas">Supabase API</a>)
      schema: "public" # Name of database schema to use for table
      resource: "row"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.supabase
```

## Parameters

### Use Custom Schema

- **Name**: `useCustomSchema`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use a database schema different from the default "public" schema (requires schema exposure in the <a href="https://supabase.com/docs/guides/api/using-custom-schemas?queryGroups=language&language=curl#exposing-custom-schemas">Supabase API</a>)

### Schema

- **Name**: `schema`
- **Type**: `string`
- **Default**: `"public"`
- **Description**: Name of database schema to use for table

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"row"`


## Node Information

- **Node Type**: `n8n-nodes-base.supabase`
- **Display Name**: Supabase
- **Internal Name**: `supabase`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Supabase/Supabase.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
