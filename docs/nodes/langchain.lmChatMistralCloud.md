# Mistral Cloud Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mistral Cloud Chat Model
    parameters:
      model: "mistral-small" # The model which will generate the completion. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.
      options: # Additional options to add
        maxTokens: "-1" # The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        maxRetries: "2" # Maximum number of retries to attempt
        topP: "1" # Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.
        safeMode: false # Whether to inject a safety prompt before all conversations
        randomSeed: "undefined" # The seed to use for random sampling. If set, different calls will generate deterministic results.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatMistralCloud
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"mistral-small"`
- **Description**: The model which will generate the completion. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Maximum Number of Tokens
- **Name**: `maxTokens`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0.7"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.

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

#### Enable Safe Mode
- **Name**: `safeMode`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to inject a safety prompt before all conversations

#### Random Seed
- **Name**: `randomSeed`
- **Type**: `number`
- **Default**: `"undefined"`
- **Description**: The seed to use for random sampling. If set, different calls will generate deterministic results.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatMistralCloud`
- **Display Name**: Mistral Cloud Chat Model
- **Internal Name**: `lmChatMistralCloud`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatmistralcloud/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatMistralCloud/LmChatMistralCloud.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
