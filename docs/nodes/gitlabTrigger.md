# GitLab Trigger

## Description

Starts the workflow when GitLab events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GitLab Trigger
    parameters:
      authentication: "accessToken"
      owner: "" # Owner of the repository
      repository: "" # The name of the repository
      events: [] # Any time any event is triggered (Wildcard Event)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.gitlabTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Repository Owner

- **Name**: `owner`
- **Type**: `string`
- **Default**: `""`
- **Description**: Owner of the repository
- **Placeholder**: n8n-io

### Repository Name

- **Name**: `repository`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the repository
- **Placeholder**: n8n

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Any time any event is triggered (Wildcard Event)


## Node Information

- **Node Type**: `n8n-nodes-base.gitlabTrigger`
- **Display Name**: GitLab Trigger
- **Internal Name**: `gitlabTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gitlabtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Gitlab/GitlabTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
