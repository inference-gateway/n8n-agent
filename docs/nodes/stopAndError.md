# Stop and Error

## Description

Throw an error in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Stop and Error
    parameters:
      errorType: "errorMessage" # Type of error to throw
      errorMessage: ""
      errorObject: "" # Object containing error properties
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.stopAndError
```

## Parameters

### Error Type

- **Name**: `errorType`
- **Type**: `options`
- **Default**: `"errorMessage"`
- **Description**: Type of error to throw

### Error Message

- **Name**: `errorMessage`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: An error occurred!

### Error Object

- **Name**: `errorObject`
- **Type**: `json`
- **Default**: `""`
- **Description**: Object containing error properties


## Node Information

- **Node Type**: `n8n-nodes-base.stopAndError`
- **Display Name**: Stop and Error
- **Internal Name**: `stopAndError`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stopanderror/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/StopAndError/StopAndError.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
