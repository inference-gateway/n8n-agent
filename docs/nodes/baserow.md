# Baserow

## Description

Consume the Baserow API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Baserow
    parameters:
      authentication: "usernamePassword"
      resource: "row"
      operation: "getAll" # Create up to 200 rows in one request
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.baserow
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"usernamePassword"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"row"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Create up to 200 rows in one request


## Node Information

- **Node Type**: `n8n-nodes-base.baserow`
- **Display Name**: Baserow
- **Internal Name**: `baserow`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.baserow/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Baserow/Baserow.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
