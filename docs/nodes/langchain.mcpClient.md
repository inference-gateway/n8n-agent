# MCP Client

## Description

Standalone MCP Client

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MCP Client
    parameters:
      endpointUrl: "" # The URL of the MCP server to connect to
      authentication: "none" # The way to authenticate with your endpoint
      credentials: ""
      tool: "{ mode: 'list', value: '' }" # The tool to use
      inputMode: "manual" # Manually specify the input data for each tool parameter
      parameters: "{
					mappingMode: 'defineBelow',
					value: null,
				}"
      jsonInput: "{\n  "my_field_1": "value",\n  "my_field_2": 1\n}\n"
      options: # Additional options to add
        convertToBinary: true # Whether to convert images and audio to binary data. If false, images and audio will be returned as base64 encoded strings.
        timeout: "60000" # Time in ms to wait for tool calls to finish
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.mcpClient
```

## Parameters

### MCP Endpoint URL

- **Name**: `endpointUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL of the MCP server to connect to
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

### Tool

- **Name**: `tool`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The tool to use

### Input Mode

- **Name**: `inputMode`
- **Type**: `options`
- **Default**: `"manual"`
- **Description**: Manually specify the input data for each tool parameter

### Parameters

- **Name**: `parameters`
- **Type**: `resourceMapper`
- **Default**: `"{\n\t\t\t\t\tmappingMode: 'defineBelow',\n\t\t\t\t\tvalue: null,\n\t\t\t\t}"`

### JSON

- **Name**: `jsonInput`
- **Type**: `json`
- **Default**: `"{\\n  \"my_field_1\": \"value\",\\n  \"my_field_2\": 1\\n}\\n"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Convert to Binary
- **Name**: `convertToBinary`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to convert images and audio to binary data. If false, images and audio will be returned as base64 encoded strings.

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"60000"`
- **Description**: Time in ms to wait for tool calls to finish



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.mcpClient`
- **Display Name**: MCP Client
- **Internal Name**: `mcpClient`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.mcpclient/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/mcp/McpClient/McpClient.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
