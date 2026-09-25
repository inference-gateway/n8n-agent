# Databricks Trigger

## Description

Starts the workflow when Databricks job runs or pipeline updates change state

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Databricks Trigger
    parameters:
      servicePrincipalNotice: ""
      resource: "job" # Watch the runs of a job
      events: "['runFailed', 'runSucceeded']" # A run ended with any result other than a full success, including cancelled, skipped and partly failed runs. A repair of a run that was already reported does not fire again.
      pipelineId: "{ mode: 'list', value: '' }" # The pipeline whose updates start the workflow
      events: "['updateCompleted', 'updateFailed']" # An update finished successfully
      continuousPipelineNotice: ""
      simplify: true # Whether to return a simplified version of the response instead of the raw data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.databricksTrigger
```

## Parameters

### Use a credential that belongs to a service principal for triggers. A credential tied to a person stops firing when that person leaves or revokes consent.

- **Name**: `servicePrincipalNotice`
- **Type**: `notice`
- **Default**: `""`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"job"`
- **Description**: Watch the runs of a job

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"['runFailed', 'runSucceeded']"`
- **Description**: A run ended with any result other than a full success, including cancelled, skipped and partly failed runs. A repair of a run that was already reported does not fire again.

### Pipeline

- **Name**: `pipelineId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The pipeline whose updates start the workflow
- **Placeholder**: e.g. 8199cd89-e2f5-4169-a6aa-656a24c8886d

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"['updateCompleted', 'updateFailed']"`
- **Description**: An update finished successfully

### A continuous pipeline runs one update until it is stopped, so Update Completed does not fire for it. Update Started fires when the pipeline starts or restarts, and Update Failed fires when the update fails or the pipeline is stopped.

- **Name**: `continuousPipelineNotice`
- **Type**: `notice`
- **Default**: `""`

### Simplify

- **Name**: `simplify`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data


## Node Information

- **Node Type**: `n8n-nodes-base.databricksTrigger`
- **Display Name**: Databricks Trigger
- **Internal Name**: `databricksTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.databrickstrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Databricks/DatabricksTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
