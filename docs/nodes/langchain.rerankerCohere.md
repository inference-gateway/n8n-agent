# Reranker Cohere

## Description

Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Reranker Cohere
    parameters:
      modelName: "rerank-v3.5" # The model that should be used to rerank the documents. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
      topN: "3" # The maximum number of documents to return after reranking
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.rerankerCohere
```

## Parameters

### Model

- **Name**: `modelName`
- **Type**: `options`
- **Default**: `"rerank-v3.5"`
- **Description**: The model that should be used to rerank the documents. <a href="https://docs.cohere.com/docs/models">Learn more</a>.

### Top N

- **Name**: `topN`
- **Type**: `number`
- **Default**: `"3"`
- **Description**: The maximum number of documents to return after reranking


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.rerankerCohere`
- **Display Name**: Reranker Cohere
- **Internal Name**: `rerankerCohere`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.rerankercohere/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/rerankers/RerankerCohere/RerankerCohere.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
