# Split In Batches

## Description

Split data into batches and iterate over each batch

**Version**: 2

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Split In Batches
    parameters:
      splitInBatchesNotice: ""
      batchSize: "10" # The number of items to return with each call
      options: # Whether the node will be reset and so with the current input-data newly initialized
        reset: false # Whether the node will be reset and so with the current input-data newly initialized
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
- **Default**: `"10"`
- **Description**: The number of items to return with each call

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the node will be reset and so with the current input-data newly initialized
- **Placeholder**: Add option

**Options:**

#### Reset
- **Name**: `reset`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the node will be reset and so with the current input-data newly initialized



## Node Information

- **Node Type**: `n8n-nodes-base.splitInBatches`
- **Display Name**: Split In Batches
- **Internal Name**: `splitInBatches`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.splitinbatches/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SplitInBatches/v2/SplitInBatchesV2.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 2 source code*
