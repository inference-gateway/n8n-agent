# SurveyMonkey Trigger

## Description

Starts the workflow when Survey Monkey events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: SurveyMonkey Trigger
    parameters:
      authentication: "accessToken"
      objectType: ""
      event: "" # A collector is created
      event: "" # A collector is deleted
      surveyIds: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      surveyId: [] # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      collectorIds: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      resolveData: true # By default the webhook-data only contain the IDs. If this option gets activated, it will resolve the data automatically.
      onlyAnswers: true # Whether to return only the answers of the form and not any of the other data
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.surveyMonkeyTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Type

- **Name**: `objectType`
- **Type**: `options`
- **Default**: `""`

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: A collector is created

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `""`
- **Description**: A collector is deleted

### Survey Names or IDs

- **Name**: `surveyIds`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Survey Name or ID

- **Name**: `surveyId`
- **Type**: `options`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Collector Names or IDs

- **Name**: `collectorIds`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default the webhook-data only contain the IDs. If this option gets activated, it will resolve the data automatically.

### Only Answers

- **Name**: `onlyAnswers`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return only the answers of the form and not any of the other data


## Node Information

- **Node Type**: `n8n-nodes-base.surveyMonkeyTrigger`
- **Display Name**: SurveyMonkey Trigger
- **Internal Name**: `surveyMonkeyTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.surveymonkeytrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SurveyMonkey/SurveyMonkeyTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
