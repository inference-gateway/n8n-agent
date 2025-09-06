# Telegram Trigger

## Description

Starts the workflow on a Telegram update

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Telegram Trigger
    parameters:
      telegramTriggerNotice: ""
      updates: [] # All updates
      attachmentNotice: ""
      additionalFields: # Telegram delivers the image in multiple sizes. By default, just the large image would be downloaded. If you want to change the size, set the field 'Image Size'.
        download: false # Telegram delivers the image in multiple sizes. By default, just the large image would be downloaded. If you want to change the size, set the field 'Image Size'.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.telegramTrigger
```

## Parameters

### Due to Telegram API limitations, you can use just one Telegram trigger for each bot at a time

- **Name**: `telegramTriggerNotice`
- **Type**: `notice`
- **Default**: `""`

### Trigger On

- **Name**: `updates`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: All updates

### Every uploaded attachment, even if sent in a group, will trigger a separate event. You can identify that an attachment belongs to a certain group by <code>media_group_id</code> .

- **Name**: `attachmentNotice`
- **Type**: `notice`
- **Default**: `""`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Telegram delivers the image in multiple sizes. By default, just the large image would be downloaded. If you want to change the size, set the field 'Image Size'.
- **Placeholder**: Add Field

**Options:**

#### Download Images/Files
- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Telegram delivers the image in multiple sizes. By default, just the large image would be downloaded. If you want to change the size, set the field 'Image Size'.



## Node Information

- **Node Type**: `n8n-nodes-base.telegramTrigger`
- **Display Name**: Telegram Trigger
- **Internal Name**: `telegramTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegramtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Telegram/TelegramTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
