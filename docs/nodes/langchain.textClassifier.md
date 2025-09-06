# Text Classifier

## Description

Classify your text into distinct categories

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Text Classifier
    parameters:
      inputText: "" # Use an expression to reference data in previous nodes or enter static text
      categories: {} # Category to add
      options: # What to do with items that don’t match the categories exactly
        multiClass: false
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.textClassifier
```

## Parameters

### Text to Classify

- **Name**: `inputText`
- **Type**: `string`
- **Default**: `""`
- **Description**: Use an expression to reference data in previous nodes or enter static text

### Categories

- **Name**: `categories`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Category to add
- **Placeholder**: Add Category

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: What to do with items that don’t match the categories exactly
- **Placeholder**: Add Option

**Options:**

#### Allow Multiple Classes To Be True
- **Name**: `multiClass`
- **Type**: `boolean`
- **Default**: `false`



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.textClassifier`
- **Display Name**: Text Classifier
- **Internal Name**: `textClassifier`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.textclassifier/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/chains/TextClassifier/TextClassifier.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
