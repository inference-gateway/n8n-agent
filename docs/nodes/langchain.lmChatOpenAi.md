# OpenAI Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenAI Chat Model
    parameters:
      notice: ""
      model: "gpt-4o-mini" # The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
      model: "{ mode: 'list', value: 'gpt-4.1-mini' }" # The model. Choose from the list, or specify an ID.
      notice: ""
      options: {} # Additional options to add
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatOpenAi
```

## Parameters

### If using JSON response format, you must include word "json" in the prompt in your chain or agent. Also, make sure to select latest models released post November 2023.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"gpt-4o-mini"`
- **Description**: The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.

### Model

- **Name**: `model`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: 'gpt-4.1-mini' }"`
- **Description**: The model. Choose from the list, or specify an ID.
- **Placeholder**: Select a model...

### When using non-OpenAI models via "Base URL" override, not all models might be chat-compatible or support other features, like tools calling or JSON response format

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatOpenAi`
- **Display Name**: OpenAI Chat Model
- **Internal Name**: `lmChatOpenAi`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatopenai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LMChatOpenAi/LmChatOpenAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
