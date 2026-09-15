# Embeddings AWS Bedrock

## Description

Use Embeddings AWS Bedrock

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings AWS Bedrock
    parameters:
      model: "" # The model or inference profile which will generate the embeddings. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
      options: # Additional options to add
        additionalModelRequestFields: {} # Model-specific request fields passed through as JSON (e.g. Titan <code>dimensions</code>/<code>normalize</code>, Cohere <code>input_type</code>/<code>truncate</code>). See the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">AWS model parameters docs</a>.
        maxRetries: "2" # Maximum number of retries to attempt when a request fails
        timeout: "60000" # Maximum amount of time a request is allowed to take in milliseconds. Set to 0 to disable.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsAwsBedrock
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `""`
- **Description**: The model or inference profile which will generate the embeddings. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Additional Model Request Fields
- **Name**: `additionalModelRequestFields`
- **Type**: `json`
- **Default**: `"{}"`
- **Description**: Model-specific request fields passed through as JSON (e.g. Titan <code>dimensions</code>/<code>normalize</code>, Cohere <code>input_type</code>/<code>truncate</code>). See the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">AWS model parameters docs</a>.

#### Max Retries
- **Name**: `maxRetries`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Maximum number of retries to attempt when a request fails

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"60000"`
- **Description**: Maximum amount of time a request is allowed to take in milliseconds. Set to 0 to disable.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsAwsBedrock`
- **Display Name**: Embeddings AWS Bedrock
- **Internal Name**: `embeddingsAwsBedrock`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsawsbedrock/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsAwsBedrock/EmbeddingsAwsBedrock.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
