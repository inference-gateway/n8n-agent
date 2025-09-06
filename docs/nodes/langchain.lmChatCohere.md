# Cohere Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Cohere Chat Model
    parameters:
      model: "command-a-03-2025" # The model which will generate the completion. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
      options: # Additional options to add
        temperature: "0.7" # Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
        maxRetries: "2" # Maximum number of retries to attempt
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatCohere
```

## Parameters

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"command-a-03-2025"`
- **Description**: The model which will generate the completion. <a href="https://docs.cohere.com/docs/models">Learn more</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

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



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatCohere`
- **Display Name**: Cohere Chat Model
- **Internal Name**: `lmChatCohere`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatcohere/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatCohere/LmChatCohere.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
