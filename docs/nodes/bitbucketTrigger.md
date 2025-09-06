# Bitbucket Trigger

## Description

Handle Bitbucket events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Bitbucket Trigger
    parameters:
      resource: "workspace"
      workspace: "" # The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      events: [] # The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      repository: "" # The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      events: [] # The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.bitbucketTrigger
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"workspace"`

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Event Names or IDs

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Repository Name or ID

- **Name**: `repository`
- **Type**: `options`
- **Default**: `""`
- **Description**: The repository of which to listen to the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Event Names or IDs

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The events to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


## Node Information

- **Node Type**: `n8n-nodes-base.bitbucketTrigger`
- **Display Name**: Bitbucket Trigger
- **Internal Name**: `bitbucketTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bitbuckettrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Bitbucket/BitbucketTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
