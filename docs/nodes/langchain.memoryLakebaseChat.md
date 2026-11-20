# Databricks Lakebase Chat Memory

## Description

Stores the chat history in a Databricks Lakebase table.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Databricks Lakebase Chat Memory
    parameters:
      authentication: "oAuth2"
      lakebaseTable: "n8n_chat_histories" # The table in the schema that stores the chat history
      createTableNotice: ""
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryLakebaseChat
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `hidden`
- **Default**: `"oAuth2"`

### Table Name

- **Name**: `lakebaseTable`
- **Type**: `string`
- **Default**: `"n8n_chat_histories"`
- **Description**: The table in the schema that stores the chat history

### This node cannot create the table. Create it in the Lakebase SQL editor before the first run. A run against a missing table shows the SQL to copy.

- **Name**: `createTableNotice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryLakebaseChat`
- **Display Name**: Databricks Lakebase Chat Memory
- **Internal Name**: `memoryLakebaseChat`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memorylakebasechat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryLakebaseChat/MemoryLakebaseChat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
