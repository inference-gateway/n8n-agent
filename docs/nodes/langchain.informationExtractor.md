# Information Extractor

## Description

Extract information from text in a structured format

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Information Extractor
    parameters:
      text: "" # The text to extract information from
      From Attribute Descriptions: "fromAttributes" # How to specify the schema for the desired output
      attributes: {} # Attribute to extract
      options: # String to use directly as the system prompt template
        systemPromptTemplate: "SYSTEM_PROMPT_TEMPLATE" # String to use directly as the system prompt template
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.informationExtractor
```

## Parameters

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text to extract information from

### From Attribute Descriptions

- **Name**: `From Attribute Descriptions`
- **Type**: `string`
- **Default**: `"fromAttributes"`
- **Description**: How to specify the schema for the desired output

### Attributes

- **Name**: `attributes`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Attribute to extract
- **Placeholder**: Add Attribute

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: String to use directly as the system prompt template
- **Placeholder**: Add Option

**Options:**

#### System Prompt Template
- **Name**: `systemPromptTemplate`
- **Type**: `string`
- **Default**: `"SYSTEM_PROMPT_TEMPLATE"`
- **Description**: String to use directly as the system prompt template



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.informationExtractor`
- **Display Name**: Information Extractor
- **Internal Name**: `informationExtractor`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.informationextractor/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/chains/InformationExtractor/InformationExtractor.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
