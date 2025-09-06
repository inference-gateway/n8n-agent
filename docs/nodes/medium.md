# Medium

## Description

Consume Medium API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Medium
    parameters:
      authentication: "accessToken"
      resource: "post"
      operation: "create" # Create a post
      publication: false # Whether you are posting for a publication
      publicationId: "" # Publication IDs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      title: "" # Title of the post. Max Length : 100 characters.
      contentFormat: "" # The format of the content to be posted
      content: "" # The body of the post, in a valid semantic HTML fragment, or Markdown
      additionalFields: # The original home of this content, if it was originally published elsewhere
        canonicalUrl: "" # The original home of this content, if it was originally published elsewhere
      operation: "publication" # Get many publications
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.medium
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"post"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a post

### Publication

- **Name**: `publication`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether you are posting for a publication

### Publication Name or ID

- **Name**: `publicationId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Publication IDs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Title of the post. Max Length : 100 characters.
- **Placeholder**: My Open Source Contribution

### Content Format

- **Name**: `contentFormat`
- **Type**: `options`
- **Default**: `""`
- **Description**: The format of the content to be posted

### Content

- **Name**: `content`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the post, in a valid semantic HTML fragment, or Markdown
- **Placeholder**: My open source contribution

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The original home of this content, if it was originally published elsewhere
- **Placeholder**: Add Field

**Options:**

#### Canonical Url
- **Name**: `canonicalUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: The original home of this content, if it was originally published elsewhere


### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"publication"`
- **Description**: Get many publications

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


## Node Information

- **Node Type**: `n8n-nodes-base.medium`
- **Display Name**: Medium
- **Internal Name**: `medium`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.medium/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Medium/Medium.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
