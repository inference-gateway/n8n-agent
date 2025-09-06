# DebugHelper

## Description

Causes problems intentionally and generates useful data for debugging

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: DebugHelper
    parameters:
      category: "throwError" # Does nothing
      throwErrorType: "NodeApiError"
      throwErrorMessage: "Node has thrown an error" # The message to send as part of the error
      memorySizeValue: "10" # The approximate amount of memory to generate. Be generous...
      randomDataType: "user"
      nanoidAlphabet: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" # The alphabet to use for generating the nanoIds
      nanoidLength: "16" # The length of each nanoIds
      randomDataSeed: "" # If set, seed to use for generating the data (same seed will generate the same data)
      randomDataCount: "10" # The number of random data items to generate into an array
      randomDataSingleArray: false # Whether to output a single array instead of multiple items
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.debugHelper
```

## Parameters

### Category

- **Name**: `category`
- **Type**: `options`
- **Default**: `"throwError"`
- **Description**: Does nothing

### Error Type

- **Name**: `throwErrorType`
- **Type**: `options`
- **Default**: `"NodeApiError"`

### Error Message

- **Name**: `throwErrorMessage`
- **Type**: `string`
- **Default**: `"Node has thrown an error"`
- **Description**: The message to send as part of the error

### Memory Size to Generate

- **Name**: `memorySizeValue`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: The approximate amount of memory to generate. Be generous...

### Data Type

- **Name**: `randomDataType`
- **Type**: `options`
- **Default**: `"user"`

### NanoId Alphabet

- **Name**: `nanoidAlphabet`
- **Type**: `string`
- **Default**: `"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"`
- **Description**: The alphabet to use for generating the nanoIds

### NanoId Length

- **Name**: `nanoidLength`
- **Type**: `string`
- **Default**: `"16"`
- **Description**: The length of each nanoIds

### Seed

- **Name**: `randomDataSeed`
- **Type**: `string`
- **Default**: `""`
- **Description**: If set, seed to use for generating the data (same seed will generate the same data)
- **Placeholder**: Leave empty for random seed

### Number of Items to Generate

- **Name**: `randomDataCount`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: The number of random data items to generate into an array

### Output as Single Array

- **Name**: `randomDataSingleArray`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to output a single array instead of multiple items


## Node Information

- **Node Type**: `n8n-nodes-base.debugHelper`
- **Display Name**: DebugHelper
- **Internal Name**: `debugHelper`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.debughelper/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/DebugHelper/DebugHelper.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
