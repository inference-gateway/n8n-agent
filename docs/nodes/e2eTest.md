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
      # Configure parameters based on your needs
      # See official documentation for available options
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.e2eTest
```

## Node Information

- **Node Type**: `n8n-nodes-base.e2eTest`
- **Display Name**: E2E Test
- **Internal Name**: `e2eTest`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.e2etest/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/E2eTest/E2eTest.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

## Notes

This documentation provides basic node information. For detailed parameter configuration, 
refer to the official n8n documentation linked above, which contains:

- Complete parameter reference
- Required vs optional fields
- Parameter types and validation
- Usage examples and workflows
- API integration details

---
*Generated automatically from n8n 1 source code*
