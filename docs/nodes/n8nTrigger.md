# n8n Trigger

## Description

Handle events and perform actions on your n8n instance

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: n8n Trigger
    parameters:
      events: [] # Specifies under which conditions an execution should happen:
				<ul>
					<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
					<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li>
					<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
				</ul>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.n8nTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Specifies under which conditions an execution should happen:
				<ul>
					<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
					<li><b>Instance Started</b>:  Triggers when this n8n instance is started or re-started</li>
					<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
				</ul>


## Node Information

- **Node Type**: `n8n-nodes-base.n8nTrigger`
- **Display Name**: n8n Trigger
- **Internal Name**: `n8nTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.n8ntrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/N8nTrigger/N8nTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
