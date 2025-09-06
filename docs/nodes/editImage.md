# Edit Image

## Description

Edits an image like blur, resize or adding border and text

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Edit Image
    parameters:
      operation: "border" # Returns image information like resolution
      dataPropertyName: "data" # Name of the binary property in which the image data can be found
      operations: {} # The operations to perform
      options: # File name to set in binary data
        fileName: "" # File name to set in binary data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.editImage
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"border"`
- **Description**: Returns image information like resolution

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property in which the image data can be found

### Operations

- **Name**: `operations`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The operations to perform
- **Placeholder**: Add Operation

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: File name to set in binary data
- **Placeholder**: Add option

**Options:**

#### File Name
- **Name**: `fileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: File name to set in binary data



## Node Information

- **Node Type**: `n8n-nodes-base.editImage`
- **Display Name**: Edit Image
- **Internal Name**: `editImage`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.editimage/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/EditImage/EditImage.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
