# Line

## Description

Consume Line API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Line
    parameters:
      notice: ""
      resource: "notification"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.line
```

## Parameters

### End of service: LINE Notify will be discontinued from April 1st 2025, You can find more information <a href="https://notify-bot.line.me/closing-announce" target="_blank">here</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"notification"`


## Node Information

- **Node Type**: `n8n-nodes-base.line`
- **Display Name**: Line
- **Internal Name**: `line`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.line/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Line/Line.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
