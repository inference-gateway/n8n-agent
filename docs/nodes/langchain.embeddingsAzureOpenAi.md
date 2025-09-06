# Embeddings Azure OpenAI

## Description

Use Embeddings Azure OpenAI

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Azure OpenAI
    parameters:
      model: "" # The name of the model(deployment) to use
      options: # Additional options to add
        batchSize: "512" # Maximum number of documents to send in each request
        stripNewLines: true # Whether to strip new lines from the input text
        timeout: "-1" # Maximum amount of time a request is allowed to take in seconds. Set to -1 for no timeout.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsAzureOpenAi
```

## Parameters

### Model (Deployment) Name

- **Name**: `model`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the model(deployment) to use

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

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: Maximum amount of time a request is allowed to take in seconds. Set to -1 for no timeout.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi`
- **Display Name**: Embeddings Azure OpenAI
- **Internal Name**: `embeddingsAzureOpenAi`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsazureopenai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsAzureOpenAi/EmbeddingsAzureOpenAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
