# Local File Trigger

## Description

Triggers a workflow on file system changes

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Local File Trigger
    parameters:
      triggerOn: ""
      path: ""
      path: ""
      events: [] # Triggers whenever a new file was added
      options: # Whether to wait until files finished writing to avoid partially read
        awaitWriteFinish: false # Whether to wait until files finished writing to avoid partially read
        followSymlinks: true # Whether linked files/folders will also be watched (this includes symlinks, aliases on MacOS and shortcuts on Windows). Otherwise only the links themselves will be monitored).
        ignored: "" # Files or paths to ignore. The whole path is tested, not just the filename. Supports <a href=\"https://github.com/micromatch/anymatch\">Anymatch</a>- syntax. Regex patterns may not work on macOS. To ignore files based on substring matching, use the 'Ignore Mode' option with 'Contain'.
        ignoreInitial: true # Whether to ignore existing files/folders to not trigger an event
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.localFileTrigger
```

## Parameters

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`

### File to Watch

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: /data/invoices/1.pdf

### Folder to Watch

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: /data/invoices

### Watch for

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Triggers whenever a new file was added

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to wait until files finished writing to avoid partially read
- **Placeholder**: Add option

**Options:**

#### Await Write Finish
- **Name**: `awaitWriteFinish`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to wait until files finished writing to avoid partially read

#### Include Linked Files/Folders
- **Name**: `followSymlinks`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether linked files/folders will also be watched (this includes symlinks, aliases on MacOS and shortcuts on Windows). Otherwise only the links themselves will be monitored).

#### Ignore
- **Name**: `ignored`
- **Type**: `string`
- **Default**: `""`
- **Description**: Files or paths to ignore. The whole path is tested, not just the filename. Supports <a href=\"https://github.com/micromatch/anymatch\">Anymatch</a>- syntax. Regex patterns may not work on macOS. To ignore files based on substring matching, use the 'Ignore Mode' option with 'Contain'.

#### Ignore Existing Files/Folders
- **Name**: `ignoreInitial`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to ignore existing files/folders to not trigger an event



## Node Information

- **Node Type**: `n8n-nodes-base.localFileTrigger`
- **Display Name**: Local File Trigger
- **Internal Name**: `localFileTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.localfiletrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/LocalFileTrigger/LocalFileTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
