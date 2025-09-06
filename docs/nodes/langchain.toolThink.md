# Think Tool

## Description

Invite the AI agent to do some thinking

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Think Tool
    parameters:
      description: "defaultToolDescription" # The thinking tool's description
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.toolThink
```

## Parameters

### Think Tool Description

- **Name**: `description`
- **Type**: `string`
- **Default**: `"defaultToolDescription"`
- **Description**: The thinking tool's description
- **Placeholder**: [Describe your thinking tool here, explaining how it will help the AI think]


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.toolThink`
- **Display Name**: Think Tool
- **Internal Name**: `toolThink`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.toolthink/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/tools/ToolThink/ToolThink.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
