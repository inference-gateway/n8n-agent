# Moonshot Kimi Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Moonshot Kimi Chat Model
    parameters:
      notice: ""
      model: "kimi-k2.5" # The model which will generate the completion. <a href="https://platform.kimi.ai/docs/api/chat">Learn more</a>.
      model: "kimi-k2.6" # The model which will generate the completion. <a href="https://platform.kimi.ai/docs/api/chat">Learn more</a>.
      options: # Additional options to add
        frequencyPenalty: "0" # Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim
        maxTokens: "-1" # The maximum number of tokens to generate in the completion. The limit depends on the selected model.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatMoonshot
```

## Parameters

### If using JSON response format, you must include word "json" in the prompt in your chain or agent.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"kimi-k2.5"`
- **Description**: The model which will generate the completion. <a href="https://platform.kimi.ai/docs/api/chat">Learn more</a>.

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"kimi-k2.6"`
- **Description**: The model which will generate the completion. <a href="https://platform.kimi.ai/docs/api/chat">Learn more</a>.

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
- **Description**: The maximum number of tokens to generate in the completion. The limit depends on the selected model.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatMoonshot`
- **Display Name**: Moonshot Kimi Chat Model
- **Internal Name**: `lmChatMoonshot`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatmoonshot/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatMoonshot/LmChatMoonshot.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
