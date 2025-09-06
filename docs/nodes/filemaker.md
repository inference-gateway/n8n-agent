# FileMaker

## Description

Retrieve data from the FileMaker data API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: FileMaker
    parameters:
      action: "record"
      layout: "" # FileMaker Layout Name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      recid: "" # Internal Record ID returned by get (recordid)
      offset: "1" # The record number of the first record in the range of records
      limit: "100" # Max number of results to return
      getPortals: false # Whether to get portal data as well
      portals: [] # The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      responseLayout: "" # Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
      queries: {} # Search Field. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      setSort: false # Whether to sort data
      sortParametersUi: {} # Sort rules
      setScriptBefore: false # Whether to define a script to be run before the action specified by the API call and after the subsequent sort
      scriptBefore: "" # The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      scriptBeforeParam: "" # A parameter for the FileMaker script
      setScriptSort: false # Whether to define a script to be run after the action specified by the API call but before the subsequent sort
      scriptSort: "" # The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      scriptSortParam: "" # A parameter for the FileMaker script
      setScriptAfter: false # Whether to define a script to be run after the action specified by the API call but before the subsequent sort
      scriptAfter: "" # The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      scriptAfterParam: "" # A parameter for the FileMaker script
      fieldData: {} # Additional fields to add.
      modId: "" # The last modification ID. When you use modId, a record is edited only when the modId matches.
      fieldsParametersUi: {} # Fields to define
      script: "" # The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      scriptParam: "" # A parameter for the FileMaker script
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.filemaker
```

## Parameters

### Action

- **Name**: `action`
- **Type**: `options`
- **Default**: `"record"`

### Layout Name or ID

- **Name**: `layout`
- **Type**: `options`
- **Default**: `""`
- **Description**: FileMaker Layout Name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Layout Name

### Record ID

- **Name**: `recid`
- **Type**: `number`
- **Default**: `""`
- **Description**: Internal Record ID returned by get (recordid)
- **Placeholder**: Record ID

### Offset

- **Name**: `offset`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: The record number of the first record in the range of records
- **Placeholder**: 0

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return
- **Placeholder**: 100

### Get Portals

- **Name**: `getPortals`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to get portal data as well

### Portals Name or ID

- **Name**: `portals`
- **Type**: `options`
- **Default**: `"[]"`
- **Description**: The portal result set to return. Use the portal object name or portal table name. If this parameter is omitted, the API will return all portal objects and records in the layout. For best performance, pass the portal object name or portal table name. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Portals

### Response Layout Name or ID

- **Name**: `responseLayout`
- **Type**: `options`
- **Default**: `""`
- **Description**: Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>

### Queries

- **Name**: `queries`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Search Field. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add query

### Sort Data?

- **Name**: `setSort`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to sort data

### Sort

- **Name**: `sortParametersUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Sort rules
- **Placeholder**: Add Sort Rules

### Before Find Script

- **Name**: `setScriptBefore`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to define a script to be run before the action specified by the API call and after the subsequent sort

### Script Name or ID

- **Name**: `scriptBefore`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Script Name

### Script Parameter

- **Name**: `scriptBeforeParam`
- **Type**: `string`
- **Default**: `""`
- **Description**: A parameter for the FileMaker script
- **Placeholder**: Script Parameters

### Before Sort Script

- **Name**: `setScriptSort`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to define a script to be run after the action specified by the API call but before the subsequent sort

### Script Name or ID

- **Name**: `scriptSort`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the FileMaker script to be run after the action specified by the API call but before the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Script Name

### Script Parameter

- **Name**: `scriptSortParam`
- **Type**: `string`
- **Default**: `""`
- **Description**: A parameter for the FileMaker script
- **Placeholder**: Script Parameters

### After Sort Script

- **Name**: `setScriptAfter`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to define a script to be run after the action specified by the API call but before the subsequent sort

### Script Name or ID

- **Name**: `scriptAfter`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the FileMaker script to be run after the action specified by the API call and after the subsequent sort. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Script Name

### Script Parameter

- **Name**: `scriptAfterParam`
- **Type**: `string`
- **Default**: `""`
- **Description**: A parameter for the FileMaker script
- **Placeholder**: Script Parameters

### fieldData

- **Name**: `fieldData`
- **Type**: `string`
- **Default**: `"{}"`
- **Description**: Additional fields to add.
- **Placeholder**: {"field1": "value", "field2": "value", ...}

### Mod ID

- **Name**: `modId`
- **Type**: `number`
- **Default**: `""`
- **Description**: The last modification ID. When you use modId, a record is edited only when the modId matches.

### Fields

- **Name**: `fieldsParametersUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Fields to define
- **Placeholder**: Add field

### Script Name or ID

- **Name**: `script`
- **Type**: `options`
- **Default**: `""`
- **Description**: The name of the FileMaker script to be run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Script Name

### Script Parameter

- **Name**: `scriptParam`
- **Type**: `string`
- **Default**: `""`
- **Description**: A parameter for the FileMaker script
- **Placeholder**: Script Parameters


## Node Information

- **Node Type**: `n8n-nodes-base.filemaker`
- **Display Name**: FileMaker
- **Internal Name**: `filemaker`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.filemaker/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/FileMaker/FileMaker.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
