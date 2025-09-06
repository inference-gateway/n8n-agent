# In Memory Vector Store Load

## Description

Load embedded data from an in-memory vector store

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: In Memory Vector Store Load
    parameters:
      memoryKey: "vector_store_key" # The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad
```

## Parameters

### Memory Key

- **Name**: `memoryKey`
- **Type**: `string`
- **Default**: `"vector_store_key"`
- **Description**: The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreInMemoryLoad`
- **Display Name**: In Memory Vector Store Load
- **Internal Name**: `vectorStoreInMemoryLoad`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemoryload/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemoryLoad/VectorStoreInMemoryLoad.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
