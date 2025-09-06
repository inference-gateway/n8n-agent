# Embeddings Mistral Cloud

## Description

Use Embeddings Mistral Cloud

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Mistral Cloud
    parameters:
      model: "mistral-embed" # The model which will compute the embeddings. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.
      options: # Additional options to add
        batchSize: "512" # Maximum number of documents to send in each request
        stripNewLines: true # Whether to strip new lines from the input text
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsMistralCloud
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"mistral-embed"`
- **Description**: The model which will compute the embeddings. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Batch Size
- **Name**: `batchSize`
- **Type**: `number`
- **Default**: `"512"`
- **Description**: Maximum number of documents to send in each request

#### Strip New Lines
- **Name**: `stripNewLines`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to strip new lines from the input text



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsMistralCloud`
- **Display Name**: Embeddings Mistral Cloud
- **Internal Name**: `embeddingsMistralCloud`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsmistralcloud/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsMistralCloud/EmbeddingsMistralCloud.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
