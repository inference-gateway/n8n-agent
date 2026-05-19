# Track Time Saved

## Description

Dynamically track time saved based on the workflow’s execution path and the number of items processed

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Track Time Saved
    parameters:
      notice: ""
      mode: "once" # Counts minutes saved once for all input items
      minutesSaved: "0" # Number of minutes saved by this workflow execution
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.timeSaved
```

## Parameters

### For each run, time saved is the sum of all Time Saved nodes that execute. Use this when different execution paths or items save different amounts of time.

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Calculation Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"once"`
- **Description**: Counts minutes saved once for all input items

### Minutes Saved

- **Name**: `minutesSaved`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Number of minutes saved by this workflow execution


## Node Information

- **Node Type**: `n8n-nodes-base.timeSaved`
- **Display Name**: Track Time Saved
- **Internal Name**: `timeSaved`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.timesaved/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/TimeSaved/TimeSaved.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
