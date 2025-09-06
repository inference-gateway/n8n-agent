# crowd.dev Trigger

## Description

Starts the workflow when crowd.dev events occur.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: crowd.dev Trigger
    parameters:
      trigger: "new_activity" # What will trigger an automation
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.crowdDevTrigger
```

## Parameters

### Trigger

- **Name**: `trigger`
- **Type**: `options`
- **Default**: `"new_activity"`
- **Description**: What will trigger an automation


## Node Information

- **Node Type**: `n8n-nodes-base.crowdDevTrigger`
- **Display Name**: crowd.dev Trigger
- **Internal Name**: `crowdDevTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.crowddevtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CrowdDev/CrowdDevTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
