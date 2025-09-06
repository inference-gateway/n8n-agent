# Basic LLM Chain

## Description

A simple chain to prompt a large language model

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Basic LLM Chain
    parameters:
      # No parameters available
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.chainLlm
```

## Parameters

This node has no configurable parameters.

## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.chainLlm`
- **Display Name**: Basic LLM Chain
- **Internal Name**: `chainLlm`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/chains/ChainLLM/ChainLlm.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
