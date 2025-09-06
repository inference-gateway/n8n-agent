# Zep Vector Store: Load

## Description

Load data from Zep Vector Store index

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Zep Vector Store: Load
    parameters:
      deprecationNotice: ""
      collectionName: ""
      options: # Whether to allow using characters from the Unicode surrogate blocks
        embeddingDimensions: "1536" # Whether to allow using characters from the Unicode surrogate blocks
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreZepLoad
```

## Parameters

### This Zep integration is deprecated and will be removed in a future version.

- **Name**: `deprecationNotice`
- **Type**: `notice`
- **Default**: `""`

### Collection Name

- **Name**: `collectionName`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to allow using characters from the Unicode surrogate blocks
- **Placeholder**: Add Option

**Options:**

#### Embedding Dimensions
- **Name**: `embeddingDimensions`
- **Type**: `number`
- **Default**: `"1536"`
- **Description**: Whether to allow using characters from the Unicode surrogate blocks



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreZepLoad`
- **Display Name**: Zep Vector Store: Load
- **Internal Name**: `vectorStoreZepLoad`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezepload/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepLoad/VectorStoreZepLoad.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
