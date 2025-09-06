# GitHub Document Loader

## Description

Use GitHub data as input to this chain

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GitHub Document Loader
    parameters:
      repository: ""
      branch: "main"
      textSplittingMode: "simple" # Splits every 1000 characters with a 200 character overlap
      additionalOptions: # Comma-separated list of paths to ignore, e.g. "docs, src/tests
        recursive: false
        ignorePaths: "" # Comma-separated list of paths to ignore, e.g. "docs, src/tests
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.documentGithubLoader
```

## Parameters

### Repository Link

- **Name**: `repository`
- **Type**: `string`
- **Default**: `""`

### Branch

- **Name**: `branch`
- **Type**: `string`
- **Default**: `"main"`

### Text Splitting

- **Name**: `textSplittingMode`
- **Type**: `options`
- **Default**: `"simple"`
- **Description**: Splits every 1000 characters with a 200 character overlap

### Options

- **Name**: `additionalOptions`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Comma-separated list of paths to ignore, e.g. "docs, src/tests
- **Placeholder**: Add Option

**Options:**

#### Recursive
- **Name**: `recursive`
- **Type**: `boolean`
- **Default**: `false`

#### Ignore Paths
- **Name**: `ignorePaths`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comma-separated list of paths to ignore, e.g. "docs, src/tests



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.documentGithubLoader`
- **Display Name**: GitHub Document Loader
- **Internal Name**: `documentGithubLoader`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.documentgithubloader/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentGithubLoader/DocumentGithubLoader.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
