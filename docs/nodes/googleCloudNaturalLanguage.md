# Google Cloud Natural Language

## Description

Consume Google Cloud Natural Language API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Cloud Natural Language
    parameters:
      resource: "document"
      operation: "analyzeSentiment"
      source: "content" # The source of the document: a string containing the content or a Google Cloud Storage URI
      content: "" # The content of the input in string format. Cloud audit logging exempt since it is based on user data.
      gcsContentUri: "" # The Google Cloud Storage URI where the file content is located. This URI must be of the form: <code>gs://bucket_name/object_name</code>. For more details, see <a href="https://cloud.google.com/storage/docs/reference-uris.">reference</a>.
      options: {} # The type of input document
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleCloudNaturalLanguage
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"document"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"analyzeSentiment"`

### Source

- **Name**: `source`
- **Type**: `options`
- **Default**: `"content"`
- **Description**: The source of the document: a string containing the content or a Google Cloud Storage URI

### Content

- **Name**: `content`
- **Type**: `string`
- **Default**: `""`
- **Description**: The content of the input in string format. Cloud audit logging exempt since it is based on user data.

### Google Cloud Storage URI

- **Name**: `gcsContentUri`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Google Cloud Storage URI where the file content is located. This URI must be of the form: <code>gs://bucket_name/object_name</code>. For more details, see <a href="https://cloud.google.com/storage/docs/reference-uris.">reference</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The type of input document
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.googleCloudNaturalLanguage`
- **Display Name**: Google Cloud Natural Language
- **Internal Name**: `googleCloudNaturalLanguage`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudnaturallanguage/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/CloudNaturalLanguage/GoogleCloudNaturalLanguage.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
