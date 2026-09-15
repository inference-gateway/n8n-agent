# E2E Test Polling Trigger

## Description

Dummy polling trigger for e2e testing

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: E2E Test Polling Trigger
    parameters:
      url: "" # GET endpoint to poll. Expected to return JSON of shape { "items": [...] }.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.e2eTestPollingTrigger
```

## Parameters

### URL

- **Name**: `url`
- **Type**: `string`
- **Default**: `""`
- **Description**: GET endpoint to poll. Expected to return JSON of shape { "items": [...] }.


## Node Information

- **Node Type**: `n8n-nodes-base.e2eTestPollingTrigger`
- **Display Name**: E2E Test Polling Trigger
- **Internal Name**: `e2eTestPollingTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.e2etestpollingtrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/E2eTest/E2eTestPollingTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
