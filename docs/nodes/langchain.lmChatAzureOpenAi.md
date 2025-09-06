# Azure OpenAI Chat Model

## Description

For advanced usage with an AI chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Azure OpenAI Chat Model
    parameters:
      # No parameters available
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatAzureOpenAi
```

## Parameters

This node has no configurable parameters.

## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatAzureOpenAi`
- **Display Name**: Azure OpenAI Chat Model
- **Internal Name**: `lmChatAzureOpenAi`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatazureopenai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatAzureOpenAi/LmChatAzureOpenAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
