# Invoice Ninja Trigger

## Description

Starts the workflow when Invoice Ninja events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Invoice Ninja Trigger
    parameters:
      apiVersion: "v4"
      apiVersion: "v5"
      event: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.invoiceNinjaTrigger
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

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.invoiceNinjaTrigger`
- **Display Name**: Invoice Ninja Trigger
- **Internal Name**: `invoiceNinjaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninjatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/InvoiceNinja/InvoiceNinjaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
