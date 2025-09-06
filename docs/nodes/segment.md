# Segment

## Description

Consume Segment API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Segment
    parameters:
      resource: "identify" # Group lets you associate an identified user with a group
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.segment
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"identify"`
- **Description**: Group lets you associate an identified user with a group


## Node Information

- **Node Type**: `n8n-nodes-base.segment`
- **Display Name**: Segment
- **Internal Name**: `segment`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.segment/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Segment/Segment.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
