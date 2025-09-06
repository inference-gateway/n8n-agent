# xAI Grok Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: xAI Grok Chat Model
    parameters:
      notice: ""
      model: "grok-2-vision-1212" # The model which will generate the completion. <a href="https://docs.x.ai/docs/models">Learn more</a>.
      options: # Additional options to add
        frequencyPenalty: "0" # Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim
        maxTokens: "-1" # The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatXAiGrok
```

## Parameters

### If using JSON response format, you must include word "json" in the prompt in your chain or agent. Also, make sure to select latest models released post November 2023.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"grok-2-vision-1212"`
- **Description**: The model which will generate the completion. <a href="https://docs.x.ai/docs/models">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Frequency Penalty
- **Name**: `frequencyPenalty`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim

#### Maximum Number of Tokens
- **Name**: `maxTokens`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatXAiGrok`
- **Display Name**: xAI Grok Chat Model
- **Internal Name**: `lmChatXAiGrok`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatxaigrok/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatXAiGrok/LmChatXAiGrok.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
