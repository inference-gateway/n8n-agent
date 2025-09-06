# Compare Datasets

## Description

Compare two inputs for changes

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Compare Datasets
    parameters:
      infoBox: ""
      mergeByFields: "{ values: [{ field1: '', field2: '' }] }"
      resolve: "preferInput2" # Output uses different inputs for different fields
      resolve: "includeBoth" # Output uses different inputs for different fields
      fuzzyCompare: false # Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.
      preferWhenMix: "input1"
      exceptWhenMix: ""
      options: # Fields that shouldn't be included when checking whether two items are the same
        skipFields: "" # Fields that shouldn't be included when checking whether two items are the same
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.compareDatasets
```

## Parameters

### Items from different branches are paired together when the fields below match. If paired, the rest of the fields are compared to determine whether the items are the same or different

- **Name**: `infoBox`
- **Type**: `notice`
- **Default**: `""`

### Fields to Match

- **Name**: `mergeByFields`
- **Type**: `fixedCollection`
- **Default**: `"{ values: [{ field1: '', field2: '' }] }"`
- **Placeholder**: Add Fields to Match

### When There Are Differences

- **Name**: `resolve`
- **Type**: `options`
- **Default**: `"preferInput2"`
- **Description**: Output uses different inputs for different fields

### When There Are Differences

- **Name**: `resolve`
- **Type**: `options`
- **Default**: `"includeBoth"`
- **Description**: Output uses different inputs for different fields

### Fuzzy Compare

- **Name**: `fuzzyCompare`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.

### Prefer

- **Name**: `preferWhenMix`
- **Type**: `options`
- **Default**: `"input1"`

### For Everything Except

- **Name**: `exceptWhenMix`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: e.g. id, country

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Fields that shouldn't be included when checking whether two items are the same
- **Placeholder**: Add option

**Options:**

#### Fields to Skip Comparing
- **Name**: `skipFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: Fields that shouldn't be included when checking whether two items are the same



## Node Information

- **Node Type**: `n8n-nodes-base.compareDatasets`
- **Display Name**: Compare Datasets
- **Internal Name**: `compareDatasets`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CompareDatasets/CompareDatasets.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
