# Google Ads

## Description

Use the Google Ads API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Ads
    parameters:
      resource: "campaign"
      campaigsNotice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleAds
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"campaign"`

### Divide field names expressed with <i>micros</i> by 1,000,000 to get the actual value

- **Name**: `campaigsNotice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.googleAds`
- **Display Name**: Google Ads
- **Internal Name**: `googleAds`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleads/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Ads/GoogleAds.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
