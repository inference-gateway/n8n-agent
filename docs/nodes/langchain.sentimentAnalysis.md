# Sentiment Analysis

## Description

Analyze the sentiment of your text

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Sentiment Analysis
    parameters:
      inputText: "" # Use an expression to reference data in previous nodes or enter static text
      detailedResultsNotice: ""
      options: # A comma-separated list of categories to analyze
        categories: "DEFAULT_CATEGORIES" # A comma-separated list of categories to analyze
        systemPromptTemplate: "DEFAULT_SYSTEM_PROMPT_TEMPLATE" # String to use directly as the system prompt template
        includeDetailedResults: false # Whether to include sentiment strength and confidence scores in the output
        enableAutoFixing: true # Whether to enable auto-fixing (may trigger an additional LLM call if output is broken)
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.sentimentAnalysis
```

## Parameters

### Text to Analyze

- **Name**: `inputText`
- **Type**: `string`
- **Default**: `""`
- **Description**: Use an expression to reference data in previous nodes or enter static text

### Sentiment scores are LLM-generated estimates, not statistically rigorous measurements. They may be inconsistent across runs and should be used as rough indicators only.

- **Name**: `detailedResultsNotice`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: A comma-separated list of categories to analyze
- **Placeholder**: Add Option

**Options:**

#### Sentiment Categories
- **Name**: `categories`
- **Type**: `string`
- **Default**: `"DEFAULT_CATEGORIES"`
- **Description**: A comma-separated list of categories to analyze

#### System Prompt Template
- **Name**: `systemPromptTemplate`
- **Type**: `string`
- **Default**: `"DEFAULT_SYSTEM_PROMPT_TEMPLATE"`
- **Description**: String to use directly as the system prompt template

#### Include Detailed Results
- **Name**: `includeDetailedResults`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include sentiment strength and confidence scores in the output

#### Enable Auto-Fixing
- **Name**: `enableAutoFixing`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to enable auto-fixing (may trigger an additional LLM call if output is broken)



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.sentimentAnalysis`
- **Display Name**: Sentiment Analysis
- **Internal Name**: `sentimentAnalysis`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/chains/SentimentAnalysis/SentimentAnalysis.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
