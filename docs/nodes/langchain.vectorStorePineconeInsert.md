# Pinecone: Insert

## Description

Insert data into Pinecone Vector Store index

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pinecone: Insert
    parameters:
      pineconeNamespace: ""
      notice: ""
      clearNamespace: false # Whether to clear the namespace before inserting new data
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStorePineconeInsert
```

## Parameters

### Pinecone Namespace

- **Name**: `pineconeNamespace`
- **Type**: `string`
- **Default**: `""`

### Specify the document to load in the document loader sub-node

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Clear Namespace

- **Name**: `clearNamespace`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to clear the namespace before inserting new data


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStorePineconeInsert`
- **Display Name**: Pinecone: Insert
- **Internal Name**: `vectorStorePineconeInsert`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepineconeinsert/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStorePineconeInsert/VectorStorePineconeInsert.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
