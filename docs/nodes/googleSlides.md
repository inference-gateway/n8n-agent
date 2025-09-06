# Google Slides

## Description

Consume the Google Slides API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Slides
    parameters:
      authentication: "serviceAccount"
      authentication: "oAuth2"
      resource: "presentation"
      operation: "create" # Create a presentation
      operation: "get" # Get a page
      title: "" # Title of the presentation to create
      presentationId: "" # ID of the presentation to retrieve. Found in the presentation URL: <code>https://docs.google.com/presentation/d/PRESENTATION_ID/edit</code>
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      pageObjectId: "" # ID of the page object to retrieve
      textUi: {} # Whether the search should respect case. True : the search is case sensitive. False : the search is case insensitive.
      options: # The revision ID of the presentation required for the write request. If specified and the requiredRevisionId doesn't exactly match the presentation's current revisionId, the request will not be processed and will return a 400 bad request error.
        revisionId: "" # The revision ID of the presentation required for the write request. If specified and the requiredRevisionId doesn't exactly match the presentation's current revisionId, the request will not be processed and will return a 400 bad request error.
      download: false # Name of the binary property to which to write the data of the read page
      binaryProperty: "data"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleSlides
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
- **Default**: `"presentation"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a presentation

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a page

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Title of the presentation to create

### Presentation ID

- **Name**: `presentationId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the presentation to retrieve. Found in the presentation URL: <code>https://docs.google.com/presentation/d/PRESENTATION_ID/edit</code>
- **Placeholder**: 1wZtNFZ8MO-WKrxhYrOLMvyiqSgFwdSz5vn8_l_7eNqw

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Page Object ID

- **Name**: `pageObjectId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the page object to retrieve

### Texts To Replace

- **Name**: `textUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Whether the search should respect case. True : the search is case sensitive. False : the search is case insensitive.
- **Placeholder**: Add Text

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The revision ID of the presentation required for the write request. If specified and the requiredRevisionId doesn't exactly match the presentation's current revisionId, the request will not be processed and will return a 400 bad request error.
- **Placeholder**: Add option

**Options:**

#### Revision ID
- **Name**: `revisionId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The revision ID of the presentation required for the write request. If specified and the requiredRevisionId doesn't exactly match the presentation's current revisionId, the request will not be processed and will return a 400 bad request error.


### Download

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Name of the binary property to which to write the data of the read page

### Put Output File in Field

- **Name**: `binaryProperty`
- **Type**: `string`
- **Default**: `"data"`


## Node Information

- **Node Type**: `n8n-nodes-base.googleSlides`
- **Display Name**: Google Slides
- **Internal Name**: `googleSlides`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Slides/GoogleSlides.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
