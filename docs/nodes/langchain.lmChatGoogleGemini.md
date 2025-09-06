# Google Gemini Chat Model

## Description

Chat Model Google Gemini

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Gemini Chat Model
    parameters:
      modelName: "models/gemini-2.5-flash" # The model which will generate the completion. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatGoogleGemini
```

## Parameters

### Model

- **Name**: `modelName`
- **Type**: `options`
- **Default**: `"models/gemini-2.5-flash"`
- **Description**: The model which will generate the completion. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatGoogleGemini`
- **Display Name**: Google Gemini Chat Model
- **Internal Name**: `lmChatGoogleGemini`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatgooglegemini/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatGoogleGemini/LmChatGoogleGemini.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
