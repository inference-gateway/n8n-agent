# Facebook Trigger

## Description

Starts the workflow when Facebook events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Facebook Trigger
    parameters:
      appId: "" # Facebook APP ID
      whatsappBusinessAccountNotice: ""
      object: "user" # Get updates about Ad Account
      fields: [] # The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      options: # Whether change notifications should include the new values
        includeValues: true # Whether change notifications should include the new values
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.facebookTrigger
```

## Parameters

### APP ID

- **Name**: `appId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Facebook APP ID

### To watch Whatsapp business account events use the Whatsapp trigger node

- **Name**: `whatsappBusinessAccountNotice`
- **Type**: `notice`
- **Default**: `""`

### Object

- **Name**: `object`
- **Type**: `options`
- **Default**: `"user"`
- **Description**: Get updates about Ad Account

### Field Names or IDs

- **Name**: `fields`
- **Type**: `multiOptions`
- **Default**: `"[]"`
- **Description**: The set of fields in this object that are subscribed to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether change notifications should include the new values
- **Placeholder**: Add option

**Options:**

#### Include Values
- **Name**: `includeValues`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether change notifications should include the new values



## Node Information

- **Node Type**: `n8n-nodes-base.facebookTrigger`
- **Display Name**: Facebook Trigger
- **Internal Name**: `facebookTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebooktrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Facebook/FacebookTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
