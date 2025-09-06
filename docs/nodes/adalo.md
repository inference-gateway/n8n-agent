# Adalo

## Description

Consume Adalo API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Adalo
    parameters:
      resource: "collection"
      operation: "getAll" # Create a row
      collectionId: "" # Open your Adalo application and click on the three buttons beside the collection name, then select API Documentation
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.adalo
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"collection"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Create a row

### Collection ID

- **Name**: `collectionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Open your Adalo application and click on the three buttons beside the collection name, then select API Documentation


## Node Information

- **Node Type**: `n8n-nodes-base.adalo`
- **Display Name**: Adalo
- **Internal Name**: `adalo`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.adalo/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Adalo/Adalo.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
