# HTTP Request Tool

## Description

Makes an HTTP request and returns the response data

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: HTTP Request Tool
    parameters:
      toolDescription: "" # Explain to LLM what this tool does, better description would allow LLM to produce expected result
      method: "GET"
      placeholderNotice: ""
      url: ""
      sendQuery: false # Whether the request has query params or not
      specifyQuery: ""
      parametersQuery: ""
      jsonQuery: ""
      sendHeaders: false # Whether the request has headers or not
      specifyHeaders: ""
      parametersHeaders: ""
      jsonHeaders: ""
      sendBody: false # Whether the request has body or not
      specifyBody: ""
      parametersBody: ""
      jsonBody: ""
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.toolHttpRequest
```

## Parameters

### Description

- **Name**: `toolDescription`
- **Type**: `string`
- **Default**: `""`
- **Description**: Explain to LLM what this tool does, better description would allow LLM to produce expected result
- **Placeholder**: e.g. Get the current weather in the requested city

### Method

- **Name**: `method`
- **Type**: `options`
- **Default**: `"GET"`

### Tip: You can use a {placeholder} for any part of the request to be filled by the model. Provide more context about them in the placeholders section

- **Name**: `placeholderNotice`
- **Type**: `notice`
- **Default**: `""`

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. http://www.example.com/{path}

### Send Query Parameters

- **Name**: `sendQuery`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the request has query params or not

### Specify Query Parameters

- **Name**: `specifyQuery`
- **Type**: `string`

### Query Parameters

- **Name**: `parametersQuery`
- **Type**: `string`

### jsonQuery

- **Name**: `jsonQuery`
- **Type**: `string`

### Send Headers

- **Name**: `sendHeaders`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the request has headers or not

### Specify Headers

- **Name**: `specifyHeaders`
- **Type**: `string`

### Header Parameters

- **Name**: `parametersHeaders`
- **Type**: `string`

### jsonHeaders

- **Name**: `jsonHeaders`
- **Type**: `string`

### Send Body

- **Name**: `sendBody`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the request has body or not

### Specify Body

- **Name**: `specifyBody`
- **Type**: `string`

### Body Parameters

- **Name**: `parametersBody`
- **Type**: `string`

### jsonBody

- **Name**: `jsonBody`
- **Type**: `string`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.toolHttpRequest`
- **Display Name**: HTTP Request Tool
- **Internal Name**: `toolHttpRequest`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.toolhttprequest/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/tools/ToolHttpRequest/ToolHttpRequest.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
