# XML

## Description

Convert data from and to XML

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: XML
    parameters:
      mode: "xmlToJson" # Converts data from JSON to XML
      xmlNotice: ""
      dataPropertyName: "data" # Name of the property to which to contains the converted XML data
      options: # Whether to allow using characters from the Unicode surrogate blocks
        allowSurrogateChars: false # Whether to allow using characters from the Unicode surrogate blocks
        attrkey: "$" # Prefix that is used to access the attributes
      dataPropertyName: "data" # Name of the property which contains the XML data to convert
      options: # Prefix that is used to access the attributes
        attrkey: "$" # Prefix that is used to access the attributes
        charkey: "_" # Prefix that is used to access the character content
        explicitArray: false # Whether to always put child nodes in an array if true; otherwise an array is created only if there is more than one
        explicitRoot: true # Whether to set this if you want to get the root node in the resulting object
        ignoreAttrs: false # Whether to ignore all XML attributes and only create text nodes
        mergeAttrs: true # Whether to merge attributes and child elements as properties of the parent, instead of keying attributes off a child attribute object. This option is ignored if ignoreAttrs is true.
        normalize: false # Whether to trim whitespaces inside text nodes
        normalizeTags: false # Whether to normalize all tag names to lowercase
        trim: false # Whether to trim the whitespace at the beginning and end of text nodes
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.xml
```

## Parameters

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"xmlToJson"`
- **Description**: Converts data from JSON to XML

### If your XML is inside a binary file, use the 'Extract from File' node to convert it to text first

- **Name**: `xmlNotice`
- **Type**: `notice`
- **Default**: `""`

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to contains the converted XML data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to allow using characters from the Unicode surrogate blocks
- **Placeholder**: Add option

**Options:**

#### Allow Surrogate Chars
- **Name**: `allowSurrogateChars`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to allow using characters from the Unicode surrogate blocks

#### Attribute Key
- **Name**: `attrkey`
- **Type**: `string`
- **Default**: `"$"`
- **Description**: Prefix that is used to access the attributes


### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property which contains the XML data to convert

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Prefix that is used to access the attributes
- **Placeholder**: Add option

**Options:**

#### Attribute Key
- **Name**: `attrkey`
- **Type**: `string`
- **Default**: `"$"`
- **Description**: Prefix that is used to access the attributes

#### Character Key
- **Name**: `charkey`
- **Type**: `string`
- **Default**: `"_"`
- **Description**: Prefix that is used to access the character content

#### Explicit Array
- **Name**: `explicitArray`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to always put child nodes in an array if true; otherwise an array is created only if there is more than one

#### Explicit Root
- **Name**: `explicitRoot`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to set this if you want to get the root node in the resulting object

#### Ignore Attributes
- **Name**: `ignoreAttrs`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to ignore all XML attributes and only create text nodes

#### Merge Attributes
- **Name**: `mergeAttrs`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to merge attributes and child elements as properties of the parent, instead of keying attributes off a child attribute object. This option is ignored if ignoreAttrs is true.

#### Normalize
- **Name**: `normalize`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to trim whitespaces inside text nodes

#### Normalize Tags
- **Name**: `normalizeTags`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to normalize all tag names to lowercase

#### Trim
- **Name**: `trim`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to trim the whitespace at the beginning and end of text nodes



## Node Information

- **Node Type**: `n8n-nodes-base.xml`
- **Display Name**: XML
- **Internal Name**: `xml`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.xml/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Xml/Xml.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
