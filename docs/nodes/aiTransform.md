# AI Transform

## Description

Modify data based on instructions written in plain english

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AI Transform
    parameters:
      instructions: "" # Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.aiTransform
```

## Parameters

### Instructions

- **Name**: `instructions`
- **Type**: `button`
- **Default**: `""`
- **Description**: Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).
- **Placeholder**: Example: Merge 'firstname' and 'lastname' into a field 'details.name' and sort by 'email'


## Node Information

- **Node Type**: `n8n-nodes-base.aiTransform`
- **Display Name**: AI Transform
- **Internal Name**: `aiTransform`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.aitransform/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/AiTransform/AiTransform.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
