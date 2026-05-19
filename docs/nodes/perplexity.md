# Perplexity

## Description

AI-powered answer engine that provides accurate, trusted, and real-time answers to any question. Supports chat completions, agent responses, web search, and embeddings.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Perplexity
    parameters:
      resource: "chat"
      resource: "chat" # Create responses using the Agent API with third-party models, presets, tools, and structured outputs
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.perplexity
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `hidden`
- **Default**: `"chat"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"chat"`
- **Description**: Create responses using the Agent API with third-party models, presets, tools, and structured outputs


## Node Information

- **Node Type**: `n8n-nodes-base.perplexity`
- **Display Name**: Perplexity
- **Internal Name**: `perplexity`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.perplexity/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Perplexity/Perplexity.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
