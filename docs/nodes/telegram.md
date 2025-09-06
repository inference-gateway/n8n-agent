# Telegram

## Description

Sends data to Telegram

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Telegram
    parameters:
      resource: "message"
      operation: "info" # Get information about the bot associated with the access token.
      operation: "get" # Get up to date information about a chat
      operation: "answerQuery" # Send answer to callback query sent from inline keyboard
      operation: "get" # Get a file
      operation: "sendMessage" # Delete a chat message
      chatId: "" # Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot
      messageId: "" # Unique identifier of the message to delete
      messageId: "" # Unique identifier of the message to pin or unpin
      additionalFields: # Whether to send a notification to all chat members about the new pinned message
        disable_notification: false # Whether to send a notification to all chat members about the new pinned message
      userId: "" # Unique identifier of the target user
      description: "" # New chat description, 0-255 characters
      title: "" # New chat title, 1-255 characters
      queryId: "" # Unique identifier for the query to be answered
      additionalFields: # The maximum amount of time in seconds that the result of the callback query may be cached client-side
        cache_time: "0" # The maximum amount of time in seconds that the result of the callback query may be cached client-side
        show_alert: false # Whether an alert will be shown by the client instead of a notification at the top of the chat screen
        text: "" # Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.
        url: "" # URL that will be opened by the user's client
      queryId: "" # Unique identifier for the answered query
      results: "" # A JSON-serialized array of results for the inline query
      additionalFields: # The maximum amount of time in seconds that the result of the callback query may be cached client-side
        cache_time: "0" # The maximum amount of time in seconds that the result of the callback query may be cached client-side
        show_alert: false # Whether an alert will be shown by the client instead of a notification at the top of the chat screen
        text: "" # Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.
        url: "" # URL that will be opened by the user's client
      fileId: "" # The ID of the file
      download: true # Whether to download the file
      additionalFields: # The MIME type of the file. If not specified, the MIME type will be determined by the file extension.
        mimeType: "" # The MIME type of the file. If not specified, the MIME type will be determined by the file extension.
      messageType: "message" # The type of the message to edit
      chatId: "" # Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot
      binaryData: false # Whether the data to upload should be taken from binary field
      binaryPropertyName: "data" # Name of the binary property that contains the data to upload
      messageId: "" # Unique identifier of the message to edit
      inlineMessageId: "" # Unique identifier of the inline message to edit
      replyMarkup: "none" # Additional interface options
      file: "" # Animation to send. Pass a file_id to send an animation that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get an animation from the Internet.
      file: "" # Audio file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
      action: "typing" # Type of action to broadcast. Choose one, depending on what the user is about to receive. The status is set for 5 seconds or less (when a message arrives from your bot).
      file: "" # Document to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
      latitude: "0.0" # Location latitude
      longitude: "0.0" # Location longitude
      media: {} # The media to add
      text: "" # Text of the message to be sent
      file: "" # Photo to send. Pass a file_id to send a photo that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a photo from the Internet.
      file: "" # Sticker to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a .webp file from the Internet.
      file: "" # Video file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.
      replyMarkup: "none" # Additional interface options
      forceReply: # Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply
        force_reply: false # Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply
        selective: false # Whether to force reply from specific users only
      inlineKeyboard: {} # Adds an inline keyboard that appears right next to the message it belongs to
      replyKeyboard: {} # Adds a custom keyboard with reply options
      replyKeyboardOptions: # Whether to request clients to resize the keyboard vertically for optimal fit
        resize_keyboard: false # Whether to request clients to resize the keyboard vertically for optimal fit
        one_time_keyboard: false # Whether to request clients to hide the keyboard as soon as it's been used
        selective: false # Whether to show the keyboard to specific users only
      replyKeyboardRemove: # Whether to request clients to remove the custom keyboard
        remove_keyboard: false # Whether to request clients to remove the custom keyboard
        selective: false # Whether to force reply from specific users only
      additionalFields: {} # Whether to include the phrase “This message was sent automatically with n8n” to the end of the message
      chatId: "" # Unique identifier for the target chat or username of the target channel (in the format @channelusername). To find your chat ID ask @get_id_bot.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.telegram
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"message"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"info"`
- **Description**: Get information about the bot associated with the access token.

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get up to date information about a chat

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"answerQuery"`
- **Description**: Send answer to callback query sent from inline keyboard

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a file

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"sendMessage"`
- **Description**: Delete a chat message

### Chat ID

- **Name**: `chatId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot

### Message ID

- **Name**: `messageId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier of the message to delete

### Message ID

- **Name**: `messageId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier of the message to pin or unpin

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to send a notification to all chat members about the new pinned message
- **Placeholder**: Add Field

**Options:**

#### Disable Notification
- **Name**: `disable_notification`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to send a notification to all chat members about the new pinned message


### User ID

- **Name**: `userId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier of the target user

### Description

- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: New chat description, 0-255 characters

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: New chat title, 1-255 characters

### Query ID

- **Name**: `queryId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the query to be answered

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The maximum amount of time in seconds that the result of the callback query may be cached client-side
- **Placeholder**: Add Field

