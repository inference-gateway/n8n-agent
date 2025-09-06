# AWS ELB

## Description

Sends data to AWS ELB API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS ELB
    parameters:
      resource: "loadBalancer"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsElb
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"loadBalancer"`


## Node Information

- **Node Type**: `n8n-nodes-base.awsElb`
- **Display Name**: AWS ELB
- **Internal Name**: `awsElb`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awselb/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/ELB/AwsElb.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
