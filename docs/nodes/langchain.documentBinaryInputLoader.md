# Binary Input Loader

## Description

Use binary data from a previous step in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Binary Input Loader
    parameters:
      loader: "jsonLoader" # Load CSV files
      binaryDataKey: "data" # Name of the binary property from which to read the file buffer
      splitPages: true
      column: "" # Column to extract from CSV
      separator: "," # Separator to use for CSV
      pointers: "" # Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"
      options: {} # Metadata to add to each document. Could be used for filtering during retrieval
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.documentBinaryInputLoader
```

## Parameters

### Loader Type

- **Name**: `loader`
- **Type**: `options`
- **Default**: `"jsonLoader"`
- **Description**: Load CSV files

### Binary Data Key

- **Name**: `binaryDataKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property from which to read the file buffer

### Split Pages

- **Name**: `splitPages`
- **Type**: `boolean`
- **Default**: `true`

### Column

- **Name**: `column`
- **Type**: `string`
- **Default**: `""`
- **Description**: Column to extract from CSV

### Separator

- **Name**: `separator`
- **Type**: `string`
- **Default**: `","`
- **Description**: Separator to use for CSV

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

- **Node Type**: `@n8n/n8n-nodes-langchain.documentBinaryInputLoader`
- **Display Name**: Binary Input Loader
- **Internal Name**: `documentBinaryInputLoader`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.documentbinaryinputloader/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentBinaryInputLoader/DocumentBinaryInputLoader.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
