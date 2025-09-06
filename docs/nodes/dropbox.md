# Dropbox

## Description

Access data on Dropbox

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Dropbox
    parameters:
      authentication: "accessToken" # Means of authenticating with the service
      resource: "file"
      operation: "upload" # Copy a file
      operation: "create" # Copy a folder
      operation: "query"
      path: "" # The path of file or folder to copy
      toPath: "" # The destination path of file or folder
      path: "" # The path to delete. Can be a single file or a whole folder.
      path: "" # The path of file or folder to move
      toPath: "" # The new path of file or folder
      path: "" # The file path of the file to download. Has to contain the full path.
      binaryPropertyName: "data"
      path: "" # The file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
      binaryData: false # Whether the data to upload should be taken from binary field
      fileContent: "" # The text content of the file to upload
      binaryPropertyName: "data"
      query: "" # The string to search for. May match across multiple fields based on the request arguments.
      fileStatus: "active" # The string to search for. May match across multiple fields based on the request arguments.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      simple: true # Whether to return a simplified version of the response instead of the raw data
      filters: {} # Multiple file extensions can be set separated by comma. Example: jpg,pdf.
      path: "" # The folder to create. The parent folder has to exist.
      path: "" # The path of which to list the content
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      filters: # Whether the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.
        include_deleted: false # Whether the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.
        include_has_explicit_shared_members: false # Whether the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.
        include_mounted_folders: true # Whether the results will include entries under mounted folders which includes app folder, shared folder and team folder. The default for this field is True.
        include_non_downloadable_files: true # Whether to include files that are not downloadable, i.e. Google Docs. The default for this field is True.
        recursive: false # Whether the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.dropbox
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`
- **Description**: Means of authenticating with the service

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"file"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"upload"`
- **Description**: Copy a file

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Copy a folder

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"query"`

### From Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of file or folder to copy
- **Placeholder**: /invoices/original.txt

### To Path

- **Name**: `toPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The destination path of file or folder
- **Placeholder**: /invoices/copy.txt

### Delete Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path to delete. Can be a single file or a whole folder.
- **Placeholder**: /invoices/2019/invoice_1.pdf

### From Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of file or folder to move
- **Placeholder**: /invoices/old_name.txt

### To Path

- **Name**: `toPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The new path of file or folder
- **Placeholder**: /invoices/new_name.txt

### File Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to download. Has to contain the full path.
- **Placeholder**: /invoices/2019/invoice_1.pdf

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### File Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
- **Placeholder**: /invoices/2019/invoice_1.pdf

### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data to upload should be taken from binary field

### File Content

- **Name**: `fileContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text content of the file to upload

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The string to search for. May match across multiple fields based on the request arguments.

### File Status

- **Name**: `fileStatus`
- **Type**: `options`
- **Default**: `"active"`
- **Description**: The string to search for. May match across multiple fields based on the request arguments.

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Multiple file extensions can be set separated by comma. Example: jpg,pdf.
- **Placeholder**: Add Filter

### Folder

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The folder to create. The parent folder has to exist.
- **Placeholder**: /invoices/2019

### Folder Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of which to list the content
- **Placeholder**: /invoices/2019/

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.
- **Placeholder**: Add Filter

**Options:**

#### Include Deleted
- **Name**: `include_deleted`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the results will include entries for files and folders that used to exist but were deleted. The default for this field is False.

#### Include Shared Members
- **Name**: `include_has_explicit_shared_members`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False.

#### Include Mounted Folders
- **Name**: `include_mounted_folders`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the results will include entries under mounted folders which includes app folder, shared folder and team folder. The default for this field is True.

#### Include Non Downloadable Files
- **Name**: `include_non_downloadable_files`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to include files that are not downloadable, i.e. Google Docs. The default for this field is True.

#### Recursive
- **Name**: `recursive`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.



## Node Information

- **Node Type**: `n8n-nodes-base.dropbox`
- **Display Name**: Dropbox
- **Internal Name**: `dropbox`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.dropbox/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Dropbox/Dropbox.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
