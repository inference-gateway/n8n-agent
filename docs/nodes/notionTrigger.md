# Notion Trigger

## Description

Starts the workflow when Notion events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Notion Trigger
    parameters:
      event: "pageAddedToDatabase"
      notionNotice: ""
      databaseId: "{ mode: 'list', value: '' }" # The Notion Database to operate on
      simple: true # Whether to return a simplified version of the response instead of the raw data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.notionTrigger
```

## Parameters

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"pageAddedToDatabase"`

### In Notion, make sure to <a href="https://www.notion.so/help/add-and-manage-connections-with-the-api" target="_blank">add your connection</a> to the pages you want to access.

- **Name**: `notionNotice`
- **Type**: `notice`
- **Default**: `""`

### Database

- **Name**: `databaseId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The Notion Database to operate on
- **Placeholder**: Select a Database...

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data


## Node Information

- **Node Type**: `n8n-nodes-base.notionTrigger`
- **Display Name**: Notion Trigger
- **Internal Name**: `notionTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notiontrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Notion/NotionTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
