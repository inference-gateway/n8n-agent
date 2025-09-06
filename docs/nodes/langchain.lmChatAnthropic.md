# Anthropic Chat Model

## Description

Language Model Anthropic

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Anthropic Chat Model
    parameters:
      model: "{
					mode: 'list',
					value: 'claude-sonnet-4-20250514',
					cachedResultName: 'Claude 4 Sonnet',
				}" # The model. Choose from the list, or specify an ID. <a href="https://docs.anthropic.com/claude/docs/models-overview">Learn more</a>.
      options: # Additional options to add
        maxTokensToSample: "DEFAULT_MAX_TOKENS" # The maximum number of tokens to generate in the completion
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatAnthropic
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: 'claude-sonnet-4-20250514',\n\t\t\t\t\tcachedResultName: 'Claude 4 Sonnet',\n\t\t\t\t}"`
- **Description**: The model. Choose from the list, or specify an ID. <a href="https://docs.anthropic.com/claude/docs/models-overview">Learn more</a>.
- **Placeholder**: Select a model...

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Maximum Number of Tokens
- **Name**: `maxTokensToSample`
- **Type**: `number`
- **Default**: `"DEFAULT_MAX_TOKENS"`
- **Description**: The maximum number of tokens to generate in the completion



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatAnthropic`
- **Display Name**: Anthropic Chat Model
- **Internal Name**: `lmChatAnthropic`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatanthropic/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LMChatAnthropic/LmChatAnthropic.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
