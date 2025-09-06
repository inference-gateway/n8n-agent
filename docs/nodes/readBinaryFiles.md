# Read Binary Files

## Description

Reads binary files from disk

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Read Binary Files
    parameters:
      fileSelector: "" # Pattern for files to read
      dataPropertyName: "data" # Name of the binary property to which to write the data of the read files
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.readBinaryFiles
```

## Parameters

### File Selector

- **Name**: `fileSelector`
- **Type**: `string`
- **Default**: `""`
- **Description**: Pattern for files to read
- **Placeholder**: *.jpg

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property to which to write the data of the read files


## Node Information

- **Node Type**: `n8n-nodes-base.readBinaryFiles`
- **Display Name**: Read Binary Files
- **Internal Name**: `readBinaryFiles`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.readbinaryfiles/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadBinaryFiles/ReadBinaryFiles.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
