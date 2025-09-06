# UptimeRobot

## Description

Consume UptimeRobot API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: UptimeRobot
    parameters:
      resource: "account"
      operation: "get" # Get account details
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.uptimeRobot
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"account"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get account details


## Node Information

- **Node Type**: `n8n-nodes-base.uptimeRobot`
- **Display Name**: UptimeRobot
- **Internal Name**: `uptimeRobot`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/UptimeRobot/UptimeRobot.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
