# Vector Store Question Answer Tool

## Description

Answer questions with a vector store

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Vector Store Question Answer Tool
    parameters:
      name: "" # Name of the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
      description: "" # Describe the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
      topK: "4" # The maximum number of results to return
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.toolVectorStore
```

## Parameters

### Data Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
- **Placeholder**: e.g. users_info

### Description of Data

- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: Describe the data in vector store. This will be used to fill this tool description: Useful for when you need to answer questions about [name]. Whenever you need information about [data description], you should ALWAYS use this. Input should be a fully formed question.
- **Placeholder**: [Describe your data here, e.g. a user's name, email, etc.]

### Limit

- **Name**: `topK`
- **Type**: `number`
- **Default**: `"4"`
- **Description**: The maximum number of results to return


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.toolVectorStore`
- **Display Name**: Vector Store Question Answer Tool
- **Internal Name**: `toolVectorStore`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.toolvectorstore/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/tools/ToolVectorStore/ToolVectorStore.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
