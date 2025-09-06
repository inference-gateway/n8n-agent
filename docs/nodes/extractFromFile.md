# Extract from File

## Description

Convert binary data to JSON

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Extract from File
    parameters:
      operation: "csv" # Transform a CSV file into output items
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.extractFromFile
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"csv"`
- **Description**: Transform a CSV file into output items


## Node Information

- **Node Type**: `n8n-nodes-base.extractFromFile`
- **Display Name**: Extract from File
- **Internal Name**: `extractFromFile`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.extractfromfile/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Files/ExtractFromFile/ExtractFromFile.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
