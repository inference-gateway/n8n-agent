# In Memory Vector Store Insert

## Description

Insert data into an in-memory vector store

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: In Memory Vector Store Insert
    parameters:
      notice: ""
      clearStore: false # Whether to clear the store before inserting new data
      memoryKey: "vector_store_key" # The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert
```

## Parameters

### The embbded data are stored in the server memory, so they will be lost when the server is restarted. Additionally, if the amount of data is too large, it may cause the server to crash due to insufficient memory.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Clear Store

- **Name**: `clearStore`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to clear the store before inserting new data

### Memory Key

- **Name**: `memoryKey`
- **Type**: `string`
- **Default**: `"vector_store_key"`
- **Description**: The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert`
- **Display Name**: In Memory Vector Store Insert
- **Internal Name**: `vectorStoreInMemoryInsert`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemoryinsert/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemoryInsert/VectorStoreInMemoryInsert.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
