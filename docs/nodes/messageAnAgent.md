# Message an n8n Agent

## Description

Send a message to a n8n agent

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Message an n8n Agent
    parameters:
      agentId: "{ mode: 'list', value: '' }" # The agent to send the message to
      message: "" # The message to send to the agent
      useStructuredOutput: false # Whether to constrain the agent response to a JSON Schema you provide. The conforming object is returned on the "structuredOutput" field.
      outputSchema: "{
  "type": "object",
  "properties": {
    "result": {
      "type": "string",
      "description": "The result of the task"
    }
  },
  "required": ["result"]
}" # The JSON Schema that the agent response must conform to
      structuredOutputNotice: ""
      advanced: # Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
        sessionId: "" # Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.messageAnAgent
```

## Parameters

### Agent

- **Name**: `agentId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The agent to send the message to
- **Placeholder**: e.g. abc123

### Message

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to send to the agent

### Require Specific Output Format

- **Name**: `useStructuredOutput`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to constrain the agent response to a JSON Schema you provide. The conforming object is returned on the "structuredOutput" field.

### Output Schema

- **Name**: `outputSchema`
- **Type**: `json`
- **Default**: `"{\n  \"type\": \"object\",\n  \"properties\": {\n    \"result\": {\n      \"type\": \"string\",\n      \"description\": \"The result of the task\"\n    }\n  },\n  \"required\": [\"result\"]\n}"`
- **Description**: The JSON Schema that the agent response must conform to

### Structured output is enforced by the model provider. For best results across providers, mark every property as required. Some providers reject optional fields or advanced keywords (e.g. OpenAI and xAI), and a few do not support structured output at all (e.g. DeepSeek).

- **Name**: `structuredOutputNotice`
- **Type**: `notice`
- **Default**: `""`

### Advanced

- **Name**: `advanced`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.
- **Placeholder**: Add Option

**Options:**

#### Session ID
- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Reuse an agent session to keep memory across runs. Leave empty to start a fresh session per execution.



## Node Information

- **Node Type**: `n8n-nodes-base.messageAnAgent`
- **Display Name**: Message an n8n Agent
- **Internal Name**: `messageAnAgent`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.messageanagent/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/MessageAnAgent/MessageAnAgent.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
