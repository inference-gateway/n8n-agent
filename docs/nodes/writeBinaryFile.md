# Write Binary File

## Description

Writes a binary file to disk

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Write Binary File
    parameters:
      fileName: "" # Path to which the file should be written
      dataPropertyName: "data" # Name of the binary property which contains the data for the file to be written
      options: # Whether to append to an existing file
        append: false # Whether to append to an existing file
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.writeBinaryFile
```

## Parameters

### File Name

- **Name**: `fileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Path to which the file should be written
- **Placeholder**: /data/example.jpg

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property which contains the data for the file to be written

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to append to an existing file
- **Placeholder**: Add option

**Options:**

#### Append
- **Name**: `append`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to append to an existing file



## Node Information

- **Node Type**: `n8n-nodes-base.writeBinaryFile`
- **Display Name**: Write Binary File
- **Internal Name**: `writeBinaryFile`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.writebinaryfile/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/WriteBinaryFile/WriteBinaryFile.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
