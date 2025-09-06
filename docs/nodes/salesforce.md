# Salesforce

## Description

Consume Salesforce API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Salesforce
    parameters:
      authentication: "oAuth2" # OAuth Authorization Flow
      resource: "lead" # Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners)
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.salesforce
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`
- **Description**: OAuth Authorization Flow

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"lead"`
- **Description**: Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners)


## Node Information

- **Node Type**: `n8n-nodes-base.salesforce`
- **Display Name**: Salesforce
- **Internal Name**: `salesforce`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Salesforce/Salesforce.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
