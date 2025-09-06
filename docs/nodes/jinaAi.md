# Jina AI

## Description

Interact with Jina AI API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Jina AI
    parameters:
      resource: "reader"
      operation: "read" # Fetches content from a URL and converts it to clean, LLM-friendly formats
      operation: "deepResearch" # Research a topic and generate a structured research report
      url: "" # The URL to fetch content from
      simplify: true # Whether to return a simplified version of the response instead of the raw data
      options: {} # Specify desired output format
      searchQuery: ""
      simplify: true # Whether to return a simplified version of the response instead of the raw data
      options: {} # Specify desired output format
      researchQuery: "" # The topic or question for the AI to research
      simplify: true # Whether to return a simplified version of the response instead of the raw data
      options: # The maximum number of URLs to include in the final answer
        maxReturnedSources: "" # The maximum number of URLs to include in the final answer
        prioritizeSources: "" # A list of domains that are given a higher priority for content retrieval
        excludeSources: "" # A list of domains to be strictly excluded from content retrieval
        siteFilter: "" # Restrict search to specific websites
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jinaAi
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"reader"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"read"`
- **Description**: Fetches content from a URL and converts it to clean, LLM-friendly formats

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"deepResearch"`
- **Description**: Research a topic and generate a structured research report

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL to fetch content from
- **Placeholder**: https://jina.ai/

### Simplify

- **Name**: `simplify`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Specify desired output format
- **Placeholder**: Add Option

### Search Query

- **Name**: `searchQuery`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. Jina AI

### Simplify

- **Name**: `simplify`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Specify desired output format
- **Placeholder**: Add Option

### Research Query

- **Name**: `researchQuery`
- **Type**: `string`
- **Default**: `""`
- **Description**: The topic or question for the AI to research
- **Placeholder**: e.g. Analyze the impact of renewable energy sources on climate change mitigation

### Simplify

- **Name**: `simplify`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The maximum number of URLs to include in the final answer
- **Placeholder**: Add Option

**Options:**

#### Max Returned Sources
- **Name**: `maxReturnedSources`
- **Type**: `number`
- **Default**: `""`
- **Description**: The maximum number of URLs to include in the final answer

#### Prioritize Sources
- **Name**: `prioritizeSources`
- **Type**: `string`
- **Default**: `""`
- **Description**: A list of domains that are given a higher priority for content retrieval

#### Exclude Sources
- **Name**: `excludeSources`
- **Type**: `string`
- **Default**: `""`
- **Description**: A list of domains to be strictly excluded from content retrieval

#### Site Filter
- **Name**: `siteFilter`
- **Type**: `string`
- **Default**: `""`
- **Description**: Restrict search to specific websites



## Node Information

- **Node Type**: `n8n-nodes-base.jinaAi`
- **Display Name**: Jina AI
- **Internal Name**: `jinaAi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jinaai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/JinaAI/JinaAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
