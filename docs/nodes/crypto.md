# Crypto

## Description

Provide cryptographic utilities

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Crypto
    parameters:
      action: "hash" # Generate random string
      type: "MD5" # The hash type to use
      binaryData: false # Whether the data to hashed should be taken from binary field
      binaryPropertyName: "data" # Name of the binary property which contains the input data
      value: "" # The value that should be hashed
      dataPropertyName: "data" # Name of the property to which to write the hash
      encoding: "hex"
      type: "MD5" # The hash type to use
      value: "" # The value of which the hmac should be created
      dataPropertyName: "data" # Name of the property to which to write the hmac
      secret: ""
      encoding: "hex"
      value: "" # The value that should be signed
      dataPropertyName: "data" # Name of the property to which to write the signed value
      algorithm: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      encoding: "hex"
      privateKey: "" # Private key to use when signing the string
      dataPropertyName: "data" # Name of the property to which to write the random string
      encodingType: "uuid" # Encoding that will be used to generate string
      stringLength: "32" # Length of the generated string
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.crypto
```

## Parameters

### Action

- **Name**: `action`
- **Type**: `options`
- **Default**: `"hash"`
- **Description**: Generate random string

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"MD5"`
- **Description**: The hash type to use

### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data to hashed should be taken from binary field

### Binary Property Name

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property which contains the input data

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: The value that should be hashed

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to write the hash

### Encoding

- **Name**: `encoding`
- **Type**: `options`
- **Default**: `"hex"`

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"MD5"`
- **Description**: The hash type to use

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: The value of which the hmac should be created

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to write the hmac

### Secret

- **Name**: `secret`
- **Type**: `string`
- **Default**: `""`

### Encoding

- **Name**: `encoding`
- **Type**: `options`
- **Default**: `"hex"`

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: The value that should be signed

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to write the signed value

### Algorithm Name or ID

- **Name**: `algorithm`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Encoding

- **Name**: `encoding`
- **Type**: `options`
- **Default**: `"hex"`

### Private Key

- **Name**: `privateKey`
- **Type**: `string`
- **Default**: `""`
- **Description**: Private key to use when signing the string

### Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to write the random string

### Type

- **Name**: `encodingType`
- **Type**: `options`
- **Default**: `"uuid"`
- **Description**: Encoding that will be used to generate string

### Length

- **Name**: `stringLength`
- **Type**: `number`
- **Default**: `"32"`
- **Description**: Length of the generated string


## Node Information

- **Node Type**: `n8n-nodes-base.crypto`
- **Display Name**: Crypto
- **Internal Name**: `crypto`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.crypto/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Crypto/Crypto.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
