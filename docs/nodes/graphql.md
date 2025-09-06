# GraphQL

## Description

Makes a GraphQL request and returns the received data

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GraphQL
    parameters:
      authentication: "none" # The way to authenticate
      requestMethod: "POST" # The underlying HTTP request method to use
      endpoint: "" # The GraphQL endpoint
      allowUnauthorizedCerts: false # Whether to download the response even if SSL certificate validation is not possible
      requestFormat: "graphql" # The format for the query payload
      requestFormat: "json" # JSON object with query, variables, and operationName properties. The standard and most widely supported format for GraphQL requests.
      query: "" # GraphQL query
      variables: "" # Query variables as JSON object
      operationName: "" # Name of operation to execute
      responseFormat: "json" # The format in which the data gets returned from the URL
      dataPropertyName: "data" # Name of the property to which to write the response data
      headerParametersUi: {} # The headers to send
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.graphql
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: The way to authenticate

### HTTP Request Method

- **Name**: `requestMethod`
- **Type**: `options`
- **Default**: `"POST"`
- **Description**: The underlying HTTP request method to use

### Endpoint

- **Name**: `endpoint`
- **Type**: `string`
- **Default**: `""`
- **Description**: The GraphQL endpoint
- **Placeholder**: http://example.com/graphql

### Ignore SSL Issues (Insecure)

- **Name**: `allowUnauthorizedCerts`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to download the response even if SSL certificate validation is not possible

### Request Format

- **Name**: `requestFormat`
- **Type**: `options`
- **Default**: `"graphql"`
- **Description**: The format for the query payload

### Request Format

- **Name**: `requestFormat`
- **Type**: `options`
- **Default**: `"json"`
- **Description**: JSON object with query, variables, and operationName properties. The standard and most widely supported format for GraphQL requests.

### Query

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: GraphQL query

### Variables

- **Name**: `variables`
- **Type**: `json`
- **Default**: `""`
- **Description**: Query variables as JSON object

### Operation Name

- **Name**: `operationName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of operation to execute

### Response Format

- **Name**: `responseFormat`
- **Type**: `options`
- **Default**: `"json"`
- **Description**: The format in which the data gets returned from the URL

### Response Data Property Name

- **Name**: `dataPropertyName`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: Name of the property to which to write the response data

### Headers

- **Name**: `headerParametersUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: The headers to send
- **Placeholder**: Add Header


## Node Information

- **Node Type**: `n8n-nodes-base.graphql`
- **Display Name**: GraphQL
- **Internal Name**: `graphql`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.graphql/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/GraphQL/GraphQL.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
