# Webex by Cisco Trigger

## Description

Starts the workflow when Cisco Webex events occur.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Webex by Cisco Trigger
    parameters:
      resource: "meeting"
      resolveData: true # By default the response only contain a reference to the data the user inputed. If this option gets activated, it will resolve the data automatically.
      filters: {} # Whether to limit to messages which contain file content attachments
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.ciscoWebexTrigger
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"meeting"`

### Resolve Data

- **Name**: `resolveData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default the response only contain a reference to the data the user inputed. If this option gets activated, it will resolve the data automatically.

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to limit to messages which contain file content attachments
- **Placeholder**: Add Filter


## Node Information

- **Node Type**: `n8n-nodes-base.ciscoWebexTrigger`
- **Display Name**: Webex by Cisco Trigger
- **Internal Name**: `ciscoWebexTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ciscowebextrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Cisco/Webex/CiscoWebexTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
