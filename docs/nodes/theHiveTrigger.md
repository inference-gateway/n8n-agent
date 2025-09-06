# TheHive Trigger

## Description

Starts the workflow when TheHive events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: TheHive Trigger
    parameters:
      notice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.theHiveTrigger
```

## Parameters

### You must set up the webhook in TheHive — instructions <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehivetrigger/#configure-a-webhook-in-thehive" target="_blank">here</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.theHiveTrigger`
- **Display Name**: TheHive Trigger
- **Internal Name**: `theHiveTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehivetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/TheHive/TheHiveTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
