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
      model: "" # The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.embeddingsAwsBedrock
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `""`
- **Description**: The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.


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
