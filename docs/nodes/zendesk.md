# Zendesk

## Description

Consume Zendesk API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Zendesk
    parameters:
      authentication: "apiToken"
      resource: "ticket" # Tickets are the means through which your end users (customers) communicate with agents in Zendesk Support
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.zendesk
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"ticket"`
- **Description**: Tickets are the means through which your end users (customers) communicate with agents in Zendesk Support


## Node Information

- **Node Type**: `n8n-nodes-base.zendesk`
- **Display Name**: Zendesk
- **Internal Name**: `zendesk`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Zendesk/Zendesk.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
