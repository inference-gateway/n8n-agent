# APITemplate.io

## Description

Consume the APITemplate.io API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: APITemplate.io
    parameters:
      resource: "image"
      operation: "create"
      operation: "create"
      operation: "get"
      imageTemplateId: "" # ID of the image template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      pdfTemplateId: "" # ID of the PDF template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      jsonParameters: false
      download: false # Name of the binary property to which to write the data of the read file
      binaryProperty: "data"
      overridesJson: ""
      propertiesJson: ""
      overridesUi: {} # Name of the property
      propertiesUi: {} # Name of the property
      options: # The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf
        fileName: "" # The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.apiTemplateIo
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"image"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`

### Template Name or ID

- **Name**: `imageTemplateId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the image template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Template Name or ID

- **Name**: `pdfTemplateId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the PDF template to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Download

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Name of the binary property to which to write the data of the read file

### Put Output File in Field

- **Name**: `binaryProperty`
- **Type**: `string`
- **Default**: `"data"`

### Overrides (JSON)

- **Name**: `overridesJson`
- **Type**: `json`
- **Default**: `""`
- **Placeholder**: [ {"name": "text_1", "text": "hello world", "textBackgroundColor": "rgba(246, 243, 243, 0)" } ]

### Properties (JSON)

- **Name**: `propertiesJson`
- **Type**: `json`
- **Default**: `""`
- **Placeholder**: { "name": "text_1" }

### Overrides

- **Name**: `overridesUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Name of the property
- **Placeholder**: Add Override

### Properties

- **Name**: `propertiesUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Name of the property
- **Placeholder**: Add Property

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf
- **Placeholder**: Add Field

**Options:**

#### File Name
- **Name**: `fileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf



## Node Information

- **Node Type**: `n8n-nodes-base.apiTemplateIo`
- **Display Name**: APITemplate.io
- **Internal Name**: `apiTemplateIo`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.apitemplateio/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ApiTemplateIo/ApiTemplateIo.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
