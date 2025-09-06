# Read PDF

## Description

Reads a PDF and extracts its content

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Read PDF
    parameters:
      binaryPropertyName: "data" # Name of the binary property from which to read the PDF file
      encrypted: false
      password: "" # Password to decrypt the PDF file with
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.readPDF
```

## Parameters

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property from which to read the PDF file

### Encrypted

- **Name**: `encrypted`
- **Type**: `boolean`
- **Default**: `false`

### Password

- **Name**: `password`
- **Type**: `string`
- **Default**: `""`
- **Description**: Password to decrypt the PDF file with


## Node Information

- **Node Type**: `n8n-nodes-base.readPDF`
- **Display Name**: Read PDF
- **Internal Name**: `readPDF`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.readpdf/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadPdf/ReadPDF.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
