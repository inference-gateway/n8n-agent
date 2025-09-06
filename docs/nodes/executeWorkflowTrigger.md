# Execute Workflow Trigger

## Description

Helpers for calling other n8n workflows. Used for designing modular, microservice-like workflows.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Execute Workflow Trigger
    parameters:
      events: "worklfow_call" # When executed by another workflow using Execute Workflow Trigger
      notice: ""
      outdatedVersionWarning: ""
      ${JSON_EXAMPLE}_notice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.executeWorkflowTrigger
```

## Parameters

### Events

- **Name**: `events`
- **Type**: `hidden`
- **Default**: `"worklfow_call"`
- **Description**: When executed by another workflow using Execute Workflow Trigger

### When an ‘execute workflow’ node calls this workflow, the execution starts here. Any data passed into the 'execute workflow' node will be output by this node.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### This node is out of date. Please upgrade by removing it and adding a new one

- **Name**: `outdatedVersionWarning`
- **Type**: `notice`
- **Default**: `""`

### Provide an example object to infer fields and their types.<br>To allow any type for a given field, set the value to null.

- **Name**: `${JSON_EXAMPLE}_notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.executeWorkflowTrigger`
- **Display Name**: Execute Workflow Trigger
- **Internal Name**: `executeWorkflowTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.executeworkflowtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflowTrigger/ExecuteWorkflowTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
