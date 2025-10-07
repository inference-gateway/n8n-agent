# Error Trigger

## Description

Triggers the workflow when another workflow has an error

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Error Trigger
    parameters:
      notice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.errorTrigger
```

## Parameters

### This node will trigger when there is an error in another workflow, as long as that workflow is set up to do so. <a href="https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.errortrigger" target="_blank">More info</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.errorTrigger`
- **Display Name**: Error Trigger
- **Internal Name**: `errorTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.errortrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ErrorTrigger/ErrorTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
