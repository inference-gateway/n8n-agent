# Jenkins

## Description

Consume Jenkins API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Jenkins
    parameters:
      resource: "job"
      operation: "trigger" # Copy a specific job
      triggerParamsNotice: ""
      job: "" # Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      param: {} # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      newJob: "" # Name of the new Jenkins job
      xml: "" # XML of Jenkins config
      createNotice: ""
      operation: "safeRestart" # Cancel quiet down state
      reason: "" # Freeform reason for quiet down mode
      instanceNotice: ""
      operation: "getAll" # List Builds
      job: "" # Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.jenkins
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"job"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"trigger"`
- **Description**: Copy a specific job

### Make sure the job is setup to support triggering with parameters. <a href="https://wiki.jenkins.io/display/JENKINS/Parameterized+Build" target="_blank">More info</a>

- **Name**: `triggerParamsNotice`
- **Type**: `notice`
- **Default**: `""`

### Job Name or ID

- **Name**: `job`
- **Type**: `options`
- **Default**: `""`
- **Description**: Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Parameters

- **Name**: `param`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **Placeholder**: Add Parameter

### New Job Name

- **Name**: `newJob`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the new Jenkins job

### XML

- **Name**: `xml`
- **Type**: `string`
- **Default**: `""`
- **Description**: XML of Jenkins config

### To get the XML of an existing job, add ‘config.xml’ to the end of the job URL

- **Name**: `createNotice`
- **Type**: `notice`
- **Default**: `""`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"safeRestart"`
- **Description**: Cancel quiet down state

### Reason

- **Name**: `reason`
- **Type**: `string`
- **Default**: `""`
- **Description**: Freeform reason for quiet down mode

### Instance operation can shutdown Jenkins instance and make it unresponsive. Some commands may not be available depending on instance implementation.

- **Name**: `instanceNotice`
- **Type**: `notice`
- **Default**: `""`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: List Builds

### Job Name or ID

- **Name**: `job`
- **Type**: `options`
- **Default**: `""`
- **Description**: Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return


## Node Information

- **Node Type**: `n8n-nodes-base.jenkins`
- **Display Name**: Jenkins
- **Internal Name**: `jenkins`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jenkins/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Jenkins/Jenkins.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
