# Supabase: Insert

## Description

Insert data into Supabase Vector Store index [https://supabase.com/docs/guides/ai/langchain]

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Supabase: Insert
    parameters:
      setupNotice: ""
      queryName: "match_documents" # Name of the query to use for matching documents
      notice: ""
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert
```

## Parameters

### Please refer to the <a href="https://supabase.com/docs/guides/ai/langchain" target="_blank">Supabase documentation</a> for more information on how to setup your database as a Vector Store.

- **Name**: `setupNotice`
- **Type**: `notice`
- **Default**: `""`

### Query Name

- **Name**: `queryName`
- **Type**: `string`
- **Default**: `"match_documents"`
- **Description**: Name of the query to use for matching documents

### Specify the document to load in the document loader sub-node

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert`
- **Display Name**: Supabase: Insert
- **Internal Name**: `vectorStoreSupabaseInsert`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabaseinsert/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseInsert/VectorStoreSupabaseInsert.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
