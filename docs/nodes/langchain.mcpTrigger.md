# MCP Server Trigger

## Description

Expose n8n tools as an MCP Server endpoint

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MCP Server Trigger
    parameters:
      authentication: "none" # Require user to give consent to use their n8n account
      requireExecuteAccess: true # Whether the triggering user must also have permission to execute the workflow in the project it belongs to
      path: "" # The base path for this MCP server
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.mcpTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Require user to give consent to use their n8n account

### Require Workflow Execute Permission

- **Name**: `requireExecuteAccess`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the triggering user must also have permission to execute the workflow in the project it belongs to

### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The base path for this MCP server
- **Placeholder**: webhook


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.mcpTrigger`
- **Display Name**: MCP Server Trigger
- **Internal Name**: `mcpTrigger`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.mcptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/mcp/McpTrigger/McpTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
