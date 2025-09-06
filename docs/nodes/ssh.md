# SSH

## Description

Execute commands via SSH

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: SSH
    parameters:
      authentication: "password"
      resource: "command"
      operation: "execute" # Execute a command
      command: "" # The command to be executed on a remote device
      cwd: "/"
      operation: "upload" # Download a file
      binaryPropertyName: "data"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.ssh
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"password"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"command"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"execute"`
- **Description**: Execute a command

### Command

- **Name**: `command`
- **Type**: `string`
- **Default**: `""`
- **Description**: The command to be executed on a remote device

### Working Directory

- **Name**: `cwd`
- **Type**: `string`
- **Default**: `"/"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"upload"`
- **Description**: Download a file

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`


## Node Information

- **Node Type**: `n8n-nodes-base.ssh`
- **Display Name**: SSH
- **Internal Name**: `ssh`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssh/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Ssh/Ssh.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
