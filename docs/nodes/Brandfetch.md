# Brandfetch

## Description

Consume Brandfetch API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Brandfetch
    parameters:
      operation: "logo" # Return a company's colors
      domain: "" # The domain name of the company
      download: false # Name of the binary property to which to write the data of the read file
      imageTypes: "['logo', 'icon']"
      imageFormats: "['png']" # The image format in which the logo should be returned as
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.Brandfetch
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"logo"`
- **Description**: Return a company's colors

### Domain

- **Name**: `domain`
- **Type**: `string`
- **Default**: `""`
- **Description**: The domain name of the company

### Download

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Name of the binary property to which to write the data of the read file

### Image Type

- **Name**: `imageTypes`
- **Type**: `multiOptions`
- **Default**: `"['logo', 'icon']"`

### Image Format

- **Name**: `imageFormats`
- **Type**: `multiOptions`
- **Default**: `"['png']"`
- **Description**: The image format in which the logo should be returned as


## Node Information

- **Node Type**: `n8n-nodes-base.Brandfetch`
- **Display Name**: Brandfetch
- **Internal Name**: `Brandfetch`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.brandfetch/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Brandfetch/Brandfetch.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
