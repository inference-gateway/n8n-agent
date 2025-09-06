# Supabase: Load

## Description

Load data from Supabase Vector Store index

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Supabase: Load
    parameters:
      queryName: "match_documents" # Name of the query to use for matching documents
      options: {}
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad
```

## Parameters

### Query Name

- **Name**: `queryName`
- **Type**: `string`
- **Default**: `"match_documents"`
- **Description**: Name of the query to use for matching documents

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad`
- **Display Name**: Supabase: Load
- **Internal Name**: `vectorStoreSupabaseLoad`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabaseload/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseLoad/VectorStoreSupabaseLoad.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
