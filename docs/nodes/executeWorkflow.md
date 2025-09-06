# Execute Sub-workflow

## Description

Execute another workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Execute Sub-workflow
    parameters:
      operation: "call_workflow"
      outdatedVersionWarning: ""
      source: "database" # Load the workflow from the database by ID
      source: "database" # Load the workflow from the database by ID
      workflowId: "" # Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>.
      workflowId: ""
      workflowPath: "" # The path to local JSON workflow file to execute
      workflowJson: "\n\n\n" # The workflow JSON code to execute
      workflowUrl: "" # The URL from which to load the workflow from
      executeWorkflowNotice: ""
      workflowInputs: "{
					mappingMode: 'defineBelow',
					value: null,
				}"
      mode: "once" # Pass all items into a single execution of the sub-workflow
      options: # Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding
        waitForSubWorkflow: true # Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.executeWorkflow
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `hidden`
- **Default**: `"call_workflow"`

### This node is out of date. Please upgrade by removing it and adding a new one

- **Name**: `outdatedVersionWarning`
- **Type**: `notice`
- **Default**: `""`

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"database"`
- **Description**: Load the workflow from the database by ID

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"database"`
- **Description**: Load the workflow from the database by ID

### Workflow ID

- **Name**: `workflowId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Note on using an expression here: if this node is set to run once with all items, they will all be sent to the <em>same</em> workflow. That workflow's ID will be calculated by evaluating the expression for the <strong>first input item</strong>.

### Workflow

- **Name**: `workflowId`
- **Type**: `workflowSelector`
- **Default**: `""`

### Workflow Path

- **Name**: `workflowPath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path to local JSON workflow file to execute
- **Placeholder**: /data/workflow.json

### Workflow JSON

- **Name**: `workflowJson`
- **Type**: `json`
- **Default**: `"\\n\\n\\n"`
- **Description**: The workflow JSON code to execute

### Workflow URL

- **Name**: `workflowUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL from which to load the workflow from
- **Placeholder**: https://example.com/workflow.json

### Any data you pass into this node will be output by the Execute Workflow Trigger. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/" target="_blank">More info</a>

- **Name**: `executeWorkflowNotice`
- **Type**: `notice`
- **Default**: `""`

### Workflow Inputs

- **Name**: `workflowInputs`
- **Type**: `resourceMapper`
- **Default**: `"{\n\t\t\t\t\tmappingMode: 'defineBelow',\n\t\t\t\t\tvalue: null,\n\t\t\t\t}"`

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"once"`
- **Description**: Pass all items into a single execution of the sub-workflow

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding
- **Placeholder**: Add option

**Options:**

#### Wait For Sub-Workflow Completion
- **Name**: `waitForSubWorkflow`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding



## Node Information

- **Node Type**: `n8n-nodes-base.executeWorkflow`
- **Display Name**: Execute Sub-workflow
- **Internal Name**: `executeWorkflow`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.executeworkflow/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ExecuteWorkflow/ExecuteWorkflow/ExecuteWorkflow.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
