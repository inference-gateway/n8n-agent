# Summarize

## Description

Sum, count, max, etc. across items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Summarize
    parameters:
      fieldsToSummarize: "{ values: [{ aggregation: 'count', field: '' }] }" # How to combine the values of the field you want to summarize
      fieldsToSplitBy: "" # The name of the input fields that you want to split the summary by
      fieldsToSplitBy: "" # The name of the input fields that you want to split the summary by
      options: {} # Whether to continue if field to summarize can't be found in any items and return single empty item, otherwise an error would be thrown
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.summarize
```

## Parameters

### Fields to Summarize

- **Name**: `fieldsToSummarize`
- **Type**: `fixedCollection`
- **Default**: `"{ values: [{ aggregation: 'count', field: '' }] }"`
- **Description**: How to combine the values of the field you want to summarize
- **Placeholder**: Add Field

### Fields to Split By

- **Name**: `fieldsToSplitBy`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the input fields that you want to split the summary by
- **Placeholder**: e.g. country, city

### Fields to Group By

- **Name**: `fieldsToSplitBy`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the input fields that you want to split the summary by
- **Placeholder**: e.g. country, city

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to continue if field to summarize can't be found in any items and return single empty item, otherwise an error would be thrown
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.summarize`
- **Display Name**: Summarize
- **Internal Name**: `summarize`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.summarize/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/Summarize/Summarize.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
