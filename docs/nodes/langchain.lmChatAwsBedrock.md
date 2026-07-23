# AWS Bedrock Chat Model

## Description

Language Model AWS Bedrock

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Bedrock Chat Model
    parameters:
      modelSource: "onDemand" # Standard foundation models with on-demand pricing
      model: "" # The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.
      model: "" # The inference profile which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-use.html">Learn more</a>.
      options: # Additional options to add
        maxTokensToSample: "2000" # The maximum number of tokens to generate in the completion
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        topP: "1" # Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.
        maxRetries: "2" # Maximum number of retries to attempt when a request fails
        timeout: "60000" # Maximum amount of time a request is allowed to take in milliseconds. Increase this for long generations; set to 0 to disable.
        additionalModelRequestFields: {} # Model-family-specific inference parameters passed through as JSON (e.g. Claude <code>top_k</code>/<code>thinking</code>, Nova <code>inferenceConfig</code>/<code>reasoningConfig</code>, Cohere penalties). See the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">AWS model parameters docs</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatAwsBedrock
```

## Parameters

### Model Source

- **Name**: `modelSource`
- **Type**: `options`
- **Default**: `"onDemand"`
- **Description**: Standard foundation models with on-demand pricing

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `""`
- **Description**: The model which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Learn more</a>.

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `""`
- **Description**: The inference profile which will generate the completion. <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-use.html">Learn more</a>.

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
- **Default**: `"2000"`
- **Description**: The maximum number of tokens to generate in the completion

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0.7"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.

#### Top P
- **Name**: `topP`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered. We generally recommend altering this or temperature but not both.

#### Max Retries
- **Name**: `maxRetries`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Maximum number of retries to attempt when a request fails

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"60000"`
- **Description**: Maximum amount of time a request is allowed to take in milliseconds. Increase this for long generations; set to 0 to disable.

#### Additional Model Request Fields
- **Name**: `additionalModelRequestFields`
- **Type**: `json`
- **Default**: `"{}"`
- **Description**: Model-family-specific inference parameters passed through as JSON (e.g. Claude <code>top_k</code>/<code>thinking</code>, Nova <code>inferenceConfig</code>/<code>reasoningConfig</code>, Cohere penalties). See the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">AWS model parameters docs</a>.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatAwsBedrock`
- **Display Name**: AWS Bedrock Chat Model
- **Internal Name**: `lmChatAwsBedrock`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatawsbedrock/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatAwsBedrock/LmChatAwsBedrock.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
