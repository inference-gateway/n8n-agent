# HTML

## Description

Work with HTML

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: HTML
    parameters:
      operation: "generateHtmlTemplate"
      html: "placeholder" # HTML template to render
      notice: ""
      sourceData: "json" # If HTML should be read from binary or JSON data
      dataPropertyName: "data"
      dataPropertyName: "data" # Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.
      options: # Whether to remove automatically all spaces and newlines from the beginning and end of the values
        trimValues: true # Whether to remove automatically all spaces and newlines from the beginning and end of the values
        cleanUpText: true # Whether to remove leading and trailing whitespaces, line breaks (newlines) and condense multiple consecutive whitespaces into a single space
      options: # Whether to capitalize the headers
        capitalize: false # Whether to capitalize the headers
        customStyling: false # Whether to use custom styling
        caption: "" # Caption to add to the table
        tableAttributes: "" # Attributes to attach to the table
        headerAttributes: "" # Attributes to attach to the table header
        rowAttributes: "" # Attributes to attach to the table row
        cellAttributes: "" # Attributes to attach to the table cell
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.html
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"generateHtmlTemplate"`

### HTML Template

- **Name**: `html`
- **Type**: `string`
- **Default**: `"placeholder"`
- **Description**: HTML template to render

### <b>Tips</b>: Type ctrl+space for completions. Use <code>{{ }}</code> for expressions and <code>&lt;style&gt;</code> tags for CSS. JS in <code>&lt;script&gt;</code> tags is included but not executed in n8n.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Source Data

- **Name**: `sourceData`
- **Type**: `options`
- **Default**: `"json"`
- **Description**: If HTML should be read from binary or JSON data

### Input Binary Field

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### JSON Property

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to remove automatically all spaces and newlines from the beginning and end of the values
- **Placeholder**: Add option

**Options:**

#### Trim Values
- **Name**: `trimValues`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to remove automatically all spaces and newlines from the beginning and end of the values

#### Clean Up Text
- **Name**: `cleanUpText`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to remove leading and trailing whitespaces, line breaks (newlines) and condense multiple consecutive whitespaces into a single space


### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to capitalize the headers
- **Placeholder**: Add option

**Options:**

#### Capitalize Headers
- **Name**: `capitalize`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to capitalize the headers

#### Custom Styling
- **Name**: `customStyling`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use custom styling

#### Caption
- **Name**: `caption`
- **Type**: `string`
- **Default**: `""`
- **Description**: Caption to add to the table

#### Table Attributes
- **Name**: `tableAttributes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Attributes to attach to the table

#### Header Attributes
- **Name**: `headerAttributes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Attributes to attach to the table header

#### Row Attributes
- **Name**: `rowAttributes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Attributes to attach to the table row

#### Cell Attributes
- **Name**: `cellAttributes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Attributes to attach to the table cell



## Node Information

- **Node Type**: `n8n-nodes-base.html`
- **Display Name**: HTML
- **Internal Name**: `html`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Html/Html.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
