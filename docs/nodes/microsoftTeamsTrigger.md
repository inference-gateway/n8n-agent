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
      authentication: "microsoftTeamsOAuth2Api" # Generic Microsoft Graph credential. Add the Teams change-notification scopes (e.g. ChannelMessage.Read.All, Chat.Read, Subscription.Read.All) and grant admin consent on the credential. See the docs for the full scope string.
      event: "newChannelMessage" # A new channel is created
      chatTriggerServicePrincipalNotice: ""
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

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftTeamsOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Add the Teams change-notification scopes (e.g. ChannelMessage.Read.All, Chat.Read, Subscription.Read.All) and grant admin consent on the credential. See the docs for the full scope string.

### Trigger On

- **Name**: `event`
- **Type**: `options`
- **Default**: `"newChannelMessage"`
- **Description**: A new channel is created

### Chat triggers (New Chat, New Chat Message) are not available with the Service Principal credential. App-only Microsoft Graph cannot subscribe to the chats of a signed-in user; use an OAuth2 credential for chat triggers.

- **Name**: `chatTriggerServicePrincipalNotice`
- **Type**: `notice`
- **Default**: `""`

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
