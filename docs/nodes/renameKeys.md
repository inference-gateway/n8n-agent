# Rename Keys

## Description

Update item field names

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Rename Keys
    parameters:
      keys: {} # Adds a key which should be renamed
      additionalOptions: {} # Adds a regular expression
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.renameKeys
```

## Parameters

### Keys

- **Name**: `keys`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Adds a key which should be renamed
- **Placeholder**: Add new key

### Additional Options

- **Name**: `additionalOptions`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Adds a regular expression
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.renameKeys`
- **Display Name**: Rename Keys
- **Internal Name**: `renameKeys`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.renamekeys/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/RenameKeys/RenameKeys.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
