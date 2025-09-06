# Twilio Trigger

## Description

Starts the workflow on a Twilio update

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Twilio Trigger
    parameters:
      updates: [] # When an SMS message is received
      callTriggerNotice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.twilioTrigger
```

## Parameters

### Trigger On

- **Name**: `updates`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: When an SMS message is received

### The 'New Call' event may take up to thirty minutes to be triggered

- **Name**: `callTriggerNotice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.twilioTrigger`
- **Display Name**: Twilio Trigger
- **Internal Name**: `twilioTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twiliotrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Twilio/TwilioTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
