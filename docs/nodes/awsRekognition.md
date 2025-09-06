# AWS Rekognition

## Description

Sends data to AWS Rekognition

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Rekognition
    parameters:
      resource: "image"
      operation: "analyze"
      type: "detectFaces"
      binaryData: false # Whether the image to analyze should be taken from binary field
      binaryPropertyName: "data"
      bucket: "" # Name of the S3 bucket
      name: "" # S3 object key name
      additionalFields: {} # Height of the bounding box as a ratio of the overall image height
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsRekognition
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"image"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"analyze"`

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"detectFaces"`

### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the image to analyze should be taken from binary field

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Bucket

- **Name**: `bucket`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the S3 bucket

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: S3 object key name

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Height of the bounding box as a ratio of the overall image height
- **Placeholder**: Add Field


## Node Information

- **Node Type**: `n8n-nodes-base.awsRekognition`
- **Display Name**: AWS Rekognition
- **Internal Name**: `awsRekognition`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsrekognition/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/Rekognition/AwsRekognition.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
