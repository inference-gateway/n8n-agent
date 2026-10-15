# Microsoft SharePoint Trigger

## Description

Starts a workflow when a file or list item changes in Microsoft SharePoint

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Microsoft SharePoint Trigger
    parameters:
      authentication: "microsoftOAuth2Api" # Generic Microsoft Graph credential. Enable the scopes this trigger needs (e.g. Sites.Read.All) on the credential.
      site: "{ mode: 'list', value: '' }" # The SharePoint site holding the library to watch
      resource: "documentLibrary" # Watch the files in a document library
      drive: "{ mode: 'list', value: '' }" # The document library to watch for changes
      list: "{ mode: 'list', value: '' }" # The list to watch for changes
      events: "['changed', 'deleted']" # Which changes in the library start the workflow
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.microsoftSharePointTrigger
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"microsoftOAuth2Api"`
- **Description**: Generic Microsoft Graph credential. Enable the scopes this trigger needs (e.g. Sites.Read.All) on the credential.

### Site

- **Name**: `site`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The SharePoint site holding the library to watch
- **Placeholder**: e.g. https://contoso.sharepoint.com/sites/mysite

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"documentLibrary"`
- **Description**: Watch the files in a document library

### Document Library

- **Name**: `drive`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The document library to watch for changes
- **Placeholder**: e.g. b!zXyF9k…

### List

- **Name**: `list`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: The list to watch for changes
- **Placeholder**: e.g. 58a279af-1f06-4392-a5ed-2b37fa1d6c1d or My List

### Events

- **Name**: `events`
- **Type**: `multiOptions`
- **Default**: `"['changed', 'deleted']"`
- **Description**: Which changes in the library start the workflow


## Node Information

- **Node Type**: `n8n-nodes-base.microsoftSharePointTrigger`
- **Display Name**: Microsoft SharePoint Trigger
- **Internal Name**: `microsoftSharePointTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftsharepointtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePointTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
