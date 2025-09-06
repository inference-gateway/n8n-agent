# Twake

## Description

Consume Twake API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Twake
    parameters:
      twakeVersion: "cloud"
      resource: "message" # Send data to the message app
      operation: "send" # Send a message
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.twake
```

## Parameters

### Twake Version

- **Name**: `twakeVersion`
- **Type**: `options`
- **Default**: `"cloud"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`
- **Description**: Send data to the message app

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`
- **Description**: Send a message


## Node Information

- **Node Type**: `n8n-nodes-base.twake`
- **Display Name**: Twake
- **Internal Name**: `twake`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twake/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Twake/Twake.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
