# Structured Output Parser

## Description

Return data in a defined JSON format

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Structured Output Parser
    parameters:
      jsonSchema: "{
  "type": "object",
  "properties": {
    "state": {
      "type": "string"
    },
    "cities": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}" # JSON Schema to structure and validate the output against
      autoFix: false # Whether to automatically fix the output when it is not in the correct format. Will cause another LLM call.
      customizeRetryPrompt: false # Whether to customize the prompt used for retrying the output parsing. If disabled, a default prompt will be used.
      prompt: "NAIVE_FIX_PROMPT" # Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.outputParserStructured
```

## Parameters

### JSON Schema

- **Name**: `jsonSchema`
- **Type**: `json`
- **Default**: `"{\n  \"type\": \"object\",\n  \"properties\": {\n    \"state\": {\n      \"type\": \"string\"\n    },\n    \"cities\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    }\n  }\n}"`
- **Description**: JSON Schema to structure and validate the output against

### Auto-Fix Format

- **Name**: `autoFix`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to automatically fix the output when it is not in the correct format. Will cause another LLM call.

### Customize Retry Prompt

- **Name**: `customizeRetryPrompt`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to customize the prompt used for retrying the output parsing. If disabled, a default prompt will be used.

### Custom Prompt

- **Name**: `prompt`
- **Type**: `string`
- **Default**: `"NAIVE_FIX_PROMPT"`
- **Description**: Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.outputParserStructured`
- **Display Name**: Structured Output Parser
- **Internal Name**: `outputParserStructured`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.outputparserstructured/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserStructured/OutputParserStructured.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
