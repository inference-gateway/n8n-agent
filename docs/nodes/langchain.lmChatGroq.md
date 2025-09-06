# Groq Chat Model

## Description

Language Model Groq

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Groq Chat Model
    parameters:
      model: "llama3-8b-8192" # The model which will generate the completion. <a href="https://console.groq.com/docs/models">Learn more</a>.
      options: # Additional options to add
        maxTokensToSample: "4096" # The maximum number of tokens to generate in the completion
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatGroq
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"llama3-8b-8192"`
- **Description**: The model which will generate the completion. <a href="https://console.groq.com/docs/models">Learn more</a>.

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
- **Default**: `"4096"`
- **Description**: The maximum number of tokens to generate in the completion

#### Sampling Temperature
- **Name**: `temperature`
- **Type**: `number`
- **Default**: `"0.7"`
- **Description**: Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatGroq`
- **Display Name**: Groq Chat Model
- **Internal Name**: `lmChatGroq`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatgroq/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatGroq/LmChatGroq.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
