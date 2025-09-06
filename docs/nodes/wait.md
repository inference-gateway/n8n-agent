# Wait

## Description

Wait before continue with execution

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Wait
    parameters:
      resume: "timeInterval" # Waits for a certain amount of time
      incomingAuthentication: "none" # If and how incoming resume-webhook-requests to $execution.resumeFormUrl should be authenticated for additional security
      dateTime: "" # The date and time to wait for before continuing
      webhookNotice: ""
      formNotice: ""
      options: {}
      options: {}
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.wait
```

## Parameters

### Resume

- **Name**: `resume`
- **Type**: `options`
- **Default**: `"timeInterval"`
- **Description**: Waits for a certain amount of time

### Authentication

- **Name**: `incomingAuthentication`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: If and how incoming resume-webhook-requests to $execution.resumeFormUrl should be authenticated for additional security

### Date and Time

- **Name**: `dateTime`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: The date and time to wait for before continuing

### The webhook URL will be generated at run time. It can be referenced with the <strong>$execution.resumeUrl</strong> variable. Send it somewhere before getting to this node. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.wait" target="_blank">More info</a>

- **Name**: `webhookNotice`
- **Type**: `notice`
- **Default**: `""`

### The form url will be generated at run time. It can be referenced with the <strong>$execution.resumeFormUrl</strong> variable. Send it somewhere before getting to this node. <a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.wait" target="_blank">More info</a>

- **Name**: `formNotice`
- **Type**: `notice`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add option

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add option


## Node Information

- **Node Type**: `n8n-nodes-base.wait`
- **Display Name**: Wait
- **Internal Name**: `wait`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Wait/Wait.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
