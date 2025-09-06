# AWS Comprehend

## Description

Sends data to Amazon Comprehend

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Comprehend
    parameters:
      resource: "text" # The resource to perform
      operation: "detectDominantLanguage" # Identify the dominant language
      languageCode: "en" # The language code for text
      text: "" # The text to send
      simple: true # Whether to return a simplified version of the response instead of the raw data
      additionalFields: # The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model
        endpointArn: "" # The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsComprehend
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"text"`
- **Description**: The resource to perform

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"detectDominantLanguage"`
- **Description**: Identify the dominant language

### Language Code

- **Name**: `languageCode`
- **Type**: `options`
- **Default**: `"en"`
- **Description**: The language code for text

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text to send

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model
- **Placeholder**: Add Field

**Options:**

#### Endpoint Arn
- **Name**: `endpointArn`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Amazon Resource Name of an endpoint that is associated with a custom entity recognition model



## Node Information

- **Node Type**: `n8n-nodes-base.awsComprehend`
- **Display Name**: AWS Comprehend
- **Internal Name**: `awsComprehend`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/Comprehend/AwsComprehend.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
