# Postgres Chat Memory

## Description

Stores the chat history in Postgres table.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Postgres Chat Memory
    parameters:
      tableName: "n8n_chat_histories" # The table name to store the chat history in. If table does not exist, it will be created.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryPostgresChat
```

## Parameters

### Table Name

- **Name**: `tableName`
- **Type**: `string`
- **Default**: `"n8n_chat_histories"`
- **Description**: The table name to store the chat history in. If table does not exist, it will be created.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryPostgresChat`
- **Display Name**: Postgres Chat Memory
- **Internal Name**: `memoryPostgresChat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorypostgreschat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryPostgresChat/MemoryPostgresChat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
