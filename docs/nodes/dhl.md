# DHL

## Description

Consume DHL API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: DHL
    parameters:
      resource: "shipment"
      operation: "get"
      trackingNumber: ""
      options: # DHL will return more detailed information on the shipment when you provide the Recipient's Postal Code - it acts as a verification step
        recipientPostalCode: "" # DHL will return more detailed information on the shipment when you provide the Recipient's Postal Code - it acts as a verification step
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.dhl
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `hidden`
- **Default**: `"shipment"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`

### Tracking Number

- **Name**: `trackingNumber`
- **Type**: `string`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: DHL will return more detailed information on the shipment when you provide the Recipient's Postal Code - it acts as a verification step
- **Placeholder**: Add option

**Options:**

#### Recipient's Postal Code
- **Name**: `recipientPostalCode`
- **Type**: `string`
- **Default**: `""`
- **Description**: DHL will return more detailed information on the shipment when you provide the Recipient's Postal Code - it acts as a verification step



## Node Information

- **Node Type**: `n8n-nodes-base.dhl`
- **Display Name**: DHL
- **Internal Name**: `dhl`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dhl/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Dhl/Dhl.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
