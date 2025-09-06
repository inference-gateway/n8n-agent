# OpenAI Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenAI Model
    parameters:
      deprecated: ""
      model: "{ mode: 'list', value: 'gpt-3.5-turbo-instruct' }" # The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
      notice: ""
      options: # Additional options to add
        baseURL: "https://api.openai.com/v1" # Override the default base URL for the API
        frequencyPenalty: "0" # Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim
        maxTokens: "-1" # The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).
        presencePenalty: "0" # Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        timeout: "60000" # Maximum amount of time a request is allowed to take in milliseconds
        maxRetries: "2" # Maximum number of retries to attempt
        topP: "1" # Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmOpenAi
```

## Parameters

### This node is using OpenAI completions which are now deprecated. Please use the OpenAI Chat Model node instead.

- **Name**: `deprecated`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `model`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: 'gpt-3.5-turbo-instruct' }"`
- **Description**: The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.

### When using non OpenAI models via Base URL override, not all models might be chat-compatible or support other features, like tools calling or JSON response format.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Base URL
- **Name**: `baseURL`
- **Type**: `string`
- **Default**: `"https://api.openai.com/v1"`
- **Description**: Override the default base URL for the API

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

#### Presence Penalty
- **Name**: `presencePenalty`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0.7"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"60000"`
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

- **Node Type**: `@n8n/n8n-nodes-langchain.lmOpenAi`
- **Display Name**: OpenAI Model
- **Internal Name**: `lmOpenAi`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmopenai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LMOpenAi/LmOpenAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
