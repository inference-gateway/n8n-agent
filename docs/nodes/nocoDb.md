# NocoDB

## Description

Read, update, write and delete data from NocoDB

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: NocoDB
    parameters:
      authentication: "nocoDb"
      version: "1"
      version: "2"
      version: "3"
      resource: "row"
      operation: "get" # Create a row
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.nocoDb
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"nocoDb"`

### API Version

- **Name**: `version`
- **Type**: `options`
- **Default**: `"1"`

### API Version

- **Name**: `version`
- **Type**: `options`
- **Default**: `"2"`

### API Version

- **Name**: `version`
- **Type**: `options`
- **Default**: `"3"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"row"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Create a row


## Node Information

- **Node Type**: `n8n-nodes-base.nocoDb`
- **Display Name**: NocoDB
- **Internal Name**: `nocoDb`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nocodb/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/NocoDB/NocoDB.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
