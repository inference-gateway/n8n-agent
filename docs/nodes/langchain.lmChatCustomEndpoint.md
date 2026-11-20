# Custom Endpoint Chat Model

## Description

Chat with any OpenAI-compatible endpoint, such as a gateway or a proxy

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Custom Endpoint Chat Model
    parameters:
      authentication: "CUSTOM_MODEL_ENDPOINT_CREDENTIAL"
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.lmChatCustomEndpoint
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"CUSTOM_MODEL_ENDPOINT_CREDENTIAL"`


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.lmChatCustomEndpoint`
- **Display Name**: Custom Endpoint Chat Model
- **Internal Name**: `lmChatCustomEndpoint`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.lmchatcustomendpoint/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/llms/LmChatCustomEndpoint/LmChatCustomEndpoint.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
