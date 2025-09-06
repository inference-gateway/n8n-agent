# Venafi TLS Protect Datacenter Trigger

## Description

Starts the workflow when Venafi events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Venafi TLS Protect Datacenter Trigger
    parameters:
      triggerOn: "certificateExpired"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.venafiTlsProtectDatacenterTrigger
```

## Parameters

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `"certificateExpired"`


## Node Information

- **Node Type**: `n8n-nodes-base.venafiTlsProtectDatacenterTrigger`
- **Display Name**: Venafi TLS Protect Datacenter Trigger
- **Internal Name**: `venafiTlsProtectDatacenterTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacentertrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenterTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
