# Mindee

## Description

Consume Mindee API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Mindee
    parameters:
      apiVersion: "1" # Which Mindee API Version to use
      apiVersion: "3" # Which Mindee API Version to use
      apiVersion: "4" # Which Mindee API Version to use
      resource: "receipt"
      operation: "predict"
      binaryPropertyName: "data"
      rawData: false # Whether to return the data exactly in the way it got received from the API
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.mindee
```

## Parameters

### API Version

- **Name**: `apiVersion`
- **Type**: `options`
- **Default**: `"1"`
- **Description**: Which Mindee API Version to use

### API Version

- **Name**: `apiVersion`
- **Type**: `options`
- **Default**: `"3"`
- **Description**: Which Mindee API Version to use

### API Version

- **Name**: `apiVersion`
- **Type**: `options`
- **Default**: `"4"`
- **Description**: Which Mindee API Version to use

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"receipt"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"predict"`

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### RAW Data

- **Name**: `rawData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return the data exactly in the way it got received from the API


## Node Information

- **Node Type**: `n8n-nodes-base.mindee`
- **Display Name**: Mindee
- **Internal Name**: `mindee`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mindee/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mindee/Mindee.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
