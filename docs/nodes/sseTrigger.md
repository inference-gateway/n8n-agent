# SSE Trigger

## Description

Triggers the workflow when Server-Sent Events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: SSE Trigger
    parameters:
      url: "" # The URL to receive the SSE from
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.sseTrigger
```

## Parameters

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL to receive the SSE from
- **Placeholder**: http://example.com


## Node Information

- **Node Type**: `n8n-nodes-base.sseTrigger`
- **Display Name**: SSE Trigger
- **Internal Name**: `sseTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ssetrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SseTrigger/SseTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
