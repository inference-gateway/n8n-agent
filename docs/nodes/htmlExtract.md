# HTML Extract

## Description

Extracts data from HTML

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: HTML Extract
    parameters:
      sourceData: "json" # If HTML should be read from binary or JSON data
      dataPropertyName: "data"
      dataPropertyName: "data" # Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.
      extractionValues: {} # The key under which the extracted value should be saved
      options: # Whether to remove automatically all spaces and newlines from the beginning and end of the values
        trimValues: true # Whether to remove automatically all spaces and newlines from the beginning and end of the values
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.htmlExtract
```

## Parameters

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

### Extraction Values

- **Name**: `extractionValues`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The key under which the extracted value should be saved
- **Placeholder**: Add Value

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



## Node Information

- **Node Type**: `n8n-nodes-base.htmlExtract`
- **Display Name**: HTML Extract
- **Internal Name**: `htmlExtract`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.htmlextract/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/HtmlExtract/HtmlExtract.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
