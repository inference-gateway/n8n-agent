# Nextcloud

## Description

Access data on Nextcloud

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Nextcloud
    parameters:
      authentication: "accessToken"
      resource: "file"
      operation: "upload" # Copy a file
      operation: "create" # Copy a folder
      operation: "create" # Invite a user to a NextCloud organization
      path: "" # The path of file or folder to copy. The path should start with "/".
      toPath: "" # The destination path of file or folder. The path should start with "/".
      path: "" # The path to delete. Can be a single file or a whole folder. The path should start with "/".
      path: "" # The path of file or folder to move. The path should start with "/".
      toPath: "" # The new path of file or folder. The path should start with "/".
      path: "" # The file path of the file to download. Has to contain the full path. The path should start with "/".
      binaryPropertyName: "data"
      path: "" # The absolute file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
      binaryDataUpload: false
      fileContent: "" # The text content of the file to upload
      binaryPropertyName: "data"
      path: "" # The file path of the file to share. Has to contain the full path. The path should start with "/".
      shareType: "0" # The share permissions to set
      circleId: "" # The ID of the circle to share with
      email: "" # The Email address to share with
      groupId: "" # The ID of the group to share with
      user: "" # The user to share with
      options: {} # Optional search string
      path: "" # The folder to create. The parent folder has to exist. The path should start with "/".
      path: "" # The path of which to list the content. The path should start with "/".
      userId: "" # Username the user will have
      email: "" # The email of the user to invite
      additionalFields: # The display name of the user to invite
        displayName: "" # The display name of the user to invite
      userId: "" # Username the user will have
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      options: # Optional search string
        search: "" # Optional search string
        offset: "" # Optional offset value
      updateFields: {} # The new address for the user
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.nextCloud
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

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
- **Default**: `"create"`
- **Description**: Invite a user to a NextCloud organization

### From Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of file or folder to copy. The path should start with "/".
- **Placeholder**: /invoices/original.txt

### To Path

- **Name**: `toPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The destination path of file or folder. The path should start with "/".
- **Placeholder**: /invoices/copy.txt

### Delete Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path to delete. Can be a single file or a whole folder. The path should start with "/".
- **Placeholder**: /invoices/2019/invoice_1.pdf

### From Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of file or folder to move. The path should start with "/".
- **Placeholder**: /invoices/old_name.txt

### To Path

- **Name**: `toPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The new path of file or folder. The path should start with "/".
- **Placeholder**: /invoices/new_name.txt

### File Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to download. Has to contain the full path. The path should start with "/".
- **Placeholder**: /invoices/2019/invoice_1.pdf

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### File Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The absolute file path of the file to upload. Has to contain the full path. The parent folder has to exist. Existing files get overwritten.
- **Placeholder**: /invoices/2019/invoice_1.pdf

### Binary File

- **Name**: `binaryDataUpload`
- **Type**: `boolean`
- **Default**: `false`

### File Content

- **Name**: `fileContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text content of the file to upload

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### File Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file to share. Has to contain the full path. The path should start with "/".
- **Placeholder**: /invoices/2019/invoice_1.pdf

### Share Type

- **Name**: `shareType`
- **Type**: `options`
- **Default**: `"0"`
- **Description**: The share permissions to set

### Circle ID

- **Name**: `circleId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the circle to share with

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Email address to share with
- **Placeholder**: name@email.com

### Group ID

- **Name**: `groupId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the group to share with

### User

- **Name**: `user`
- **Type**: `string`
- **Default**: `""`
- **Description**: The user to share with

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Optional search string
- **Placeholder**: Add option

### Folder

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The folder to create. The parent folder has to exist. The path should start with "/".
- **Placeholder**: /invoices/2019

### Folder Path

- **Name**: `path`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of which to list the content. The path should start with "/".
- **Placeholder**: /invoices/2019/

### Username

- **Name**: `userId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Username the user will have
- **Placeholder**: john

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email of the user to invite
- **Placeholder**: john@email.com

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The display name of the user to invite
- **Placeholder**: Add Field

**Options:**

#### Display Name
- **Name**: `displayName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The display name of the user to invite


### Username

- **Name**: `userId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Username the user will have
- **Placeholder**: john

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Optional search string
- **Placeholder**: Add option

**Options:**

#### Search
- **Name**: `search`
- **Type**: `string`
- **Default**: `""`
- **Description**: Optional search string

#### Offset
- **Name**: `offset`
- **Type**: `number`
- **Default**: `""`
- **Description**: Optional offset value


### Update Fields

- **Name**: `updateFields`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The new address for the user
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.nextCloud`
- **Display Name**: Nextcloud
- **Internal Name**: `nextCloud`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nextcloud/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/NextCloud/NextCloud.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
