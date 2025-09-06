# Read Binary File

## Description

Reads a binary file from disk

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Read Binary File
    parameters:
      filePath: "" # Path of the file to read
      dataPropertyName: "data" # Name of the binary property to which to write the data of the read file
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.readBinaryFile
```

## Parameters

### File Path

- **Name**: `filePath`
- **Type**: `string`
- **Default**: `""`
- **Description**: Path of the file to read
- **Placeholder**: /data/example.jpg

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property to which to write the data of the read file


## Node Information

- **Node Type**: `n8n-nodes-base.readBinaryFile`
- **Display Name**: Read Binary File
- **Internal Name**: `readBinaryFile`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.readbinaryfile/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadBinaryFile/ReadBinaryFile.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
