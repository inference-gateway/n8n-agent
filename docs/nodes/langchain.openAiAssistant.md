# OpenAI Assistant

## Description

Utilizes Assistant API from Open AI.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenAI Assistant
    parameters:
      mode: "existing"
      name: ""
      instructions: "" # How the Assistant and model should behave or respond
      model: "gpt-3.5-turbo-1106" # The model which will be used to power the assistant. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>. The Retrieval tool requires gpt-3.5-turbo-1106 and gpt-4-1106-preview models.
      assistantId: "" # The assistant to use. <a href="https://beta.openai.com/docs/assistants/overview">Learn more</a>.
      text: "={{ $json.chat_input }}"
      text: "={{ $json.chatInput }}"
      nativeTools: []
      noticeTools: ""
      noticeTools: ""
      options: # Additional options to add
        baseURL: "https://api.openai.com/v1" # Override the default base URL for the API
        maxRetries: "2" # Maximum number of retries to attempt
        timeout: "10000" # Maximum amount of time a request is allowed to take in milliseconds
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.openAiAssistant
```

## Parameters

### Operation

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"existing"`

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`

### Instructions

- **Name**: `instructions`
- **Type**: `string`
- **Default**: `""`
- **Description**: How the Assistant and model should behave or respond

### Model

- **Name**: `model`
- **Type**: `options`
- **Default**: `"gpt-3.5-turbo-1106"`
- **Description**: The model which will be used to power the assistant. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>. The Retrieval tool requires gpt-3.5-turbo-1106 and gpt-4-1106-preview models.

### Assistant

- **Name**: `assistantId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The assistant to use. <a href="https://beta.openai.com/docs/assistants/overview">Learn more</a>.

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `"={{ $json.chat_input }}"`

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `"={{ $json.chatInput }}"`

### OpenAI Tools

- **Name**: `nativeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`

### Connect your own custom tools to this node on the canvas

- **Name**: `noticeTools`
- **Type**: `notice`
- **Default**: `""`

### Upload files for retrieval using the <a href="https://platform.openai.com/playground" target="_blank">OpenAI website<a/>

- **Name**: `noticeTools`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional options to add
- **Placeholder**: Add Option

**Options:**

#### Base URL
- **Name**: `baseURL`
- **Type**: `string`
- **Default**: `"https://api.openai.com/v1"`
- **Description**: Override the default base URL for the API

#### Max Retries
- **Name**: `maxRetries`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Maximum number of retries to attempt

#### Timeout
- **Name**: `timeout`
- **Type**: `number`
- **Default**: `"10000"`
- **Description**: Maximum amount of time a request is allowed to take in milliseconds



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.openAiAssistant`
- **Display Name**: OpenAI Assistant
- **Internal Name**: `openAiAssistant`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.openaiassistant/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/agents/OpenAiAssistant/OpenAiAssistant.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
