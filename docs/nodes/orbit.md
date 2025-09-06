# Orbit

## Description

Consume Orbit API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Orbit
    parameters:
      deprecated: ""
      resource: "member"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.orbit
```

## Parameters

### Orbit has been shutdown and will no longer function from July 11th, You can read more <a target="_blank" href="https://orbit.love/blog/orbit-is-joining-postman">here</a>.

- **Name**: `deprecated`
- **Type**: `notice`
- **Default**: `""`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"member"`


## Node Information

- **Node Type**: `n8n-nodes-base.orbit`
- **Display Name**: Orbit
- **Internal Name**: `orbit`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.orbit/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Orbit/Orbit.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
