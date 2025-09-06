# MongoDB Chat Memory

## Description

Stores the chat history in MongoDB collection.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MongoDB Chat Memory
    parameters:
      collectionName: "n8n_chat_histories" # The collection name to store the chat history in. If collection does not exist, it will be created.
      databaseName: "" # The database name to store the chat history in. If not provided, the database from credentials will be used.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryMongoDbChat
```

## Parameters

### Collection Name

- **Name**: `collectionName`
- **Type**: `string`
- **Default**: `"n8n_chat_histories"`
- **Description**: The collection name to store the chat history in. If collection does not exist, it will be created.

### Database Name

- **Name**: `databaseName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The database name to store the chat history in. If not provided, the database from credentials will be used.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryMongoDbChat`
- **Display Name**: MongoDB Chat Memory
- **Internal Name**: `memoryMongoDbChat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorymongodbchat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryMongoDbChat/MemoryMongoDbChat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
