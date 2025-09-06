# Microsoft OneDrive

## Description

Consume Microsoft OneDrive API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft OneDrive
    parameters:
      resource: "file"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftOneDrive
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"file"`


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftOneDrive`
- **Display Name**: Microsoft OneDrive
- **Internal Name**: `microsoftOneDrive`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDrive.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
