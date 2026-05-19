# MiniMax Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: MiniMax Chat Model
    parameters:
      model: "MiniMax-M2.7" # The model which will generate the completion. <a href="https://platform.minimax.io/docs/api-reference/text-openai-api">Learn more</a>.
      options: # Additional options to add
        hideThinking: true # Whether to strip chain-of-thought reasoning from the response, returning only the final answer
        maxTokens: "-1" # The maximum number of tokens to generate in the completion. The limit depends on the selected model.
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        timeout: "360000" # Maximum amount of time a request is allowed to take in milliseconds
        maxRetries: "2" # Maximum number of retries to attempt
        topP: "1" # Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatMinimax
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"MiniMax-M2.7"`
- **Description**: The model which will generate the completion. <a href="https://platform.minimax.io/docs/api-reference/text-openai-api">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Hide Thinking
- **Name**: `hideThinking`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to strip chain-of-thought reasoning from the response, returning only the final answer

#### Maximum Number of Tokens
- **Name**: `maxTokens`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: The maximum number of tokens to generate in the completion. The limit depends on the selected model.

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0.7"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"360000"`
- **Description**: Maximum amount of time a request is allowed to take in milliseconds

#### Max Retries
- **Name**: `maxRetries`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Maximum number of retries to attempt

#### Top P
- **Name**: `topP`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatMinimax`
- **Display Name**: MiniMax Chat Model
- **Internal Name**: `lmChatMinimax`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatminimax/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatMinimax/LmChatMinimax.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
