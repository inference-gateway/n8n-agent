# Default Data Loader

## Description

Load data from previous step in the workflow

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Default Data Loader
    parameters:
      notice: ""
      dataType: "json" # Process JSON data from previous step in the workflow
      jsonMode: "allInputData" # Use all JSON data that flows into the parent agent or chain
      binaryMode: "allInputData" # Use all Binary data that flows into the parent agent or chain
      loader: "auto" # Uses the mime type to detect the format
      jsonData: "" # Drag and drop fields from the input pane, or use an expression
      binaryDataKey: "data" # The name of the field in the agent or chain’s input that contains the binary file to be processed
      textSplittingMode: "simple" # Splits every 1000 characters with a 200 character overlap
      options: {} # Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"
    position: [x, y]  # Canvas position coordinates
    type: @n8n/n8n-nodes-langchain.documentDefaultDataLoader
```

## Parameters

### This will load data from a previous step in the workflow. <a href="/templates/1962" target="_blank">Example</a>

- **Name**: `notice`
- **Type**: `notice`
- **Default**: `""`

### Type of Data

- **Name**: `dataType`
- **Type**: `options`
- **Default**: `"json"`
- **Description**: Process JSON data from previous step in the workflow

### Mode

- **Name**: `jsonMode`
- **Type**: `options`
- **Default**: `"allInputData"`
- **Description**: Use all JSON data that flows into the parent agent or chain

### Mode

- **Name**: `binaryMode`
- **Type**: `options`
- **Default**: `"allInputData"`
- **Description**: Use all Binary data that flows into the parent agent or chain

### Data Format

- **Name**: `loader`
- **Type**: `options`
- **Default**: `"auto"`
- **Description**: Uses the mime type to detect the format

### Data

- **Name**: `jsonData`
- **Type**: `string`
- **Default**: `""`
- **Description**: Drag and drop fields from the input pane, or use an expression

### Input Data Field Name

- **Name**: `binaryDataKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the field in the agent or chain’s input that contains the binary file to be processed

### Text Splitting

- **Name**: `textSplittingMode`
- **Type**: `options`
- **Default**: `"simple"`
- **Description**: Splits every 1000 characters with a 200 character overlap

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Pointers to extract from JSON, e.g. "/text" or "/text, /meta/title"
- **Placeholder**: Add Option


## Node Information

- **Node Type**: `@n8n/n8n-nodes-langchain.documentDefaultDataLoader`
- **Display Name**: Default Data Loader
- **Internal Name**: `documentDefaultDataLoader`
- **Package**: `@n8n/n8n-nodes-langchain`
- **Category**: AI/LangChain

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.documentdefaultdataloader/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentDefaultDataLoader/DocumentDefaultDataLoader.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
