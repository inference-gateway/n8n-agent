# FTP

## Description

Transfer files via FTP or SFTP

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: FTP
    parameters:
      protocol: "ftp" # File transfer protocol
      operation: "download" # Delete a file/folder
      path: "" # The file path of the file to delete. Has to contain the full path.
      options: # Whether folders can be deleted
        folder: false # Whether folders can be deleted
      path: "" # The file path of the file to download. Has to contain the full path.
      binaryPropertyName: "data"
      options: # Whether to enable concurrent reads for downloading files
        enableConcurrentReads: false # Whether to enable concurrent reads for downloading files
      oldPath: ""
      newPath: ""
      options: # Whether to recursively create destination directory when renaming an existing file or folder
        createDirectories: false # Whether to recursively create destination directory when renaming an existing file or folder
      path: "" # The file path of the file to upload. Has to contain the full path.
      binaryData: true # The text content of the file to upload
      binaryPropertyName: "data"
      fileContent: "" # The text content of the file to upload
      path: "/" # Path of directory to list contents of
      recursive: false # Whether to return object representing all directories / objects recursively found within SFTP server
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.ftp
```

## Parameters

### Protocol

- **Name**: `protocol`
- **Type**: `options`
- **Default**: `"ftp"`
- **Description**: File transfer protocol

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"download"`
- **Description**: Delete a file/folder

### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to delete. Has to contain the full path.
- **Placeholder**: e.g. /public/documents/file-to-delete.txt

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether folders can be deleted
- **Placeholder**: Add option

**Options:**

#### Folder
- **Name**: `folder`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether folders can be deleted


### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to download. Has to contain the full path.
- **Placeholder**: e.g. /public/documents/file-to-download.txt

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to enable concurrent reads for downloading files
- **Placeholder**: Add Field

**Options:**

#### Enable Concurrent Reads
- **Name**: `enableConcurrentReads`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to enable concurrent reads for downloading files


### Old Path

- **Name**: `oldPath`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. /public/documents/old-file.txt

### New Path

- **Name**: `newPath`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. /public/documents/new-file.txt

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to recursively create destination directory when renaming an existing file or folder
- **Placeholder**: Add Field

**Options:**

#### Create Directories
- **Name**: `createDirectories`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to recursively create destination directory when renaming an existing file or folder


### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to upload. Has to contain the full path.
- **Placeholder**: e.g. /public/documents/file-to-upload.txt

### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: The text content of the file to upload

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### File Content

- **Name**: `fileContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text content of the file to upload

### Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `"/"`
- **Description**: Path of directory to list contents of
- **Placeholder**: e.g. /public/folder

### Recursive

- **Name**: `recursive`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return object representing all directories / objects recursively found within SFTP server


## Node Information

- **Node Type**: `n8n-nodes-base.ftp`
- **Display Name**: FTP
- **Internal Name**: `ftp`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Ftp/Ftp.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
