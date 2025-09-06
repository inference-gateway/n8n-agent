# Model Selector

## Description

Use this node to select one of the connected models to this node based on workflow data

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Model Selector
    parameters:
      rules: {} # Rules to map workflow data to specific models
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.modelSelector
```

## Parameters

### Rules

- **Name**: `rules`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Rules to map workflow data to specific models
- **Placeholder**: Add Rule


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.modelSelector`
- **Display Name**: Model Selector
- **Internal Name**: `modelSelector`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.modelselector/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/ModelSelector/ModelSelector.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
