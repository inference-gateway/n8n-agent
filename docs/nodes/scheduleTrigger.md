# Schedule Trigger

## Description

Triggers the workflow on a given schedule

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Schedule Trigger
    parameters:
      notice: ""
      rule: "{
					interval: [
						{
							field: 'days',
						},
					],
				}" # Number of seconds between each workflow trigger
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.scheduleTrigger
```

## Parameters

### This workflow will run on the schedule you define here once you <a data-key="activate">activate</a> it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking \'execute workflow\'

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Trigger Rules

- **Name**: `rule`
- **Type**: `fixedCollection`
- **Default**: `"{\n\t\t\t\t\tinterval: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tfield: 'days',\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t}"`
- **Description**: Number of seconds between each workflow trigger
- **Placeholder**: Add Rule


## Node Information

- **Node Type**: `n8n-nodes-base.scheduleTrigger`
- **Display Name**: Schedule Trigger
- **Internal Name**: `scheduleTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.scheduletrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Schedule/ScheduleTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
