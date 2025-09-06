# Invoice Ninja

## Description

Consume Invoice Ninja API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Invoice Ninja
    parameters:
      apiVersion: "v4"
      apiVersion: "v5"
      resource: "client"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.invoiceNinja
```

## Parameters

### API Version

- **Name**: `apiVersion`
- **Type**: `options`
- **Default**: `"v4"`

### API Version

- **Name**: `apiVersion`
- **Type**: `options`
- **Default**: `"v5"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"client"`


## Node Information

- **Node Type**: `n8n-nodes-base.invoiceNinja`
- **Display Name**: Invoice Ninja
- **Internal Name**: `invoiceNinja`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/InvoiceNinja/InvoiceNinja.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
