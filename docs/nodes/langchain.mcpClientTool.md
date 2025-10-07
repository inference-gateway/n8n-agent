# MCP Client Tool

## Description

Connect tools from an MCP Server

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MCP Client Tool
    parameters:
      sseEndpoint: "" # SSE Endpoint of your MCP server
      endpointUrl: "" # Endpoint of your MCP server
      authentication: "none" # The way to authenticate with your endpoint
      credentials: ""
      include: "all" # How to select the tools you want to be exposed to the AI Agent
      includeTools: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      excludeTools: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      options: # Additional options to add
        timeout: "60000" # Time in ms to wait for tool calls to finish
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.mcpClientTool
```

## Parameters

### SSE Endpoint

- **Name**: `sseEndpoint`
- **Type**: `string`
- **Default**: `""`
- **Description**: SSE Endpoint of your MCP server
- **Placeholder**: e.g. https://my-mcp-server.ai/sse

### Endpoint

- **Name**: `endpointUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: Endpoint of your MCP server
- **Placeholder**: e.g. https://my-mcp-server.ai/mcp

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: The way to authenticate with your endpoint

### Credentials

- **Name**: `credentials`
- **Type**: `credentials`
- **Default**: `""`

### Tools to Include

- **Name**: `include`
- **Type**: `options`
- **Default**: `"all"`
- **Description**: How to select the tools you want to be exposed to the AI Agent

### Tools to Include

- **Name**: `includeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Tools to Exclude

- **Name**: `excludeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

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

- **Node Type**: `@n8n/n8n-nodes-langchain.mcpClientTool`
- **Display Name**: MCP Client Tool
- **Internal Name**: `mcpClientTool`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.mcpclienttool/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/mcp/McpClientTool/McpClientTool.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
