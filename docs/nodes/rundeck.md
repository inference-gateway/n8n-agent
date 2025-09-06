# Rundeck

## Description

Manage Rundeck API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Rundeck
    parameters:
      resource: "job"
      operation: "execute" # Execute a job
      jobid: "" # The job ID to execute
      arguments: {}
      filter: "" # Filter Rundeck nodes by name
      jobid: "" # The job ID to get metadata off
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.rundeck
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"job"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"execute"`
- **Description**: Execute a job

### Job ID

- **Name**: `jobid`
- **Type**: `string`
- **Default**: `""`
- **Description**: The job ID to execute
- **Placeholder**: Rundeck Job ID

### Arguments

- **Name**: `arguments`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Placeholder**: Add Argument

### Filter

- **Name**: `filter`
- **Type**: `string`
- **Default**: `""`
- **Description**: Filter Rundeck nodes by name
- **Placeholder**: Add Filters

### Job ID

- **Name**: `jobid`
- **Type**: `string`
- **Default**: `""`
- **Description**: The job ID to get metadata off
- **Placeholder**: Rundeck Job ID


## Node Information

- **Node Type**: `n8n-nodes-base.rundeck`
- **Display Name**: Rundeck
- **Internal Name**: `rundeck`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rundeck/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Rundeck/Rundeck.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
