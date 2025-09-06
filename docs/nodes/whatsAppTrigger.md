# WhatsApp Trigger

## Description

Handle WhatsApp events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: WhatsApp Trigger
    parameters:
      whatsAppNotice: ""
      updates: []
      options: {} # WhatsApp sends notifications to the Trigger when the status of a message changes (for example from Sent to Delivered and from Delivered to Read). To avoid multiple executions for one WhatsApp message, you can set the Trigger to execute only on selected message status updates.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.whatsAppTrigger
```

## Parameters

### Due to Facebook API limitations, you can use just one WhatsApp trigger for each Facebook App

- **Name**: `whatsAppNotice`
- **Type**: `notice`
- **Default**: `""`

### Trigger On

- **Name**: `updates`
- **Type**: `multiOptions`
- **Default**: `"[]"`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: WhatsApp sends notifications to the Trigger when the status of a message changes (for example from Sent to Delivered and from Delivered to Read). To avoid multiple executions for one WhatsApp message, you can set the Trigger to execute only on selected message status updates.
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.whatsAppTrigger`
- **Display Name**: WhatsApp Trigger
- **Internal Name**: `whatsAppTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapptrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/WhatsApp/WhatsAppTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
