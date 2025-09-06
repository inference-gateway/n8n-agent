# Sort

## Description

Change items order

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Sort
    parameters:
      type: "simple" # The type of sorting to perform
      sortFieldsUi: "" # The field to sort by
      code: "// The two items to compare are in the variables a and b
	// Access the fields in a.json and b.json
	// Return -1 if a should go before b
	// Return 1 if b should go before a
	// Return 0 if there's no difference

	fieldName = 'myField';

	if (a.json[fieldName] < b.json[fieldName]) {
	return -1;
	}
	if (a.json[fieldName] > b.json[fieldName]) {
	return 1;
	}
	return 0;" # Javascript code to determine the order of any two items
      options: # Whether to disallow referencing child fields using `parent.child` in the field name
        disableDotNotation: false # Whether to disallow referencing child fields using `parent.child` in the field name
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.sort
```

## Parameters

### Type

- **Name**: `type`
- **Type**: `options`
- **Default**: `"simple"`
- **Description**: The type of sorting to perform

### Fields To Sort By

- **Name**: `sortFieldsUi`
- **Type**: `fixedCollection`
- **Default**: `""`
- **Description**: The field to sort by
- **Placeholder**: Add Field To Sort By

### Code

- **Name**: `code`
- **Type**: `string`
- **Default**: `"// The two items to compare are in the variables a and b\n\t// Access the fields in a.json and b.json\n\t// Return -1 if a should go before b\n\t// Return 1 if b should go before a\n\t// Return 0 if there's no difference\n\n\tfieldName = 'myField';\n\n\tif (a.json[fieldName] < b.json[fieldName]) {\n\treturn -1;\n\t}\n\tif (a.json[fieldName] > b.json[fieldName]) {\n\treturn 1;\n\t}\n\treturn 0;"`
- **Description**: Javascript code to determine the order of any two items

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to disallow referencing child fields using `parent.child` in the field name
- **Placeholder**: Add Field

**Options:**

#### Disable Dot Notation
- **Name**: `disableDotNotation`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to disallow referencing child fields using `parent.child` in the field name



## Node Information

- **Node Type**: `n8n-nodes-base.sort`
- **Display Name**: Sort
- **Internal Name**: `sort`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sort/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/Sort/Sort.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
