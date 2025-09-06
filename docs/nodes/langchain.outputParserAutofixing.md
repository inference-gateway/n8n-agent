# Auto-fixing Output Parser

## Description

Deprecated, use structured output parser

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Auto-fixing Output Parser
    parameters:
      info: ""
      options: # Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.
        prompt: "NAIVE_FIX_PROMPT" # Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.outputParserAutofixing
```

## Parameters

### This node wraps another output parser. If the first one fails it calls an LLM to fix the format

- **Name**: `info`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.
- **Placeholder**: Add Option

**Options:**

#### Retry Prompt
- **Name**: `prompt`
- **Type**: `string`
- **Default**: `"NAIVE_FIX_PROMPT"`
- **Description**: Prompt template used for fixing the output. Uses placeholders: "{instructions}" for parsing rules, "{completion}" for the failed attempt, and "{error}" for the validation error message.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.outputParserAutofixing`
- **Display Name**: Auto-fixing Output Parser
- **Internal Name**: `outputParserAutofixing`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.outputparserautofixing/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserAutofixing/OutputParserAutofixing.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
