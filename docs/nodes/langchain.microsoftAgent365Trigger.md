# Microsoft Agent 365 Trigger

## Description

Trigger for Microsoft Agent 365

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Agent 365 Trigger
    parameters:
      previewNotice: ""
      systemPrompt: ""
      notice: ""
      needsFallback: false
      fallbackNotice: ""
      useMcpTools: false # Whether to allow the agent to use Microsoft MCP tools like Calendar, Email, and OneDrive to assist in completing tasks. Requires appropriate permissions in your Microsoft account.
      include: "all"
      includeTools: []
      hasOutputParser: false
      options: # The maximum number of iterations the agent will run before stopping
        maxIterations: "10" # The maximum number of iterations the agent will run before stopping
        welcomeMessage: "Hello! I'm here to help you!"
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.microsoftAgent365Trigger
```

## Parameters

### This is an early preview for building Agents with Microsoft Agent 365 and n8n. You need to be part of the <a href="https://adoption.microsoft.com/copilot/frontier-program/" target="_blank">Frontier preview program</a> to get early access to Microsoft Agent 365. <a href="https://github.com/microsoft/Agent365-Samples/tree/main/nodejs/n8n/sample-agent" target="_blank">Learn more</a>

- **Name**: `previewNotice`
- **Type**: `notice`
- **Default**: `""`

### System Prompt

- **Name**: `systemPrompt`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. You are a friendly assistant that helps people find a weather forecast for a given time and place.

### Connect an <a data-action='openSelectiveNodeCreator' data-action-parameter-connectiontype='${NodeConnectionTypes.AiOutputParser}'>output parser</a> on the canvas to specify the output format you require

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Enable Fallback Model

- **Name**: `needsFallback`
- **Type**: `boolean`
- **Default**: `false`

### Connect an additional language model on the canvas to use it as a fallback if the main model fails

- **Name**: `fallbackNotice`
- **Type**: `notice`
- **Default**: `""`

### Enable Microsoft Work IQ Tools for A365

- **Name**: `useMcpTools`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to allow the agent to use Microsoft MCP tools like Calendar, Email, and OneDrive to assist in completing tasks. Requires appropriate permissions in your Microsoft account.

### Tools to Include

- **Name**: `include`
- **Type**: `options`
- **Default**: `"all"`

### Tools to Include

- **Name**: `includeTools`
- **Type**: `multiOptions`
- **Default**: `"[]"`

### Require Specific Output Format

- **Name**: `hasOutputParser`
- **Type**: `boolean`
- **Default**: `false`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The maximum number of iterations the agent will run before stopping
- **Placeholder**: Add Option

**Options:**

#### Max Iterations
- **Name**: `maxIterations`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: The maximum number of iterations the agent will run before stopping

#### Welcome Message
- **Name**: `welcomeMessage`
- **Type**: `string`
- **Default**: `"Hello! I'm here to help you!"`



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.microsoftAgent365Trigger`
- **Display Name**: Microsoft Agent 365 Trigger
- **Internal Name**: `microsoftAgent365Trigger`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/vendors/Microsoft/MicrosoftAgent365Trigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
