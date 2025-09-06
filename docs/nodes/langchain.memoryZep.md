# Zep

## Description

Use Zep Memory

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Zep
    parameters:
      deprecationNotice: ""
      supportedVersions: ""
      sessionId: ""
      sessionId: "={{ $json.sessionId }}" # The key to use to store the memory
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.memoryZep
```

## Parameters

### This Zep integration is deprecated and will be removed in a future version.

- **Name**: `deprecationNotice`
- **Type**: `notice`
- **Default**: `""`

### Only works with Zep Cloud and Community edition <= v0.27.2

- **Name**: `supportedVersions`
- **Type**: `notice`
- **Default**: `""`

### Session ID

- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `""`

### Session ID

- **Name**: `sessionId`
- **Type**: `string`
- **Default**: `"={{ $json.sessionId }}"`
- **Description**: The key to use to store the memory


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.memoryZep`
- **Display Name**: Zep
- **Internal Name**: `memoryZep`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.memoryzep/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/memory/MemoryZep/MemoryZep.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
