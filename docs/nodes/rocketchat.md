# RocketChat

## Description

Consume RocketChat API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: RocketChat
    parameters:
      resource: "chat"
      operation: "postMessage" # Post a message to a channel or a direct message
      channel: "" # The channel name with the prefix in front of it
      text: "" # The text of the message to send, is optional because of attachments
      jsonParameters: false
      options: # This will cause the message’s name to appear as the given alias, but your username will still display
        alias: "" # This will cause the message’s name to appear as the given alias, but your username will still display
        avatar: "" # If provided, this will make the avatar use the provided image URL
        emoji: "" # This will cause the message’s name to appear as the given alias, but your username will still display
      attachments: # The color you want the order on the left side to be, any value background-css supports
        color: "#ff0000" # The color you want the order on the left side to be, any value background-css supports
        text: "" # The text to display for this attachment, it is different than the message’s text
        ts: "" # Displays the time next to the text portion
        thumbUrl: "" # An image that displays to the left of the text, looks better when this is relatively small
        messageLink: "" # Only applicable if the timestamp is provided, as it makes the time clickable to this link
        collapsed: false # Causes the image, audio, and video sections to be hiding when collapsed is true
        authorName: "" # Name of the author
        authorLink: "" # Providing this makes the author name clickable and points to this link
        authorIcon: "" # Displays a tiny icon to the left of the Author’s name
        title: "" # Title to display for this attachment, displays under the author
        titleLink: "" # Providing this makes the title clickable, pointing to this link
        titleLinkDownload: false # When this is true, a download icon appears and clicking this saves the link to file
        imageUrl: "" # The image to display, will be “big” and easy to see
        audioUrl: "" # Audio file to play, only supports what html audio does
        videoUrl: "" # Video file to play, only supports what html video does
      attachmentsJson: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.rocketchat
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"chat"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"postMessage"`
- **Description**: Post a message to a channel or a direct message

### Channel

- **Name**: `channel`
- **Type**: `string`
- **Default**: `""`
- **Description**: The channel name with the prefix in front of it

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text of the message to send, is optional because of attachments

### JSON Parameters

- **Name**: `jsonParameters`
- **Type**: `boolean`
- **Default**: `false`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: This will cause the message’s name to appear as the given alias, but your username will still display
- **Placeholder**: Add option

**Options:**

#### Alias
- **Name**: `alias`
- **Type**: `string`
- **Default**: `""`
- **Description**: This will cause the message’s name to appear as the given alias, but your username will still display

#### Avatar
- **Name**: `avatar`
- **Type**: `string`
- **Default**: `""`
- **Description**: If provided, this will make the avatar use the provided image URL

#### Emoji
- **Name**: `emoji`
- **Type**: `string`
- **Default**: `""`
- **Description**: This will cause the message’s name to appear as the given alias, but your username will still display


### Attachments

- **Name**: `attachments`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The color you want the order on the left side to be, any value background-css supports
- **Placeholder**: Add Attachment Item

**Options:**

#### Color
- **Name**: `color`
- **Type**: `color`
- **Default**: `"#ff0000"`
- **Description**: The color you want the order on the left side to be, any value background-css supports

#### Text
- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text to display for this attachment, it is different than the message’s text

#### Timestamp
- **Name**: `ts`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Displays the time next to the text portion

#### Thumb URL
- **Name**: `thumbUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: An image that displays to the left of the text, looks better when this is relatively small

#### Message Link
- **Name**: `messageLink`
- **Type**: `string`
- **Default**: `""`
- **Description**: Only applicable if the timestamp is provided, as it makes the time clickable to this link

#### Collapsed
- **Name**: `collapsed`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Causes the image, audio, and video sections to be hiding when collapsed is true

#### Author Name
- **Name**: `authorName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the author

#### Author Link
- **Name**: `authorLink`
- **Type**: `string`
- **Default**: `""`
- **Description**: Providing this makes the author name clickable and points to this link

#### Author Icon
- **Name**: `authorIcon`
- **Type**: `string`
- **Default**: `""`
- **Description**: Displays a tiny icon to the left of the Author’s name

#### Title
- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Title to display for this attachment, displays under the author

#### Title Link
- **Name**: `titleLink`
- **Type**: `string`
- **Default**: `""`
- **Description**: Providing this makes the title clickable, pointing to this link

#### Title Link Download
- **Name**: `titleLinkDownload`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When this is true, a download icon appears and clicking this saves the link to file

#### Image URL
- **Name**: `imageUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: The image to display, will be “big” and easy to see

#### Audio URL
- **Name**: `audioUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: Audio file to play, only supports what html audio does

#### Video URL
- **Name**: `videoUrl`
- **Type**: `string`
- **Default**: `""`
- **Description**: Video file to play, only supports what html video does


### Attachments

- **Name**: `attachmentsJson`
- **Type**: `json`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.rocketchat`
- **Display Name**: RocketChat
- **Internal Name**: `rocketchat`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rocketchat/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Rocketchat/Rocketchat.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
