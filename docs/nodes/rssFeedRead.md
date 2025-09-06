# RSS Read

## Description

Reads data from an RSS Feed

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: RSS Read
    parameters:
      url: "" # URL of the RSS feed
      options: # A comma-separated list of custom fields to include in the output. For example, "author, contentSnippet".
        customFields: "" # A comma-separated list of custom fields to include in the output. For example, "author, contentSnippet".
        ignoreSSL: false # Whether to ignore SSL/TLS certificate issues or not
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.rssFeedRead
```

## Parameters

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL of the RSS feed

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: A comma-separated list of custom fields to include in the output. For example, "author, contentSnippet".
- **Placeholder**: Add option

**Options:**

#### Custom Fields
- **Name**: `customFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated list of custom fields to include in the output. For example, "author, contentSnippet".

#### Ignore SSL Issues (Insecure)
- **Name**: `ignoreSSL`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to ignore SSL/TLS certificate issues or not



## Node Information

- **Node Type**: `n8n-nodes-base.rssFeedRead`
- **Display Name**: RSS Read
- **Internal Name**: `rssFeedRead`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rssfeedread/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/RssFeedRead/RssFeedRead.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
