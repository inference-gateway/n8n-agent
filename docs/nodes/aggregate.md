# Aggregate

## Description

Combine a field from many items into a list in a single item

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Aggregate
    parameters:
      aggregate: "aggregateIndividualFields"
      fieldsToAggregate: "{ fieldToAggregate: [{ fieldToAggregate: '', renameField: false }] }" # The name of a field in the input items to aggregate together
      destinationFieldName: "data" # The name of the output field to put the data in
      include: "allFields"
      fieldsToExclude: ""
      fieldsToInclude: ""
      options: {} # Whether to disallow referencing child fields using `parent.child` in the field name
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.aggregate
```

## Parameters

### Aggregate

- **Name**: `aggregate`
- **Type**: `options`
- **Default**: `"aggregateIndividualFields"`

### Fields To Aggregate

- **Name**: `fieldsToAggregate`
- **Type**: `fixedCollection`
- **Default**: `"{ fieldToAggregate: [{ fieldToAggregate: '', renameField: false }] }"`
- **Description**: The name of a field in the input items to aggregate together
- **Placeholder**: Add Field To Aggregate

### Put Output in Field

- **Name**: `destinationFieldName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the output field to put the data in

### Include

- **Name**: `include`
- **Type**: `options`
- **Default**: `"allFields"`

### Fields To Exclude

- **Name**: `fieldsToExclude`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. email, name

### Fields To Include

- **Name**: `fieldsToInclude`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. email, name

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to disallow referencing child fields using `parent.child` in the field name
- **Placeholder**: Add Field


## Node Information

- **Node Type**: `n8n-nodes-base.aggregate`
- **Display Name**: Aggregate
- **Internal Name**: `aggregate`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/Aggregate/Aggregate.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
