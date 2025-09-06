# Ldap

## Description

Interact with LDAP servers

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Ldap
    parameters:
      operation: "search" # Compare an attribute
      nodeDebug: false
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.ldap
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"search"`
- **Description**: Compare an attribute

### Debug

- **Name**: `nodeDebug`
- **Type**: `boolean`
- **Default**: `false`


## Node Information

- **Node Type**: `n8n-nodes-base.ldap`
- **Display Name**: Ldap
- **Internal Name**: `ldap`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ldap/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Ldap/Ldap.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
