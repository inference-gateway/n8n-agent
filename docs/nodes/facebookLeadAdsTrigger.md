# Facebook Lead Ads Trigger

## Description

Handle Facebook Lead Ads events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Facebook Lead Ads Trigger
    parameters:
      facebookLeadAdsNotice: ""
      event: "newLead"
      page: "{ mode: 'list', value: '' }" # The page linked to the form for retrieving new leads
      form: "{ mode: 'list', value: '' }" # The form to monitor for fetching lead details upon submission
      options: # Whether to return a simplified version of the webhook event instead of all fields
        simplifyOutput: true # Whether to return a simplified version of the webhook event instead of all fields
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.facebookLeadAdsTrigger
```

## Parameters

### Due to Facebook API limitations, you can use just one Facebook Lead Ads trigger for each Facebook App

- **Name**: `facebookLeadAdsNotice`
- **Type**: `notice`
- **Default**: `""`

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"newLead"`

### Page

- **Name**: `page`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The page linked to the form for retrieving new leads
- **Placeholder**: 121637951029080

### Form

- **Name**: `form`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The form to monitor for fetching lead details upon submission
- **Placeholder**: 121637951029080

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to return a simplified version of the webhook event instead of all fields
- **Placeholder**: Add option

**Options:**

#### Simplify Output
- **Name**: `simplifyOutput`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the webhook event instead of all fields



## Node Information

- **Node Type**: `n8n-nodes-base.facebookLeadAdsTrigger`
- **Display Name**: Facebook Lead Ads Trigger
- **Internal Name**: `facebookLeadAdsTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebookleadadstrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/FacebookLeadAds/FacebookLeadAdsTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
