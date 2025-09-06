# Facebook Graph API

## Description

Interacts with Facebook using the Graph API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Facebook Graph API
    parameters:
      hostUrl: "graph.facebook.com" # The Host URL of the request. Almost all requests are passed to the graph.facebook.com host URL. The single exception is video uploads, which use graph-video.facebook.com.
      httpRequestMethod: "GET" # The HTTP Method to be used for the request
      graphApiVersion: "" # The version of the Graph API to be used in the request
      node: "" # The node on which to operate. A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook.
      edge: "" # Edge of the node on which to operate. Edges represent collections of objects which are attached to the node.
      allowUnauthorizedCerts: false # Whether to connect even if SSL certificate validation is not possible
      sendBinaryData: false # Whether binary data should be sent as body
      binaryPropertyName: "" # For Form-Data Multipart, they can be provided in the format: <code>"sendKey1:binaryProperty1,sendKey2:binaryProperty2</code>
      options: {} # The list of fields to request in the GET request
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.facebookGraphApi
```

## Parameters

### Host URL

- **Name**: `hostUrl`
- **Type**: `options`
- **Default**: `"graph.facebook.com"`
- **Description**: The Host URL of the request. Almost all requests are passed to the graph.facebook.com host URL. The single exception is video uploads, which use graph-video.facebook.com.

### HTTP Request Method

- **Name**: `httpRequestMethod`
- **Type**: `options`
- **Default**: `"GET"`
- **Description**: The HTTP Method to be used for the request

### Graph API Version

- **Name**: `graphApiVersion`
- **Type**: `options`
- **Default**: `""`
- **Description**: The version of the Graph API to be used in the request

### Node

- **Name**: `node`
- **Type**: `string`
- **Default**: `""`
- **Description**: The node on which to operate. A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook.
- **Placeholder**: me

### Edge

- **Name**: `edge`
- **Type**: `string`
- **Default**: `""`
- **Description**: Edge of the node on which to operate. Edges represent collections of objects which are attached to the node.
- **Placeholder**: videos

### Ignore SSL Issues (Insecure)

- **Name**: `allowUnauthorizedCerts`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to connect even if SSL certificate validation is not possible

### Send Binary File

- **Name**: `sendBinaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether binary data should be sent as body

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `""`
- **Description**: For Form-Data Multipart, they can be provided in the format: <code>"sendKey1:binaryProperty1,sendKey2:binaryProperty2</code>
- **Placeholder**: file:data

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The list of fields to request in the GET request
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.facebookGraphApi`
- **Display Name**: Facebook Graph API
- **Internal Name**: `facebookGraphApi`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Facebook/FacebookGraphApi.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
