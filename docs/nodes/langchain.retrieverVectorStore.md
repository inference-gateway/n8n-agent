# Vector Store Retriever

## Description

Use a Vector Store as Retriever

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Vector Store Retriever
    parameters:
      topK: "4" # The maximum number of results to return
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.retrieverVectorStore
```

## Parameters

### Limit

- **Name**: `topK`
- **Type**: `number`
- **Default**: `"4"`
- **Description**: The maximum number of results to return


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.retrieverVectorStore`
- **Display Name**: Vector Store Retriever
- **Internal Name**: `retrieverVectorStore`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.retrievervectorstore/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverVectorStore/RetrieverVectorStore.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
