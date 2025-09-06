# Convert to File

## Description

Convert JSON data to binary data

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Convert to File
    parameters:
      operation: "csv" # Transform input data into a CSV file
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.convertToFile
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"csv"`
- **Description**: Transform input data into a CSV file


## Node Information

- **Node Type**: `n8n-nodes-base.convertToFile`
- **Display Name**: Convert to File
- **Internal Name**: `convertToFile`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.converttofile/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Files/ConvertToFile/ConvertToFile.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
