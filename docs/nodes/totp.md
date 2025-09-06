# TOTP

## Description

Generate a time-based one-time password

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: TOTP
    parameters:
      operation: "generateSecret"
      options: {} # HMAC hashing algorithm. Defaults to SHA1.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.totp
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"generateSecret"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: HMAC hashing algorithm. Defaults to SHA1.
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.totp`
- **Display Name**: TOTP
- **Internal Name**: `totp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.totp/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Totp/Totp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
