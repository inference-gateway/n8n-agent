# Google Perspective

## Description

Consume Google Perspective API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Perspective
    parameters:
      operation: "analyzeComment"
      text: ""
      requestedAttributesUi: {} # Attribute to analyze in the text. Details <a href="https://developers.perspectiveapi.com/s/about-the-api-attributes-and-languages">here</a>.
      options: # Languages of the text input. If unspecified, the API will auto-detect the comment language. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        languages: "" # Languages of the text input. If unspecified, the API will auto-detect the comment language. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googlePerspective
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"analyzeComment"`

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`

### Attributes to Analyze

- **Name**: `requestedAttributesUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Attribute to analyze in the text. Details <a href="https://developers.perspectiveapi.com/s/about-the-api-attributes-and-languages">here</a>.
- **Placeholder**: Add Atrribute

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Languages of the text input. If unspecified, the API will auto-detect the comment language. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add option

**Options:**

#### Language Name or ID
- **Name**: `languages`
- **Type**: `options`
- **Default**: `""`
- **Description**: Languages of the text input. If unspecified, the API will auto-detect the comment language. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.



## Node Information

- **Node Type**: `n8n-nodes-base.googlePerspective`
- **Display Name**: Google Perspective
- **Internal Name**: `googlePerspective`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleperspective/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Perspective/GooglePerspective.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
