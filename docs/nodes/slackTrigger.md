# Slack Trigger

## Description

Handle Slack events via webhooks

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Slack Trigger
    parameters:
      authentication: "accessToken"
      notice: ""
      trigger: [] # Triggers on any event
      watchWorkspace: false # Whether to watch for the event in the whole workspace, rather than a specific channel
      notice: ""
      channelId: "{ mode: 'list', value: '' }" # The Slack channel to listen to events from. Applies to events: Bot/App mention, File Shared, New Message Posted on Channel, Reaction Added.
      downloadFiles: false # Whether to download the files and add it to the output
      options: # Whether to resolve the IDs to their respective names and return them
        resolveIds: false # Whether to resolve the IDs to their respective names and return them
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.slackTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `hidden`
- **Default**: `"accessToken"`

### Set up a webhook in your Slack app to enable this node. <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/#configure-a-webhook-in-slack" target="_blank">More info</a>. We also recommend setting up a <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/#verify-the-webhook" target="_blank">signing secret</a> to ensure the authenticity of requests.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Trigger On

- **Name**: `trigger`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: Triggers on any event

### Watch Whole Workspace

- **Name**: `watchWorkspace`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to watch for the event in the whole workspace, rather than a specific channel

### This will use one execution for every event in any channel your bot is in, use with caution

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Channel to Watch

- **Name**: `channelId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The Slack channel to listen to events from. Applies to events: Bot/App mention, File Shared, New Message Posted on Channel, Reaction Added.
- **Placeholder**: Select a channel...

### Download Files

- **Name**: `downloadFiles`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to download the files and add it to the output

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to resolve the IDs to their respective names and return them
- **Placeholder**: Add Field

**Options:**

#### Resolve IDs
- **Name**: `resolveIds`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to resolve the IDs to their respective names and return them



## Node Information

- **Node Type**: `n8n-nodes-base.slackTrigger`
- **Display Name**: Slack Trigger
- **Internal Name**: `slackTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slacktrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Slack/SlackTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
