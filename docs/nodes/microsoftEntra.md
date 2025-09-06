# Microsoft Entra ID

## Description

Interact with Microsoft Entra ID API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Entra ID
    parameters:
      resource: "user"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftEntra
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"user"`


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftEntra`
- **Display Name**: Microsoft Entra ID
- **Internal Name**: `microsoftEntra`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftentra/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/Entra/MicrosoftEntra.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
