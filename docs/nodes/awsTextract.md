# AWS Textract

## Description

Sends data to Amazon Textract

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Textract
    parameters:
      operation: "analyzeExpense"
      binaryPropertyName: "data" # The name of the input field containing the binary file data to be uploaded. Supported file types: PNG, JPEG.
      simple: true # Whether to return a simplified version of the response instead of the raw data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsTextract
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"analyzeExpense"`

### Input Data Field Name

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the input field containing the binary file data to be uploaded. Supported file types: PNG, JPEG.

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data


## Node Information

- **Node Type**: `n8n-nodes-base.awsTextract`
- **Display Name**: AWS Textract
- **Internal Name**: `awsTextract`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awstextract/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/Textract/AwsTextract.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
