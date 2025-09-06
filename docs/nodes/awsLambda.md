# AWS Lambda

## Description

Invoke functions on AWS Lambda

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Lambda
    parameters:
      operation: "invoke" # Invoke a function
      function: "" # The function you want to invoke. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      qualifier: "$LATEST" # Specify a version or alias to invoke a published version of the function
      invocationType: "RequestResponse" # Invoke the function synchronously and wait for the response
      payload: "" # The JSON that you want to provide to your Lambda function as input
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsLambda
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"invoke"`
- **Description**: Invoke a function

### Function Name or ID

- **Name**: `function`
- **Type**: `options`
- **Default**: `""`
- **Description**: The function you want to invoke. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Qualifier

- **Name**: `qualifier`
- **Type**: `string`
- **Default**: `"$LATEST"`
- **Description**: Specify a version or alias to invoke a published version of the function

### Invocation Type

- **Name**: `invocationType`
- **Type**: `options`
- **Default**: `"RequestResponse"`
- **Description**: Invoke the function synchronously and wait for the response

### JSON Input

- **Name**: `payload`
- **Type**: `string`
- **Default**: `""`
- **Description**: The JSON that you want to provide to your Lambda function as input


## Node Information

- **Node Type**: `n8n-nodes-base.awsLambda`
- **Display Name**: AWS Lambda
- **Internal Name**: `awsLambda`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awslambda/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/AwsLambda.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
