# OpenAI

## Description

Consume Open AI

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenAI
    parameters:
      resource: "text"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.openAi
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"text"`


## Node Information

- **Node Type**: `n8n-nodes-base.openAi`
- **Display Name**: OpenAI
- **Internal Name**: `openAi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openai/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/OpenAi/OpenAi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
