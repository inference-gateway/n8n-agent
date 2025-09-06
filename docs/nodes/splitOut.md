# Split Out

## Description

Turn a list inside item(s) into separate items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Split Out
    parameters:
      fieldToSplitOut: "" # The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary.
      include: "noOtherFields" # Whether to copy any other fields into the new items
      fieldsToInclude: "" # Fields in the input items to aggregate together
      options: # Whether to disallow referencing child fields using `parent.child` in the field name
        disableDotNotation: false # Whether to disallow referencing child fields using `parent.child` in the field name
        destinationFieldName: "" # The field in the output under which to put the split field contents
        includeBinary: false # Whether to include the binary data in the new items
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.splitOut
```

## Parameters

### Fields To Split Out

- **Name**: `fieldToSplitOut`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary.
- **Placeholder**: Drag fields from the left or type their names

### Include

- **Name**: `include`
- **Type**: `options`
- **Default**: `"noOtherFields"`
- **Description**: Whether to copy any other fields into the new items

### Fields To Include

- **Name**: `fieldsToInclude`
- **Type**: `string`
- **Default**: `""`
- **Description**: Fields in the input items to aggregate together
- **Placeholder**: e.g. email, name

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

#### Destination Field Name
- **Name**: `destinationFieldName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The field in the output under which to put the split field contents

#### Include Binary
- **Name**: `includeBinary`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include the binary data in the new items



## Node Information

- **Node Type**: `n8n-nodes-base.splitOut`
- **Display Name**: Split Out
- **Internal Name**: `splitOut`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.splitout/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/SplitOut/SplitOut.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
