# Item List Output Parser

## Description

Return the results as separate items

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Item List Output Parser
    parameters:
      options: # Defines how many items should be returned maximally. If set to -1, there is no limit.
        numberOfItems: "-1" # Defines how many items should be returned maximally. If set to -1, there is no limit.
        parseOutput: true # Whether the output should be automatically be parsed or left RAW
        separator: "\\n" # Defines the separator that should be used to split the results into separate items. Defaults to a new line but can be changed depending on the data that should be returned.
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.outputParserItemList
```

## Parameters

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Defines how many items should be returned maximally. If set to -1, there is no limit.
- **Placeholder**: Add Option

**Options:**

#### Number Of Items
- **Name**: `numberOfItems`
- **Type**: `number`
- **Default**: `"-1"`
- **Description**: Defines how many items should be returned maximally. If set to -1, there is no limit.

#### Parse Output
- **Name**: `parseOutput`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the output should be automatically be parsed or left RAW

#### Separator
- **Name**: `separator`
- **Type**: `string`
- **Default**: `"\\\\n"`
- **Description**: Defines the separator that should be used to split the results into separate items. Defaults to a new line but can be changed depending on the data that should be returned.



## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.outputParserItemList`
- **Display Name**: Item List Output Parser
- **Internal Name**: `outputParserItemList`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.outputparseritemlist/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserItemList/OutputParserItemList.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
