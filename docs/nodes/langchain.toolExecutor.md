# Tool Executor

## Description

Parameters to pass to the tool as JSON or string

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Tool Executor
    parameters:
      query: {} # Parameters to pass to the tool as JSON or string
      toolName: "" # Name of the tool to execute if the connected tool is a toolkit
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.toolExecutor
```

## Parameters

### Query

- **Name**: `query`
- **Type**: `json`
- **Default**: `"{}"`
- **Description**: Parameters to pass to the tool as JSON or string

### Tool Name

- **Name**: `toolName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the tool to execute if the connected tool is a toolkit


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.toolExecutor`
- **Display Name**: Tool Executor
- **Internal Name**: `toolExecutor`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.toolexecutor/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/ToolExecutor/ToolExecutor.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
