# Hacker News

## Description

Consume Hacker News API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Hacker News
    parameters:
      resource: "article"
      operation: "getAll" # Get many items
      operation: "get" # Get a Hacker News article
      operation: "get" # Get a Hacker News user
      articleId: "" # The ID of the Hacker News article to be returned
      username: "" # The Hacker News user to be returned
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: # Whether to include all the comments in a Hacker News article
        includeComments: false # Whether to include all the comments in a Hacker News article
      additionalFields: # The keyword for filtering the results of the query
        keyword: "" # The keyword for filtering the results of the query
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.hackerNews
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"article"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Get many items

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a Hacker News article

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a Hacker News user

### Article ID

- **Name**: `articleId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the Hacker News article to be returned

### Username

- **Name**: `username`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Hacker News user to be returned

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

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include all the comments in a Hacker News article
- **Placeholder**: Add Field

**Options:**

#### Include Comments
- **Name**: `includeComments`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include all the comments in a Hacker News article


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The keyword for filtering the results of the query
- **Placeholder**: Add Field

**Options:**

#### Keyword
- **Name**: `keyword`
- **Type**: `string`
- **Default**: `""`
- **Description**: The keyword for filtering the results of the query



## Node Information

- **Node Type**: `n8n-nodes-base.hackerNews`
- **Display Name**: Hacker News
- **Internal Name**: `hackerNews`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hackernews/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/HackerNews/HackerNews.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
