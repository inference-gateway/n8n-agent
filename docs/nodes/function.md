# Function

## Description

Run custom function code which gets executed once and allows you to add, remove, change and replace items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Function
    parameters:
      notice: ""
      functionCode: "// Code here will run only once, no matter how many input items there are.
// More info and help:https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.function/
// Tip: You can use luxon for dates and $jmespath for querying JSON structures

// Loop over inputs and add a new field called 'myNewField' to the JSON of each one
for (item of items) {
  item.json.myNewField = 1;
}

// You can write logs to the browser console
console.log('Done!');

return items;" # The JavaScript code to execute
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.function
```

## Parameters

### A newer version of this node type is available, called the ‘Code’ node

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### JavaScript Code

- **Name**: `functionCode`
- **Type**: `string`
- **Default**: `"// Code here will run only once, no matter how many input items there are.\n// More info and help:https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.function/\n// Tip: You can use luxon for dates and $jmespath for querying JSON structures\n\n// Loop over inputs and add a new field called 'myNewField' to the JSON of each one\nfor (item of items) {\n  item.json.myNewField = 1;\n}\n\n// You can write logs to the browser console\nconsole.log('Done!');\n\nreturn items;"`
- **Description**: The JavaScript code to execute


## Node Information

- **Node Type**: `n8n-nodes-base.function`
- **Display Name**: Function
- **Internal Name**: `function`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.function/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Function/Function.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
