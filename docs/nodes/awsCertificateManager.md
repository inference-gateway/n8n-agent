# AWS Certificate Manager

## Description

Sends data to AWS Certificate Manager

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Certificate Manager
    parameters:
      resource: "certificate"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsCertificateManager
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"certificate"`


## Node Information

- **Node Type**: `n8n-nodes-base.awsCertificateManager`
- **Display Name**: AWS Certificate Manager
- **Internal Name**: `awsCertificateManager`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/CertificateManager/AwsCertificateManager.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
