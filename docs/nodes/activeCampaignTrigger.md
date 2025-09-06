# ActiveCampaign Trigger

## Description

Handle ActiveCampaign events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: ActiveCampaign Trigger
    parameters:
      events: [] # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      sources: [] # Run the hooks when a contact triggers the action
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.activeCampaignTrigger
```

## Parameters

### Event Names or IDs

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Source

- **Name**: `sources`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Run the hooks when a contact triggers the action


## Node Information

- **Node Type**: `n8n-nodes-base.activeCampaignTrigger`
- **Display Name**: ActiveCampaign Trigger
- **Internal Name**: `activeCampaignTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.activecampaigntrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ActiveCampaign/ActiveCampaignTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
