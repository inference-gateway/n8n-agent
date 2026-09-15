# Microsoft Dataverse

## Description

Interact with the Microsoft Dataverse Web API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Dataverse
    parameters:
      resource: "row" # Read or write rows in a Dataverse table
      operation: "getAll"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftDataverse
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"row"`
- **Description**: Read or write rows in a Dataverse table

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftDataverse`
- **Display Name**: Microsoft Dataverse
- **Internal Name**: `microsoftDataverse`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftdataverse/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/Dataverse/MicrosoftDataverse.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
