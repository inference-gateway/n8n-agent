# Storyblok

## Description

Consume Storyblok API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Storyblok
    parameters:
      source: "contentApi" # Pick where your data comes from, Content or Management API
      resource: "story"
      resource: "story"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.storyblok
```

## Parameters

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"contentApi"`
- **Description**: Pick where your data comes from, Content or Management API

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"story"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"story"`


## Node Information

- **Node Type**: `n8n-nodes-base.storyblok`
- **Display Name**: Storyblok
- **Internal Name**: `storyblok`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.storyblok/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Storyblok/Storyblok.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
