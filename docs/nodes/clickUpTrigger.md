# ClickUp Trigger

## Description

Handle ClickUp events via webhooks (Beta)

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: ClickUp Trigger
    parameters:
      authentication: "accessToken"
      team: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      events: []
      filters:
        folderId: ""
        listId: ""
        spaceId: ""
        taskId: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.clickUpTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Team Name or ID

- **Name**: `team`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Field

**Options:**

#### Folder ID
- **Name**: `folderId`
- **Type**: `string`
- **Default**: `""`

#### List ID
- **Name**: `listId`
- **Type**: `string`
- **Default**: `""`

#### Space ID
- **Name**: `spaceId`
- **Type**: `string`
- **Default**: `""`

#### Task ID
- **Name**: `taskId`
- **Type**: `string`
- **Default**: `""`



## Node Information

- **Node Type**: `n8n-nodes-base.clickUpTrigger`
- **Display Name**: ClickUp Trigger
- **Internal Name**: `clickUpTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clickuptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ClickUp/ClickUpTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
