# Compression

## Description

Compress and decompress files

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Compression
    parameters:
      operation: "decompress" # Compress files into a zip or gzip archive
      binaryPropertyName: "data" # To process more than one file, use a comma-separated list of the binary fields names
      binaryPropertyName: "data" # To process more than one file, use a comma-separated list of the binary fields names
      outputFormat: "" # Format of the output
      outputFormat: "zip" # Format of the output
      fileName: "" # Name of the output file
      binaryPropertyOutput: "data"
      fileName: "" # Name of the output file
      binaryPropertyOutput: "data"
      outputPrefix: "data" # Prefix to add to the gzip file
      outputPrefix: "file_" # Prefix to add to the decompressed files
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.compression
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"decompress"`
- **Description**: Compress files into a zip or gzip archive

### Input Binary Field(s)

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: To process more than one file, use a comma-separated list of the binary fields names
- **Placeholder**: e.g. data,data2,data3

### Input Binary Field(s)

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: To process more than one file, use a comma-separated list of the binary fields names
- **Placeholder**: e.g. data

### Output Format

- **Name**: `outputFormat`
- **Type**: `options`
- **Default**: `""`
- **Description**: Format of the output

### Output Format

- **Name**: `outputFormat`
- **Type**: `options`
- **Default**: `"zip"`
- **Description**: Format of the output

### File Name

- **Name**: `fileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the output file
- **Placeholder**: e.g. data.zip

### Put Output File in Field

- **Name**: `binaryPropertyOutput`
- **Type**: `string`
- **Default**: `"data"`

### File Name

- **Name**: `fileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the output file
- **Placeholder**: e.g. data.txt

### Put Output File in Field

- **Name**: `binaryPropertyOutput`
- **Type**: `string`
- **Default**: `"data"`

### Output File Prefix

- **Name**: `outputPrefix`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Prefix to add to the gzip file

### Output Prefix

- **Name**: `outputPrefix`
- **Type**: `string`
- **Default**: `"file_"`
- **Description**: Prefix to add to the decompressed files


## Node Information

- **Node Type**: `n8n-nodes-base.compression`
- **Display Name**: Compression
- **Internal Name**: `compression`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.compression/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Compression/Compression.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
