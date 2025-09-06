# Google Books

## Description

Read data from Google Books

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Books
    parameters:
      authentication: "serviceAccount"
      authentication: "oAuth2"
      resource: "bookshelf"
      operation: "get" # Retrieve a specific bookshelf resource for the specified user
      operation: "getAll" # Add a volume to a bookshelf
      operation: "get" # Get a volume resource based on ID
      myLibrary: false
      searchQuery: "" # Full-text search query string
      userId: "" # ID of user
      shelfId: "" # ID of the bookshelf
      shelfId: "" # ID of the bookshelf
      volumeId: "" # ID of the volume
      volumePosition: "" # Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on)
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "40" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleBooks
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"serviceAccount"`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"bookshelf"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve a specific bookshelf resource for the specified user

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Add a volume to a bookshelf

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a volume resource based on ID

### My Library

- **Name**: `myLibrary`
- **Type**: `boolean`
- **Default**: `false`

### Search Query

- **Name**: `searchQuery`
- **Type**: `string`
- **Default**: `""`
- **Description**: Full-text search query string

### User ID

- **Name**: `userId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of user

### Bookshelf ID

- **Name**: `shelfId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the bookshelf

### Bookshelf ID

- **Name**: `shelfId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the bookshelf

### Volume ID

- **Name**: `volumeId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the volume

### Volume Position

- **Name**: `volumePosition`
- **Type**: `string`
- **Default**: `""`
- **Description**: Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on)

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"40"`
- **Description**: Max number of results to return


## Node Information

- **Node Type**: `n8n-nodes-base.googleBooks`
- **Display Name**: Google Books
- **Internal Name**: `googleBooks`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Books/GoogleBooks.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
