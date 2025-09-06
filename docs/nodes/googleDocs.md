# Google Docs

## Description

Consume Google Docs API.

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Docs
    parameters:
      authentication: "serviceAccount"
      authentication: "oAuth2"
      resource: "document"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleDocs
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"serviceAccount"`

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"oAuth2"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"document"`


## Node Information

- **Node Type**: `n8n-nodes-base.googleDocs`
- **Display Name**: Google Docs
- **Internal Name**: `googleDocs`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Docs/GoogleDocs.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
