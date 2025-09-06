# Manual Trigger

## Description

Runs the flow on clicking a button in n8n

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Manual Trigger
    parameters:
      notice: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.manualTrigger
```

## Parameters

### This node is where the workflow execution starts (when you click the ‘test’ button on the canvas).<br><br> <a data-action="showNodeCreator">Explore other ways to trigger your workflow</a> (e.g on a schedule, or a webhook)

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.manualTrigger`
- **Display Name**: Manual Trigger
- **Internal Name**: `manualTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.manualtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ManualTrigger/ManualTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
