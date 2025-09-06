# Google Contacts

## Description

Consume Google Contacts API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Contacts
    parameters:
      resource: "contact"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleContacts
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"contact"`


## Node Information

- **Node Type**: `n8n-nodes-base.googleContacts`
- **Display Name**: Google Contacts
- **Internal Name**: `googleContacts`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Contacts/GoogleContacts.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
