# Interval

## Description

Triggers the workflow in a given interval

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Interval
    parameters:
      notice: ""
      interval: "1" # Interval value
      unit: "seconds" # Unit of the interval value
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.interval
```

## Parameters

### This workflow will run on the schedule you define here once you <a data-key="activate">activate</a> it.<br><br>For testing, you can also trigger it manually: by going back to the canvas and clicking \'execute workflow\'

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Interval

- **Name**: `interval`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Interval value

### Unit

- **Name**: `unit`
- **Type**: `options`
- **Default**: `"seconds"`
- **Description**: Unit of the interval value


## Node Information

- **Node Type**: `n8n-nodes-base.interval`
- **Display Name**: Interval
- **Internal Name**: `interval`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.interval/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Interval/Interval.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
