# Execute Command

## Description

Executes a command on the host

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Execute Command
    parameters:
      executeOnce: true # Whether to execute only once instead of once for each entry
      command: "" # The command to execute
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.executeCommand
```

## Parameters

### Execute Once

- **Name**: `executeOnce`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to execute only once instead of once for each entry

### Command

- **Name**: `command`
- **Type**: `string`
- **Default**: `""`
- **Description**: The command to execute
- **Placeholder**: echo "test"


## Node Information

- **Node Type**: `n8n-nodes-base.executeCommand`
- **Display Name**: Execute Command
- **Internal Name**: `executeCommand`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.executecommand/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ExecuteCommand/ExecuteCommand.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
