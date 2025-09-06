# WhatsApp Business Cloud

## Description

Access WhatsApp API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: WhatsApp Business Cloud
    parameters:
      resource: "message"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.whatsApp
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`


## Node Information

- **Node Type**: `n8n-nodes-base.whatsApp`
- **Display Name**: WhatsApp Business Cloud
- **Internal Name**: `whatsApp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/WhatsApp/WhatsApp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
