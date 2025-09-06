# Github Trigger

## Description

Starts the workflow when Github events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Github Trigger
    parameters:
      notice: ""
      authentication: "accessToken"
      owner: "{ mode: 'list', value: '' }"
      repository: "{ mode: 'list', value: '' }"
      events: [] # Any time any event is triggered (Wildcard Event)
      options: # Whether the SSL certificate of the n8n host be verified by GitHub when delivering payloads
        insecureSSL: false # Whether the SSL certificate of the n8n host be verified by GitHub when delivering payloads
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.githubTrigger
```

## Parameters

### Only members with owner privileges for an organization or admin privileges for a repository can set up the webhooks this node requires.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Repository Owner

- **Name**: `owner`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select an owner...

### Repository Name

- **Name**: `repository`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select an Repository...

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Any time any event is triggered (Wildcard Event)

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the SSL certificate of the n8n host be verified by GitHub when delivering payloads
- **Placeholder**: Add option

**Options:**

#### Insecure SSL
- **Name**: `insecureSSL`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the SSL certificate of the n8n host be verified by GitHub when delivering payloads



## Node Information

- **Node Type**: `n8n-nodes-base.githubTrigger`
- **Display Name**: Github Trigger
- **Internal Name**: `githubTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.githubtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Github/GithubTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
