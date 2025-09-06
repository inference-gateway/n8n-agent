# Cohere Model

## Description

Language Model Cohere

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Cohere Model
    parameters:
      options: # Additional options to add
        maxTokens: "250" # The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).
        model: "" # The name of the model to use
        temperature: "0" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmCohere
```

## Parameters

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
- **Default**: `"250"`
- **Description**: The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 32,768).

#### Model
- **Name**: `model`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the model to use

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmCohere`
- **Display Name**: Cohere Model
- **Internal Name**: `lmCohere`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmcohere/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LMCohere/LmCohere.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
