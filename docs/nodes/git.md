# Git

## Description

Control git.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Git
    parameters:
      authentication: "none" # The way to authenticate
      operation: "log" # Add a file or folder to commit
      repositoryPath: "" # Local path of the git repository to operate on
      repositoryPath: "" # Local path to which the git repository should be cloned into
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.git
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: The way to authenticate

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"log"`
- **Description**: Add a file or folder to commit

### Repository Path

- **Name**: `repositoryPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: Local path of the git repository to operate on
- **Placeholder**: /tmp/repository

### New Repository Path

- **Name**: `repositoryPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: Local path to which the git repository should be cloned into
- **Placeholder**: /tmp/repository


## Node Information

- **Node Type**: `n8n-nodes-base.git`
- **Display Name**: Git
- **Internal Name**: `git`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.git/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Git/Git.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
