# Character Text Splitter

## Description

Split text into chunks by characters

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Character Text Splitter
    parameters:
      separator: ""
      chunkSize: "1000" # Maximum number of characters per chunk
      chunkOverlap: "0" # Number of characters shared between consecutive chunks to preserve context
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter
```

## Parameters

### Separator

- **Name**: `separator`
- **Type**: `string`
- **Default**: `""`

### Chunk Size

- **Name**: `chunkSize`
- **Type**: `number`
- **Default**: `"1000"`
- **Description**: Maximum number of characters per chunk

### Chunk Overlap

- **Name**: `chunkOverlap`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Number of characters shared between consecutive chunks to preserve context


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter`
- **Display Name**: Character Text Splitter
- **Internal Name**: `textSplitterCharacterTextSplitter`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterCharacterTextSplitter/TextSplitterCharacterTextSplitter.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
