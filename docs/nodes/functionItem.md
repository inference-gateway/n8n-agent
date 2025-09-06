# Function Item

## Description

Run custom function code which gets executed once per item

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Function Item
    parameters:
      notice: ""
      functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.functionitem/
// Tip: You can use luxon for dates and $jmespath for querying JSON structures

// Add a new field called 'myNewField' to the JSON of the item
item.myNewField = 1;

// You can write logs to the browser console
console.log('Done!');

return item;" # The JavaScript code to execute for each item
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.functionItem
```

## Parameters

### A newer version of this node type is available, called the ‘Code’ node

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### JavaScript Code

- **Name**: `functionCode`
- **Type**: `string`
- **Default**: `"// Code here will run once per input item.\n// More info and help: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.functionitem/\n// Tip: You can use luxon for dates and $jmespath for querying JSON structures\n\n// Add a new field called 'myNewField' to the JSON of the item\nitem.myNewField = 1;\n\n// You can write logs to the browser console\nconsole.log('Done!');\n\nreturn item;"`
- **Description**: The JavaScript code to execute for each item


## Node Information

- **Node Type**: `n8n-nodes-base.functionItem`
- **Display Name**: Function Item
- **Internal Name**: `functionItem`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.functionitem/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/FunctionItem/FunctionItem.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
