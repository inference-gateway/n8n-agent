# Google Sheets Trigger

## Description

Starts the workflow when Google Sheets events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Sheets Trigger
    parameters:
      authentication: "triggerOAuth2"
      event: "anyUpdate" # It will be triggered also by newly created columns (if the 'Columns to Watch' option is not set)
      includeInOutput: "new" # This option will be effective only when automatically executing the workflow
      options: {} # Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleSheetsTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `hidden`
- **Default**: `"triggerOAuth2"`

### Trigger On

- **Name**: `event`
- **Type**: `options`
- **Default**: `"anyUpdate"`
- **Description**: It will be triggered also by newly created columns (if the 'Columns to Watch' option is not set)

### Include in Output

- **Name**: `includeInOutput`
- **Type**: `options`
- **Default**: `"new"`
- **Description**: This option will be effective only when automatically executing the workflow

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.googleSheetsTrigger`
- **Display Name**: Google Sheets Trigger
- **Internal Name**: `googleSheetsTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheetstrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Sheet/GoogleSheetsTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
