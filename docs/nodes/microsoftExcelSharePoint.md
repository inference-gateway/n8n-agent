# Microsoft Excel (SharePoint)

## Description

Read and write Excel workbooks stored in SharePoint document libraries

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft Excel (SharePoint)
    parameters:
      authentication: "microsoftOAuth2Api" # Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Sites.ReadWrite.All) on the credential.
      resource: "worksheet"
      operation: "readRows" # Append rows to the end of a sheet
      operation: "getAll" # Append rows to the end of a table
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftExcelSharePoint
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Enable the scopes this node needs (e.g. Sites.ReadWrite.All) on the credential.

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"worksheet"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"readRows"`
- **Description**: Append rows to the end of a sheet

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Append rows to the end of a table


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftExcelSharePoint`
- **Display Name**: Microsoft Excel (SharePoint)
- **Internal Name**: `microsoftExcelSharePoint`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftexcelsharepoint/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/ExcelSharePoint/MicrosoftExcelSharePoint.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
