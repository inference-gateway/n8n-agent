# Disqus

## Description

Access data on Disqus

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Disqus
    parameters:
      resource: "forum"
      operation: "get" # Return forum details
      id: "" # The short name(aka ID) of the forum to get
      additionalFields: {} # You may specify relations to include with your response
      id: "" # The short name(aka ID) of the forum to get
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: {} # You may specify filters for your response
      id: "" # The short name(aka ID) of the forum to get Categories
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: {} # You may specify order to sort your response
      id: "" # The short name(aka ID) of the forum to get Threads
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: {} # You may specify relations to include with your response
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.disqus
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"forum"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Return forum details

### Forum Name

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The short name(aka ID) of the forum to get

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: You may specify relations to include with your response
- **Placeholder**: Add Field

### Forum Name

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The short name(aka ID) of the forum to get

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
- **Description**: You may specify filters for your response
- **Placeholder**: Add Field

### Forum Name

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The short name(aka ID) of the forum to get Categories

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
- **Description**: You may specify order to sort your response
- **Placeholder**: Add Field

### Forum Name

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The short name(aka ID) of the forum to get Threads

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
- **Description**: You may specify relations to include with your response
- **Placeholder**: Add Field


## Node Information

- **Node Type**: `n8n-nodes-base.disqus`
- **Display Name**: Disqus
- **Internal Name**: `disqus`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.disqus/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Disqus/Disqus.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
