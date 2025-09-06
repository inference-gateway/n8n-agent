# LingvaNex

## Description

Consume LingvaNex API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: LingvaNex
    parameters:
      operation: "translate" # Translate data
      text: "" # The input text to translate
      translateTo: "" # The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      options: # The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        from: "" # The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        platform: "api"
        translateMode: "" # Describe the input text format. Possible value is "html" for translating and preserving html structure. If value is not specified or is other than "html" than plain text is translating.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.lingvaNex
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"translate"`
- **Description**: Translate data

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The input text to translate

### Translate To

- **Name**: `translateTo`
- **Type**: `options`
- **Default**: `""`
- **Description**: The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Additional Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add option

**Options:**

#### From
- **Name**: `from`
- **Type**: `options`
- **Default**: `""`
- **Description**: The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Platform
- **Name**: `platform`
- **Type**: `string`
- **Default**: `"api"`

#### Translate Mode
- **Name**: `translateMode`
- **Type**: `string`
- **Default**: `""`
- **Description**: Describe the input text format. Possible value is "html" for translating and preserving html structure. If value is not specified or is other than "html" than plain text is translating.



## Node Information

- **Node Type**: `n8n-nodes-base.lingvaNex`
- **Display Name**: LingvaNex
- **Internal Name**: `lingvaNex`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.lingvanex/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/LingvaNex/LingvaNex.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
