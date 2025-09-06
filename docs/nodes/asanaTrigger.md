# Asana Trigger

## Description

Starts the workflow when Asana events occur.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Asana Trigger
    parameters:
      authentication: "accessToken"
      resource: "" # The resource ID to subscribe to. The resource can be a task or project.
      workspace: "" # The workspace ID the resource is registered under. This is only required if you want to allow overriding existing webhooks. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.asanaTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `string`
- **Default**: `""`
- **Description**: The resource ID to subscribe to. The resource can be a task or project.

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace ID the resource is registered under. This is only required if you want to allow overriding existing webhooks. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


## Node Information

- **Node Type**: `n8n-nodes-base.asanaTrigger`
- **Display Name**: Asana Trigger
- **Internal Name**: `asanaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.asanatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Asana/AsanaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
