# Zep Vector Store: Insert

## Description

Insert data into Zep Vector Store index

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Zep Vector Store: Insert
    parameters:
      deprecationNotice: ""
      collectionName: ""
      notice: ""
      options: # Whether to allow using characters from the Unicode surrogate blocks
        embeddingDimensions: "1536" # Whether to allow using characters from the Unicode surrogate blocks
        isAutoEmbedded: true # Whether to automatically embed documents when they are added
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.vectorStoreZepInsert
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

### Specify the document to load in the document loader sub-node

- **Name**: `notice`
- **Type**: `notice`
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

#### Is Auto Embedded
- **Name**: `isAutoEmbedded`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to automatically embed documents when they are added



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.vectorStoreZepInsert`
- **Display Name**: Zep Vector Store: Insert
- **Internal Name**: `vectorStoreZepInsert`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezepinsert/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepInsert/VectorStoreZepInsert.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
