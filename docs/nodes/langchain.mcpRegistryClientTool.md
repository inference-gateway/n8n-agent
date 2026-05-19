# MCP Registry Client (internal)

## Description

Runtime backing for MCP registry-derived nodes

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MCP Registry Client (internal)
    parameters:
      endpointUrl: ""
      serverTransport: "httpStreamable"
      include: "all" # How to select the tools you want to be exposed to the AI Agent
      includeTools: [] # Tools from the MCP server to expose to the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      excludeTools: [] # Tools from the MCP server to hide from the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      options: # Additional options to add
        timeout: "60000" # Time in ms to wait for tool calls to finish
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.mcpRegistryClientTool
```

## Parameters

### Endpoint URL

- **Name**: `endpointUrl`
- **Type**: `hidden`
- **Default**: `""`

### Server Transport

- **Name**: `serverTransport`
- **Type**: `hidden`
- **Default**: `"httpStreamable"`

### Tools to Include

- **Name**: `include`
- **Type**: `options`
- **Default**: `"all"`
- **Description**: How to select the tools you want to be exposed to the AI Agent

### Tools to Include

- **Name**: `includeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Tools from the MCP server to expose to the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Tools to Exclude

- **Name**: `excludeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Tools from the MCP server to hide from the agent. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"60000"`
- **Description**: Time in ms to wait for tool calls to finish



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.mcpRegistryClientTool`
- **Display Name**: MCP Registry Client (internal)
- **Internal Name**: `mcpRegistryClientTool`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.mcpregistryclienttool/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/mcp/McpRegistryClientTool/McpRegistryClientTool.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
