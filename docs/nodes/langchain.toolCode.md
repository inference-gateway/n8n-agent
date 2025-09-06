# Code Tool

## Description

Write a tool in JS or Python

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Code Tool
    parameters:
      noticeTemplateExample: ""
      name: ""
      name: "" # The name of the function to be called, could contain letters, numbers, and underscores only
      description: ""
      language: "javaScript"
      jsCode: "// Example: convert the incoming query to uppercase and return it\nreturn query.toUpperCase()" # E.g. Converts any text to uppercase
      pythonCode: "# Example: convert the incoming query to uppercase and return it\nreturn query.upper()" # E.g. Converts any text to uppercase
      specifyInputSchema: false # Whether to specify the schema for the function. This would require the LLM to provide the input in the correct format and would validate it against the schema.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.toolCode
```

## Parameters

### See an example of a conversational agent with custom tool written in JavaScript <a href="/templates/1963" target="_blank">here</a>.

- **Name**: `noticeTemplateExample`
- **Type**: `notice`
- **Default**: `""`

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: My_Tool

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the function to be called, could contain letters, numbers, and underscores only
- **Placeholder**: e.g. My_Tool

### Description

- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: Call this tool to get a random color. The input should be a string with comma separted names of colors to exclude.

### Language

- **Name**: `language`
- **Type**: `options`
- **Default**: `"javaScript"`

### JavaScript

- **Name**: `jsCode`
- **Type**: `string`
- **Default**: `"// Example: convert the incoming query to uppercase and return it\\nreturn query.toUpperCase()"`
- **Description**: E.g. Converts any text to uppercase

### Python

- **Name**: `pythonCode`
- **Type**: `string`
- **Default**: `"# Example: convert the incoming query to uppercase and return it\\nreturn query.upper()"`
- **Description**: E.g. Converts any text to uppercase

### Specify Input Schema

- **Name**: `specifyInputSchema`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to specify the schema for the function. This would require the LLM to provide the input in the correct format and would validate it against the schema.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.toolCode`
- **Display Name**: Code Tool
- **Internal Name**: `toolCode`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.toolcode/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/tools/ToolCode/ToolCode.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
