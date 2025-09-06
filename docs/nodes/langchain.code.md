# LangChain Code

## Description

LangChain Code Node

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: LangChain Code
    parameters:
      code: {}
      notice: ""
      inputs: {} # The input to add
      outputs: {} # The output to add
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.code
```

## Parameters

### Code

- **Name**: `code`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Placeholder**: Add Code

### You can import LangChain and use all available functionality. Debug by using <code>console.log()</code> statements and viewing their output in the browser console.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Inputs

- **Name**: `inputs`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The input to add
- **Placeholder**: Add Input

### Outputs

- **Name**: `outputs`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The output to add
- **Placeholder**: Add Output


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.code`
- **Display Name**: LangChain Code
- **Internal Name**: `code`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/code/Code.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
