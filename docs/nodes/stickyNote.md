# Sticky Note

## Description

Make your workflow easier to understand

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Sticky Note
    parameters:
      content: "## I'm a note \n**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)"
      height: "160"
      width: "240"
      color: "1"
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.stickyNote
```

## Parameters

### Content

- **Name**: `content`
- **Type**: `string`
- **Default**: `"## I'm a note \\n**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)"`

### Height

- **Name**: `height`
- **Type**: `number`
- **Default**: `"160"`

### Width

- **Name**: `width`
- **Type**: `number`
- **Default**: `"240"`

### Color

- **Name**: `color`
- **Type**: `number`
- **Default**: `"1"`


## Node Information

- **Node Type**: `n8n-nodes-base.stickyNote`
- **Display Name**: Sticky Note
- **Internal Name**: `stickyNote`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stickynote/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/StickyNote/StickyNote.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
