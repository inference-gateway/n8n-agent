# Google Cloud Realtime Database

## Description

Interact with Google Firebase - Realtime Database API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Cloud Realtime Database
    parameters:
      projectId: "" # As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "create" # Write data to a database
      path: "" # Object path on database. Do not append .json.
      path: "" # Object path on database. Do not append .json.
      attributes: "" # Attributes to save
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleFirebaseRealtimeDatabase
```

## Parameters

### Project Name or ID

- **Name**: `projectId`
- **Type**: `options`
- **Default**: `""`
- **Description**: As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Write data to a database

### Object Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: Object path on database. Do not append .json.
- **Placeholder**: e.g. /app/users

### Object Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: Object path on database. Do not append .json.
- **Placeholder**: e.g. /app/users

### Columns / Attributes

- **Name**: `attributes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Attributes to save
- **Placeholder**: age, name, city


## Node Information

- **Node Type**: `n8n-nodes-base.googleFirebaseRealtimeDatabase`
- **Display Name**: Google Cloud Realtime Database
- **Internal Name**: `googleFirebaseRealtimeDatabase`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlefirebaserealtimedatabase/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Firebase/RealtimeDatabase/GoogleFirebaseRealtimeDatabase.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
