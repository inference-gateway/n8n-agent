# Loop Over Items (Split in Batches)

## Description

Split data into batches and iterate over each batch

**Version**: 3

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Loop Over Items (Split in Batches)
    parameters:
      splitInBatchesNotice: ""
      batchSize: "1" # The number of items to return with each call
      options: # Whether the node starts again from the beginning of the input items. This will treat incoming data as a new set rather than continuing with the previous items.
        reset: false # Whether the node starts again from the beginning of the input items. This will treat incoming data as a new set rather than continuing with the previous items.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.splitInBatches
```

## Parameters

### You may not need this node — n8n nodes automatically run once for each input item. <a href="https://docs.n8n.io/getting-started/key-concepts/looping.html#using-loops-in-n8n" target="_blank">More info</a>

- **Name**: `splitInBatchesNotice`
- **Type**: `notice`
- **Default**: `""`

### Batch Size

- **Name**: `batchSize`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: The number of items to return with each call

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the node starts again from the beginning of the input items. This will treat incoming data as a new set rather than continuing with the previous items.
- **Placeholder**: Add option

**Options:**

#### Reset
- **Name**: `reset`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the node starts again from the beginning of the input items. This will treat incoming data as a new set rather than continuing with the previous items.



## Node Information

- **Node Type**: `n8n-nodes-base.splitInBatches`
- **Display Name**: Loop Over Items (Split in Batches)
- **Internal Name**: `splitInBatches`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.splitinbatches/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SplitInBatches/v3/SplitInBatchesV3.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 3 source code*
