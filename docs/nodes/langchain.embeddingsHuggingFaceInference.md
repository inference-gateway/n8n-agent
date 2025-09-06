# Embeddings Hugging Face Inference

## Description

Use HuggingFace Inference Embeddings

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Hugging Face Inference
    parameters:
      notice: ""
      modelName: "sentence-transformers/distilbert-base-nli-mean-tokens" # The model name to use from HuggingFace library
      options: # Additional options to add
        endpointUrl: "" # Custom endpoint URL
        provider: "auto"
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference
```

## Parameters

### Each model is using different dimensional density for embeddings. Please make sure to use the same dimensionality for your vector store. The default model is using 768-dimensional embeddings.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model Name

- **Name**: `modelName`
- **Type**: `string`
- **Default**: `"sentence-transformers/distilbert-base-nli-mean-tokens"`
- **Description**: The model name to use from HuggingFace library

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Custom Inference Endpoint
- **Name**: `endpointUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: Custom endpoint URL

#### Provider
- **Name**: `provider`
- **Type**: `options`
- **Default**: `"auto"`



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference`
- **Display Name**: Embeddings Hugging Face Inference
- **Internal Name**: `embeddingsHuggingFaceInference`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsHuggingFaceInference/EmbeddingsHuggingFaceInference.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
