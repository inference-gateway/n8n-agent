# Embeddings Databricks

## Description

Use Databricks Embeddings

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Embeddings Databricks
    parameters:
      model: "{ mode: 'list', value: '' }" # The Unity AI Gateway model service. Choose from the list, or enter its full name (catalog.schema.service).
      options: # Additional options to add
        batchSize: "512" # Maximum number of documents to send in each request
        stripNewLines: true # Whether to strip new lines from the input text
        timeout: "360000" # Maximum amount of time a request is allowed to take in milliseconds
        maxRetries: "2" # Maximum number of retries to attempt
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsDatabricks
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The Unity AI Gateway model service. Choose from the list, or enter its full name (catalog.schema.service).
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

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"360000"`
- **Description**: Maximum amount of time a request is allowed to take in milliseconds

#### Max Retries
- **Name**: `maxRetries`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Maximum number of retries to attempt



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.embeddingsDatabricks`
- **Display Name**: Embeddings Databricks
- **Internal Name**: `embeddingsDatabricks`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.embeddingsdatabricks/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsDatabricks/EmbeddingsDatabricks.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
