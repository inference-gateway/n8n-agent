# Google Drive Trigger

## Description

Starts the workflow when Google Drive events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Drive Trigger
    parameters:
      authentication: "oAuth2"
      triggerOn: ""
      fileToWatch: "{ mode: 'list', value: '' }"
      event: "fileUpdated" # When to trigger this node
      folderToWatch: "{ mode: 'list', value: '' }"
      event: "" # When a file is created in the watched folder
      asas: ""
      driveToWatch: "root" # The drive to monitor. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      event: "fileCreated" # When a file is created in the watched drive
      options: {} # Triggers only when the file is this type
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleDriveTrigger
```

## Parameters

### Credential Type

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`

### File

- **Name**: `fileToWatch`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select a file...

### Watch For

- **Name**: `event`
- **Type**: `options`
- **Default**: `"fileUpdated"`
- **Description**: When to trigger this node

### Folder

- **Name**: `folderToWatch`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select a folder...

### Watch For

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: When a file is created in the watched folder

### Changes within subfolders won't trigger this node

- **Name**: `asas`
- **Type**: `notice`
- **Default**: `""`

### Drive To Watch

- **Name**: `driveToWatch`
- **Type**: `options`
- **Default**: `"root"`
- **Description**: The drive to monitor. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Watch For

- **Name**: `event`
- **Type**: `options`
- **Default**: `"fileCreated"`
- **Description**: When a file is created in the watched drive

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Triggers only when the file is this type
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.googleDriveTrigger`
- **Display Name**: Google Drive Trigger
- **Internal Name**: `googleDriveTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrivetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Drive/GoogleDriveTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
