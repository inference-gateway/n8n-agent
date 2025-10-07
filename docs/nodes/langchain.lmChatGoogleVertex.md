# Google Vertex Chat Model

## Description

Chat Model Google Vertex

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Vertex Chat Model
    parameters:
      projectId: "{ mode: 'list', value: '' }" # Select or enter your Google Cloud project ID
      modelName: "gemini-2.5-flash" # The model which will generate the completion. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models">Learn more</a>.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatGoogleVertex
```

## Parameters

### Project ID

- **Name**: `projectId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: Select or enter your Google Cloud project ID

### Model Name

- **Name**: `modelName`
- **Type**: `string`
- **Default**: `"gemini-2.5-flash"`
- **Description**: The model which will generate the completion. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models">Learn more</a>.


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatGoogleVertex`
- **Display Name**: Google Vertex Chat Model
- **Internal Name**: `lmChatGoogleVertex`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatgooglevertex/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatGoogleVertex/LmChatGoogleVertex.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
