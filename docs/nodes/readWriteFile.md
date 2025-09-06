# Read/Write Files from Disk

## Description

Read or write files from the computer that runs n8n

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Read/Write Files from Disk
    parameters:
      info: ""
      operation: "read" # Retrieve one or more files from the computer that runs n8n
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.readWriteFile
```

## Parameters

### Use this node to read and write files on the same computer running n8n. To handle files between different computers please use other nodes (e.g. FTP, HTTP Request, AWS).

- **Name**: `info`
- **Type**: `notice`
- **Default**: `""`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"read"`
- **Description**: Retrieve one or more files from the computer that runs n8n


## Node Information

- **Node Type**: `n8n-nodes-base.readWriteFile`
- **Display Name**: Read/Write Files from Disk
- **Internal Name**: `readWriteFile`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.readwritefile/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Files/ReadWriteFile/ReadWriteFile.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
