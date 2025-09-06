# E2E Test

## Description

Dummy node used for e2e testing

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: E2E Test
    parameters:
      operation: "remoteOptions"
      fieldId: ""
      remoteOptions: [] # Remote options to load. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      rlc: "{ mode: 'list', value: '' }"
      resourceMapper: "{
					mappingMode: 'defineBelow',
					value: null,
				}"
      otherField: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.e2eTest
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"remoteOptions"`

### Field ID

- **Name**: `fieldId`
- **Type**: `string`
- **Default**: `""`

### Remote Options Name or ID

- **Name**: `remoteOptions`
- **Type**: `options`
- **Default**: `"[]"`
- **Description**: Remote options to load. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Resource Locator

- **Name**: `rlc`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: https://example.com/user/a4071e98-7d40-41fb-8911-ce3e7bf94fb2

### Resource Mapping Component

- **Name**: `resourceMapper`
- **Type**: `resourceMapper`
- **Default**: `"{\n\t\t\t\t\tmappingMode: 'defineBelow',\n\t\t\t\t\tvalue: null,\n\t\t\t\t}"`

### Other Non Important Field

- **Name**: `otherField`
- **Type**: `string`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.e2eTest`
- **Display Name**: E2E Test
- **Internal Name**: `e2eTest`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.e2etest/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/E2eTest/E2eTest.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
