# Google Translate

## Description

Translate data using Google Translate

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Translate
    parameters:
      authentication: "serviceAccount"
      authentication: "oAuth2"
      resource: "language"
      operation: "translate" # Translate data
      text: "" # The input text to translate
      translateTo: "" # The language to use for translation of the input text, set to one of the language codes listed in <a href="https://cloud.google.com/translate/docs/languages">Language Support</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleTranslate
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"serviceAccount"`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"language"`

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


## Node Information

- **Node Type**: `n8n-nodes-base.googleTranslate`
- **Display Name**: Google Translate
- **Internal Name**: `googleTranslate`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletranslate/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Translate/GoogleTranslate.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
