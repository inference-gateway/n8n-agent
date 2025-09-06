# Microsoft Teams Trigger

## Description

Triggers workflows in n8n based on events from Microsoft Teams, such as new messages or team updates, using specified configurations.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Teams Trigger
    parameters:
      event: "newChannelMessage" # A new channel is created
      watchAllTeams: false # Whether to watch for the event in all the available teams
      teamId: "{
					mode: 'list',
					value: '',
				}" # Select a team from the list, enter an ID or a URL
      watchAllChannels: false # Whether to watch for the event in all the available channels
      channelId: "{
					mode: 'list',
					value: '',
				}" # Select a channel from the list, enter an ID or a URL
      watchAllChats: false # Whether to watch for the event in all the available chats
      chatId: "{
					mode: 'list',
					value: '',
				}" # Select a chat from the list, enter an ID or a URL
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftTeamsTrigger
```

## Parameters

### Trigger On

- **Name**: `event`
- **Type**: `options`
- **Default**: `"newChannelMessage"`
- **Description**: A new channel is created

### Watch All Teams

- **Name**: `watchAllTeams`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to watch for the event in all the available teams

### Team

- **Name**: `teamId`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Description**: Select a team from the list, enter an ID or a URL
- **Placeholder**: Select a team...

### Watch All Channels

- **Name**: `watchAllChannels`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to watch for the event in all the available channels

### Channel

- **Name**: `channelId`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Description**: Select a channel from the list, enter an ID or a URL
- **Placeholder**: Select a channel...

### Watch All Chats

- **Name**: `watchAllChats`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to watch for the event in all the available chats

### Chat

- **Name**: `chatId`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Description**: Select a chat from the list, enter an ID or a URL
- **Placeholder**: Select a chat...


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftTeamsTrigger`
- **Display Name**: Microsoft Teams Trigger
- **Internal Name**: `microsoftTeamsTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteamstrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/Teams/MicrosoftTeamsTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
