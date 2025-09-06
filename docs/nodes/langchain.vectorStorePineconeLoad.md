# Pinecone: Load

## Description

Load data from Pinecone Vector Store index

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pinecone: Load
    parameters:
      pineconeNamespace: ""
      options: {}
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStorePineconeLoad
```

## Parameters

### Pinecone Namespace

- **Name**: `pineconeNamespace`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStorePineconeLoad`
- **Display Name**: Pinecone: Load
- **Internal Name**: `vectorStorePineconeLoad`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepineconeload/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStorePineconeLoad/VectorStorePineconeLoad.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
