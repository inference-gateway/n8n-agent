# Question and Answer Chain

## Description

Answer questions about retrieved documents

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Question and Answer Chain
    parameters:
      query: "={{ $json.input }}"
      query: "={{ $json.chat_input }}"
      query: "={{ $json.chatInput }}"
      text: ""
      options: {} # Template string used for the system prompt. This should include the variable \`{context}\` for the provided context. For text completion models, you should also include the variable \`{${LEGACY_INPUT_TEMPLATE_KEY}}\` for the user’s query.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.chainRetrievalQa
```

## Parameters

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `"={{ $json.input }}"`

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `"={{ $json.chat_input }}"`

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `"={{ $json.chatInput }}"`

### Prompt (User Message)

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. Hello, how can you help me?

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Template string used for the system prompt. This should include the variable \`{context}\` for the provided context. For text completion models, you should also include the variable \`{${LEGACY_INPUT_TEMPLATE_KEY}}\` for the user’s query.
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.chainRetrievalQa`
- **Display Name**: Question and Answer Chain
- **Internal Name**: `chainRetrievalQa`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/chains/ChainRetrievalQA/ChainRetrievalQa.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
