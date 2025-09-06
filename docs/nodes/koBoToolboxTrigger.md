# KoBoToolbox Trigger

## Description

Process KoBoToolbox submissions

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: KoBoToolbox Trigger
    parameters:
      formId: "" # Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      triggerOn: "formSubmission"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.koBoToolboxTrigger
```

## Parameters

### Form Name or ID

- **Name**: `formId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `"formSubmission"`


## Node Information

- **Node Type**: `n8n-nodes-base.koBoToolboxTrigger`
- **Display Name**: KoBoToolbox Trigger
- **Internal Name**: `koBoToolboxTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kobotoolboxtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/KoBoToolbox/KoBoToolboxTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
