# JWT

## Description

JWT

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: JWT
    parameters:
      operation: "sign"
      useJson: false # Whether to use JSON to build the claims
      claims: # Identifies the recipients that the JWT is intended for
        audience: "" # Identifies the recipients that the JWT is intended for
        expiresIn: "3600" # The lifetime of the token in seconds
        issuer: "" # Identifies the principal that issued the JWT
        jwtid: "" # Unique identifier for the JWT
        notBefore: "0" # The time before which the JWT must not be accepted for processing
        subject: "" # Identifies the principal that is the subject of the JWT
      claimsJson: "{\n  "my_field_1": "value 1",\n  "my_field_2": "value 2"\n}\n" # Claims to add to the token in JSON format
      token: "" # The token to verify or decode
      options: {} # Whether to return the complete decoded token with information about the header and signature or just the payload
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jwt
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"sign"`

### Use JSON to Build Payload

- **Name**: `useJson`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to use JSON to build the claims

### Payload Claims

- **Name**: `claims`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Identifies the recipients that the JWT is intended for
- **Placeholder**: Add Claim

**Options:**

#### Audience
- **Name**: `audience`
- **Type**: `string`
- **Default**: `""`
- **Description**: Identifies the recipients that the JWT is intended for

#### Expires In
- **Name**: `expiresIn`
- **Type**: `number`
- **Default**: `"3600"`
- **Description**: The lifetime of the token in seconds

#### Issuer
- **Name**: `issuer`
- **Type**: `string`
- **Default**: `""`
- **Description**: Identifies the principal that issued the JWT

#### JWT ID
- **Name**: `jwtid`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the JWT

#### Not Before
- **Name**: `notBefore`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The time before which the JWT must not be accepted for processing

#### Subject
- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`
- **Description**: Identifies the principal that is the subject of the JWT


### Payload Claims (JSON)

- **Name**: `claimsJson`
- **Type**: `json`
- **Default**: `"{\\n  \"my_field_1\": \"value 1\",\\n  \"my_field_2\": \"value 2\"\\n}\\n"`
- **Description**: Claims to add to the token in JSON format

### Token

- **Name**: `token`
- **Type**: `string`
- **Default**: `""`
- **Description**: The token to verify or decode

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to return the complete decoded token with information about the header and signature or just the payload
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.jwt`
- **Display Name**: JWT
- **Internal Name**: `jwt`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.jwt/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Jwt/Jwt.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
