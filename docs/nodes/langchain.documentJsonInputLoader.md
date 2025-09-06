# JSON Input Loader

## Description

Use JSON data from a previous step in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: JSON Input Loader
    parameters:
      pointers: "" # Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"
      options: {} # Metadata to add to each document. Could be used for filtering during retrieval
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.documentJsonInputLoader
```

## Parameters

### Pointers

- **Name**: `pointers`
- **Type**: `string`
- **Default**: `""`
- **Description**: Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Metadata to add to each document. Could be used for filtering during retrieval
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.documentJsonInputLoader`
- **Display Name**: JSON Input Loader
- **Internal Name**: `documentJsonInputLoader`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.documentjsoninputloader/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentJSONInputLoader/DocumentJsonInputLoader.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
