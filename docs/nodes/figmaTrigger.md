# Figma Trigger (Beta)

## Description

Starts the workflow when Figma events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Figma Trigger (Beta)
    parameters:
      teamId: "" # Trigger will monitor this Figma Team for changes. Team ID can be found in the URL of a Figma Team page when viewed in a web browser: figma.com/files/team/{TEAM-ID}/.
      triggerOn: "" # Triggers when someone comments on a file
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.figmaTrigger
```

## Parameters

### Team ID

- **Name**: `teamId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Trigger will monitor this Figma Team for changes. Team ID can be found in the URL of a Figma Team page when viewed in a web browser: figma.com/files/team/{TEAM-ID}/.

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`
- **Description**: Triggers when someone comments on a file


## Node Information

- **Node Type**: `n8n-nodes-base.figmaTrigger`
- **Display Name**: Figma Trigger (Beta)
- **Internal Name**: `figmaTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.figmatrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Figma/FigmaTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
