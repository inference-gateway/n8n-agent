# Embeddings Cohere

## Description

Use Cohere Embeddings

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Cohere
    parameters:
      notice: ""
      modelName: "embed-english-v2.0" # The model which will generate the embeddings. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsCohere
```

## Parameters

### Each model is using different dimensional density for embeddings. Please make sure to use the same dimensionality for your vector store. The default model is using 768-dimensional embeddings.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `modelName`
- **Type**: `options`
- **Default**: `"embed-english-v2.0"`
- **Description**: The model which will generate the embeddings. <a href="https://docs.cohere.com/docs/models">Learn more</a>.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsCohere`
- **Display Name**: Embeddings Cohere
- **Internal Name**: `embeddingsCohere`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingscohere/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsCohere/EmbeddingsCohere.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