**Options:**

#### Cache Time
- **Name**: `cache_time`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The maximum amount of time in seconds that the result of the callback query may be cached client-side

#### Show Alert
- **Name**: `show_alert`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether an alert will be shown by the client instead of a notification at the top of the chat screen

#### Text
- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.

#### URL
- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL that will be opened by the user's client


### Query ID

- **Name**: `queryId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the answered query

### Results

- **Name**: `results`
- **Type**: `string`
- **Default**: `""`
- **Description**: A JSON-serialized array of results for the inline query

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The maximum amount of time in seconds that the result of the callback query may be cached client-side
- **Placeholder**: Add Field

**Options:**

#### Cache Time
- **Name**: `cache_time`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The maximum amount of time in seconds that the result of the callback query may be cached client-side

#### Show Alert
- **Name**: `show_alert`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether an alert will be shown by the client instead of a notification at the top of the chat screen

#### Text
- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.

#### URL
- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL that will be opened by the user's client


### File ID

- **Name**: `fileId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the file

### Download

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to download the file

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The MIME type of the file. If not specified, the MIME type will be determined by the file extension.
- **Placeholder**: Add Field

**Options:**

#### MIME Type
- **Name**: `mimeType`
- **Type**: `string`
- **Default**: `""`
- **Description**: The MIME type of the file. If not specified, the MIME type will be determined by the file extension.


### Message Type

- **Name**: `messageType`
- **Type**: `options`
- **Default**: `"message"`
- **Description**: The type of the message to edit

### Chat ID

- **Name**: `chatId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot

### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data to upload should be taken from binary field

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the binary property that contains the data to upload

### Message ID

- **Name**: `messageId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier of the message to edit

### Inline Message ID

- **Name**: `inlineMessageId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier of the inline message to edit

### Reply Markup

- **Name**: `replyMarkup`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Additional interface options

### Animation

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Animation to send. Pass a file_id to send an animation that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get an animation from the Internet.

### Audio

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Audio file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.

### Action

- **Name**: `action`
- **Type**: `options`
- **Default**: `"typing"`
- **Description**: Type of action to broadcast. Choose one, depending on what the user is about to receive. The status is set for 5 seconds or less (when a message arrives from your bot).

### Document

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Document to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.

### Latitude

- **Name**: `latitude`
- **Type**: `number`
- **Default**: `"0.0"`
- **Description**: Location latitude

### Longitude

- **Name**: `longitude`
- **Type**: `number`
- **Default**: `"0.0"`
- **Description**: Location longitude

### Media

- **Name**: `media`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The media to add
- **Placeholder**: Add Media

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text of the message to be sent

### Photo

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Photo to send. Pass a file_id to send a photo that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a photo from the Internet.

### Sticker

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Sticker to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a .webp file from the Internet.

### Video

- **Name**: `file`
- **Type**: `string`
- **Default**: `""`
- **Description**: Video file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.

### Reply Markup

- **Name**: `replyMarkup`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Additional interface options

### Force Reply

- **Name**: `forceReply`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply
- **Placeholder**: Add Field

**Options:**

#### Force Reply
- **Name**: `force_reply`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply

#### Selective
- **Name**: `selective`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to force reply from specific users only


### Inline Keyboard

- **Name**: `inlineKeyboard`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Adds an inline keyboard that appears right next to the message it belongs to
- **Placeholder**: Add Keyboard Row

### Reply Keyboard

- **Name**: `replyKeyboard`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Adds a custom keyboard with reply options
- **Placeholder**: Add Reply Keyboard Row

### Reply Keyboard Options

- **Name**: `replyKeyboardOptions`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to request clients to resize the keyboard vertically for optimal fit
- **Placeholder**: Add option

**Options:**

#### Resize Keyboard
- **Name**: `resize_keyboard`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to request clients to resize the keyboard vertically for optimal fit

#### One Time Keyboard
- **Name**: `one_time_keyboard`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to request clients to hide the keyboard as soon as it's been used

#### Selective
- **Name**: `selective`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to show the keyboard to specific users only


### Reply Keyboard Remove

- **Name**: `replyKeyboardRemove`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to request clients to remove the custom keyboard
- **Placeholder**: Add Field

**Options:**

#### Remove Keyboard
- **Name**: `remove_keyboard`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to request clients to remove the custom keyboard

#### Selective
- **Name**: `selective`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to force reply from specific users only


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include the phrase “This message was sent automatically with n8n” to the end of the message
- **Placeholder**: Add Field

### Chat ID

- **Name**: `chatId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Unique identifier for the target chat or username of the target channel (in the format @channelusername). To find your chat ID ask @get_id_bot.


## Node Information

- **Node Type**: `n8n-nodes-base.telegram`
- **Display Name**: Telegram
- **Internal Name**: `telegram`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Telegram/Telegram.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
