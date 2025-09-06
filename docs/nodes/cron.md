# Cron

## Description

Triggers the workflow at a specific time

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Cron
    parameters:
      notice: ""
      triggerTimes: {} # Triggers for the workflow
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.cron
```

## Parameters

### This workflow will run on the schedule you define here once you <a data-key="activate">activate</a> it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking \'execute workflow\'

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Trigger Times

- **Name**: `triggerTimes`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Triggers for the workflow
- **Placeholder**: Add Cron Time


## Node Information

- **Node Type**: `n8n-nodes-base.cron`
- **Display Name**: Cron
- **Internal Name**: `cron`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cron/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Cron/Cron.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
