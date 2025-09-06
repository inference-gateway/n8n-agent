# One Simple API

## Description

A toolbox of no-code utilities

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: One Simple API
    parameters:
      resource: "website"
      operation: "pdf" # Generate a PDF from a webpage
      operation: "instagramProfile" # Get details about an Instagram profile
      operation: "exchangeRate" # Convert a value between currencies
      operation: "validateEmail" # Expand a shortened URL
      link: "" # Link to webpage to convert
      download: false # Whether to download the PDF or return a link to it
      output: "data" # The name of the output field to put the binary file data in
      options: {} # Normally the API will reuse a previously taken screenshot of the URL to give a faster response. This option allows you to retake the screenshot at that exact time, for those times when it's necessary.
      message: "" # The text that should be turned into a QR code - like a website URL
      download: false # Whether to download the QR code or return a link to it
      output: "data" # The name of the output field to put the binary file data in
      options: {} # The QR Code size
      link: "" # Link to webpage to convert
      download: false # Whether to download the screenshot or return a link to it
      output: "data" # The name of the output field to put the binary file data in
      options: {} # Normally the API will reuse a previously taken screenshot of the URL to give a faster response. This option allows you to retake the screenshot at that exact time, for those times when it's necessary.
      profileName: "" # Profile name to get details of
      artistName: "" # Artist name to get details for
      value: "" # Value to convert
      fromCurrency: ""
      toCurrency: ""
      link: "" # Image to get metadata from
      link: "" # Webpage to get SEO information for
      options:
        headers: false
      emailAddress: ""
      link: "" # URL to unshorten
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.oneSimpleApi
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"website"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"pdf"`
- **Description**: Generate a PDF from a webpage

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"instagramProfile"`
- **Description**: Get details about an Instagram profile

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"exchangeRate"`
- **Description**: Convert a value between currencies

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"validateEmail"`
- **Description**: Expand a shortened URL

### Webpage URL

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: Link to webpage to convert

### Download PDF?

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to download the PDF or return a link to it

### Put Output In Field

- **Name**: `output`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the output field to put the binary file data in

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Normally the API will reuse a previously taken screenshot of the URL to give a faster response. This option allows you to retake the screenshot at that exact time, for those times when it's necessary.
- **Placeholder**: Add option

### QR Content

- **Name**: `message`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text that should be turned into a QR code - like a website URL

### Download Image?

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to download the QR code or return a link to it

### Put Output In Field

- **Name**: `output`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the output field to put the binary file data in

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The QR Code size
- **Placeholder**: Add option

### Webpage URL

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: Link to webpage to convert

### Download Screenshot?

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to download the screenshot or return a link to it

### Put Output In Field

- **Name**: `output`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The name of the output field to put the binary file data in

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Normally the API will reuse a previously taken screenshot of the URL to give a faster response. This option allows you to retake the screenshot at that exact time, for those times when it's necessary.
- **Placeholder**: Add option

### Profile Name

- **Name**: `profileName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Profile name to get details of

### Artist Name

- **Name**: `artistName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Artist name to get details for

### Value

- **Name**: `value`
- **Type**: `string`
- **Default**: `""`
- **Description**: Value to convert

### From Currency

- **Name**: `fromCurrency`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: USD

### To Currency

- **Name**: `toCurrency`
- **Type**: `string`
- **Default**: `""`
- **Placeholder**: EUR

### Link To Image

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: Image to get metadata from

### Webpage URL

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: Webpage to get SEO information for

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add option

**Options:**

#### Include Headers?
- **Name**: `headers`
- **Type**: `boolean`
- **Default**: `false`


### Email Address

- **Name**: `emailAddress`
- **Type**: `string`
- **Default**: `""`

### URL

- **Name**: `link`
- **Type**: `string`
- **Default**: `""`
- **Description**: URL to unshorten


## Node Information

- **Node Type**: `n8n-nodes-base.oneSimpleApi`
- **Display Name**: One Simple API
- **Internal Name**: `oneSimpleApi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/OneSimpleApi/OneSimpleApi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
