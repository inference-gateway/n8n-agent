# Google Business Profile Trigger

## Description

Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Business Profile Trigger
    parameters:
      event: "reviewAdded"
      account: "{ mode: 'list', value: '' }" # The Google Business Profile account
      location: "{ mode: 'list', value: '' }" # The specific location or business associated with the account
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleBusinessProfileTrigger
```

## Parameters

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"reviewAdded"`

### Account

- **Name**: `account`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The Google Business Profile account
- **Placeholder**: e.g. accounts/0123456789

### Location

- **Name**: `location`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The specific location or business associated with the account
- **Placeholder**: e.g. locations/0123456789


## Node Information

- **Node Type**: `n8n-nodes-base.googleBusinessProfileTrigger`
- **Display Name**: Google Business Profile Trigger
- **Internal Name**: `googleBusinessProfileTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebusinessprofiletrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/BusinessProfile/GoogleBusinessProfileTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
