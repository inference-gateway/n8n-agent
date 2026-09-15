# NVIDIA Nemotron Embeddings

## Description

Use NVIDIA NeMo Retriever embedding models from build.nvidia.com or a self-hosted NIM

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: NVIDIA Nemotron Embeddings
    parameters:
      model: "{ mode: 'list', value: DEFAULT_NVIDIA_EMBEDDING_MODEL }" # The NeMo Retriever embedding model. Choose from the list, or specify an ID for a self-hosted NIM. input_type is set automatically (passage when indexing, query when searching). <a href="https://build.nvidia.com/models">Learn more</a>.
      options: # Additional options to add
        batchSize: "512" # Maximum number of documents to send in each request
        stripNewLines: true # Whether to strip new lines from the input text
        dimensions: "undefined" # The number of dimensions the resulting output embeddings should have. Only supported by models with dynamic (Matryoshka) embeddings; leave unset to use the model default.
        timeout: "-1" # Maximum amount of time a request is allowed to take in seconds. Set to -1 for no timeout.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsNvidia
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: DEFAULT_NVIDIA_EMBEDDING_MODEL }"`
- **Description**: The NeMo Retriever embedding model. Choose from the list, or specify an ID for a self-hosted NIM. input_type is set automatically (passage when indexing, query when searching). <a href="https://build.nvidia.com/models">Learn more</a>.
- **Placeholder**: Select a model...

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

#### Dimensions
- **Name**: `dimensions`
- **Type**: `number`
- **Default**: `"undefined"`
- **Description**: The number of dimensions the resulting output embeddings should have. Only supported by models with dynamic (Matryoshka) embeddings; leave unset to use the model default.

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: Maximum amount of time a request is allowed to take in seconds. Set to -1 for no timeout.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsNvidia`
- **Display Name**: NVIDIA Nemotron Embeddings
- **Internal Name**: `embeddingsNvidia`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsnvidia/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsNvidia/EmbeddingsNvidia.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
