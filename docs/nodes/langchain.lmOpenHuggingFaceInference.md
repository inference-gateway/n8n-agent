# Hugging Face Inference Model

## Description

Language Model HuggingFaceInference

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Hugging Face Inference Model
    parameters:
      model: "mistralai/Mistral-Nemo-Base-2407"
      options: # Additional options to add
        endpointUrl: "" # Custom endpoint URL
        frequencyPenalty: "0" # Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim
        maxTokens: "128" # The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).
        presencePenalty: "0" # Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics
        temperature: "1" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        topK: "1" # Controls the top tokens to consider within the sample operation to create new text
        topP: "1" # Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `string`
- **Default**: `"mistralai/Mistral-Nemo-Base-2407"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Custom Inference Endpoint
- **Name**: `endpointUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: Custom endpoint URL

#### Frequency Penalty
- **Name**: `frequencyPenalty`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim

#### Maximum Number of Tokens
- **Name**: `maxTokens`
- **Type**: `number`
- **Default**: `"128"`
- **Description**: The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).

#### Presence Penalty
- **Name**: `presencePenalty`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.

#### Top K
- **Name**: `topK`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Controls the top tokens to consider within the sample operation to create new text

#### Top P
- **Name**: `topP`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference`
- **Display Name**: Hugging Face Inference Model
- **Internal Name**: `lmOpenHuggingFaceInference`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LMOpenHuggingFaceInference/LmOpenHuggingFaceInference.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
