# Embeddings Google Vertex

## Description

Use Google Vertex Embeddings

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Google Vertex
    parameters:
      notice: ""
      projectId: "{ mode: 'list', value: '' }" # Select or enter your Google Cloud project ID
      modelName: "text-embedding-005" # The model which will generate the embeddings. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsGoogleVertex
```

## Parameters

### Each model is using different dimensional density for embeddings. Please make sure to use the same dimensionality for your vector store. The default model is using 768-dimensional embeddings. You can find available models <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api">here</a>.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Project ID

- **Name**: `projectId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: Select or enter your Google Cloud project ID

### Model Name

- **Name**: `modelName`
- **Type**: `string`
- **Default**: `"text-embedding-005"`
- **Description**: The model which will generate the embeddings. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api">Learn more</a>.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsGoogleVertex`
- **Display Name**: Embeddings Google Vertex
- **Internal Name**: `embeddingsGoogleVertex`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsgooglevertex/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsGoogleVertex/EmbeddingsGoogleVertex.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
