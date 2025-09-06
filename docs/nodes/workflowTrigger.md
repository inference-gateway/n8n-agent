# Workflow Trigger

## Description

Triggers based on various lifecycle events, like when a workflow is activated

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Workflow Trigger
    parameters:
      oldVersionNotice: ""
      events: [] # Specifies under which conditions an execution should happen:
					<ul>
						<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
						<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
					</ul>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.workflowTrigger
```

## Parameters

### This node is deprecated and would not be updated in the future. Please use 'n8n Trigger' node instead.

- **Name**: `oldVersionNotice`
- **Type**: `notice`
- **Default**: `""`

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Specifies under which conditions an execution should happen:
					<ul>
						<li><b>Active Workflow Updated</b>: Triggers when this workflow is updated</li>
						<li><b>Workflow Activated</b>: Triggers when this workflow is activated</li>
					</ul>


## Node Information

- **Node Type**: `n8n-nodes-base.workflowTrigger`
- **Display Name**: Workflow Trigger
- **Internal Name**: `workflowTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.workflowtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/WorkflowTrigger/WorkflowTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
