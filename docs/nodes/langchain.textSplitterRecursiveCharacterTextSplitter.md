# Recursive Character Text Splitter

## Description

Split text into chunks by characters recursively, recommended for most use cases

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Recursive Character Text Splitter
    parameters:
      chunkSize: "1000"
      chunkOverlap: "0"
      options: # Additional options to add
        splitCode: "markdown"
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
```

## Parameters

### Chunk Size

- **Name**: `chunkSize`
- **Type**: `number`
- **Default**: `"1000"`

### Chunk Overlap

- **Name**: `chunkOverlap`
- **Type**: `number`
- **Default**: `"0"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Split Code
- **Name**: `splitCode`
- **Type**: `options`
- **Default**: `"markdown"`



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter`
- **Display Name**: Recursive Character Text Splitter
- **Internal Name**: `textSplitterRecursiveCharacterTextSplitter`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/text_splitters/TextSplitterRecursiveCharacterTextSplitter/TextSplitterRecursiveCharacterTextSplitter.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
