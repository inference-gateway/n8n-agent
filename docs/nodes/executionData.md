# Execution Data

## Description

Add execution data for search

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Execution Data
    parameters:
      notice: ""
      operation: "save"
      dataToSave: {}
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.executionData
```

## Parameters

### Save important data using this node. It will be displayed on each execution for easy reference and you can filter by it.<br />Filtering is available on Pro and Enterprise plans. <a href='https://n8n.io/pricing/' target='_blank'>More Info</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"save"`

### Data to Save

- **Name**: `dataToSave`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Placeholder**: Add Saved Field


## Node Information

- **Node Type**: `n8n-nodes-base.executionData`
- **Display Name**: Execution Data
- **Internal Name**: `executionData`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.executiondata/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ExecutionData/ExecutionData.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
