# Check Credential Status

## Description

Checks whether the triggering user has the required Dynamic credential configured. Routes to "Ready" or "Not Ready" and returns auth URLs when the credential is missing.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Check Credential Status
    parameters:
      # No parameters available
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.dynamicCredentialCheck
```

## Parameters

This node has no configurable parameters.

## Node Information

- **Node Type**: `n8n-nodes-base.dynamicCredentialCheck`
- **Display Name**: Check Credential Status
- **Internal Name**: `dynamicCredentialCheck`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dynamiccredentialcheck/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/DynamicCredentialCheck/DynamicCredentialCheck.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
