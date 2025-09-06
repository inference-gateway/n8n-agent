# Jira Software

## Description

Consume Jira Software API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Jira Software
    parameters:
      jiraVersion: "cloud"
      resource: "issue" # Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jira
```

## Parameters

### Jira Version

- **Name**: `jiraVersion`
- **Type**: `options`
- **Default**: `"cloud"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"issue"`
- **Description**: Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask


## Node Information

- **Node Type**: `n8n-nodes-base.jira`
- **Display Name**: Jira Software
- **Internal Name**: `jira`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jira/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Jira/Jira.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
