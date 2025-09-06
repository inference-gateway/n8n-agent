# Airtable Trigger

## Description

Starts the workflow when Airtable events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Airtable Trigger
    parameters:
      authentication: "airtableApi"
      baseId: "{ mode: 'url', value: '' }" # The Airtable Base in which to operate on
      tableId: "{ mode: 'url', value: '' }"
      triggerField: "" # A Created Time or Last Modified Time field that will be used to sort records. If you do not have a Created Time or Last Modified Time field in your schema, please create one, because without this field trigger will not work correctly.
      downloadAttachments: false # Whether the attachment fields define in 'Download Fields' will be downloaded
      downloadFieldNames: "" # Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
      additionalFields: # Fields to be included in the response. Multiple ones can be set separated by comma. Example: <code>name, id</code>. By default just the trigger field will be included.
        fields: "" # Fields to be included in the response. Multiple ones can be set separated by comma. Example: <code>name, id</code>. By default just the trigger field will be included.
        formula: "" # Formulas may involve functions, numeric operations, logical operations, and text operations that operate on fields. More info <a href="https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference">here</a>.
        viewId: "" # The name or ID of a view in the table. If set, only the records in that view will be returned.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.airtableTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"airtableApi"`

### Base

- **Name**: `baseId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'url', value: '' }"`
- **Description**: The Airtable Base in which to operate on
- **Placeholder**: https://airtable.com/app12DiScdfes/tblAAAAAAAAAAAAA/viwHdfasdfeieg5p

### Table

- **Name**: `tableId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'url', value: '' }"`
- **Placeholder**: https://airtable.com/app12DiScdfes/tblAAAAAAAAAAAAA/viwHdfasdfeieg5p

### Trigger Field

- **Name**: `triggerField`
- **Type**: `string`
- **Default**: `""`
- **Description**: A Created Time or Last Modified Time field that will be used to sort records. If you do not have a Created Time or Last Modified Time field in your schema, please create one, because without this field trigger will not work correctly.

### Download Attachments

- **Name**: `downloadAttachments`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the attachment fields define in 'Download Fields' will be downloaded

### Download Fields

- **Name**: `downloadFieldNames`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Fields to be included in the response. Multiple ones can be set separated by comma. Example: <code>name, id</code>. By default just the trigger field will be included.
- **Placeholder**: Add Field

**Options:**

#### Fields
- **Name**: `fields`
- **Type**: `string`
- **Default**: `""`
- **Description**: Fields to be included in the response. Multiple ones can be set separated by comma. Example: <code>name, id</code>. By default just the trigger field will be included.

#### Formula
- **Name**: `formula`
- **Type**: `string`
- **Default**: `""`
- **Description**: Formulas may involve functions, numeric operations, logical operations, and text operations that operate on fields. More info <a href="https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference">here</a>.

#### View ID
- **Name**: `viewId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name or ID of a view in the table. If set, only the records in that view will be returned.



## Node Information

- **Node Type**: `n8n-nodes-base.airtableTrigger`
- **Display Name**: Airtable Trigger
- **Internal Name**: `airtableTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtabletrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Airtable/AirtableTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
