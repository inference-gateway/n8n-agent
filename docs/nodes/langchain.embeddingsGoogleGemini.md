# Embeddings Google Gemini

## Description

Use Google Gemini Embeddings

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Google Gemini
    parameters:
      notice: ""
      modelName: "models/text-embedding-004" # The model which will generate the embeddings. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
```

## Parameters

### Each model is using different dimensional density for embeddings. Please make sure to use the same dimensionality for your vector store. The default model is using 768-dimensional embeddings.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `modelName`
- **Type**: `options`
- **Default**: `"models/text-embedding-004"`
- **Description**: The model which will generate the embeddings. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsGoogleGemini`
- **Display Name**: Embeddings Google Gemini
- **Internal Name**: `embeddingsGoogleGemini`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsgooglegemini/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsGoogleGemini/EmbeddingsGoogleGemini.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
