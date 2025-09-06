# Convert to/from binary data

## Description

Move data between binary and JSON properties

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Convert to/from binary data
    parameters:
      mode: "binaryToJson" # Move data from Binary to JSON
      setAllData: true # Whether all JSON data should be replaced with the data retrieved from binary key. Else the data will be written to a single key.
      sourceKey: "data" # The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
      destinationKey: "data" # The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
      convertAllData: true # Whether all JSON data should be converted to binary. Else only the data of one key will be converted.
      sourceKey: "data" # The name of the JSON key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
      destinationKey: "data" # The name the binary key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
      options: {} # Whether to add special marker at the start of your text file. This marker helps some programs understand how to read the file correctly.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.moveBinaryData
```

## Parameters

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"binaryToJson"`
- **Description**: Move data from Binary to JSON

### Set All Data

- **Name**: `setAllData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether all JSON data should be replaced with the data retrieved from binary key. Else the data will be written to a single key.

### Source Key

- **Name**: `sourceKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
- **Placeholder**: data

### Destination Key

- **Name**: `destinationKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".

### Convert All Data

- **Name**: `convertAllData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether all JSON data should be converted to binary. Else only the data of one key will be converted.

### Source Key

- **Name**: `sourceKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the JSON key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
- **Placeholder**: data

### Destination Key

- **Name**: `destinationKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name the binary key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
- **Placeholder**: data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to add special marker at the start of your text file. This marker helps some programs understand how to read the file correctly.
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.moveBinaryData`
- **Display Name**: Convert to/from binary data
- **Internal Name**: `moveBinaryData`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.movebinarydata/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MoveBinaryData/MoveBinaryData.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
