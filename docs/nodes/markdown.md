# Markdown

## Description

Convert data between Markdown and HTML

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Markdown
    parameters:
      mode: "htmlToMarkdown" # Convert data from Markdown to HTML
      html: "" # The HTML to be converted to markdown
      markdown: "" # The Markdown to be converted to html
      destinationKey: "data" # The field to put the output in. Specify nested fields using dots, e.g."level1.level2.newKey".
      options: # Specify bullet marker, default *
        bulletMarker: "*" # Specify bullet marker, default *
        codeFence: "```" # Specify code block fence, default ```
        emDelimiter: "_" # Specify emphasis delimiter, default _
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.markdown
```

## Parameters

### Mode

- **Name**: `mode`
- **Type**: `options`
- **Default**: `"htmlToMarkdown"`
- **Description**: Convert data from Markdown to HTML

### HTML

- **Name**: `html`
- **Type**: `string`
- **Default**: `""`
- **Description**: The HTML to be converted to markdown

### Markdown

- **Name**: `markdown`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Markdown to be converted to html

### Destination Key

- **Name**: `destinationKey`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The field to put the output in. Specify nested fields using dots, e.g."level1.level2.newKey".

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Specify bullet marker, default *
- **Placeholder**: Add option

**Options:**

#### Bullet Marker
- **Name**: `bulletMarker`
- **Type**: `string`
- **Default**: `"*"`
- **Description**: Specify bullet marker, default *

#### Code Block Fence
- **Name**: `codeFence`
- **Type**: `string`
- **Default**: `"```"`
- **Description**: Specify code block fence, default ```

#### Emphasis Delimiter
- **Name**: `emDelimiter`
- **Type**: `string`
- **Default**: `"_"`
- **Description**: Specify emphasis delimiter, default _



## Node Information

- **Node Type**: `n8n-nodes-base.markdown`
- **Display Name**: Markdown
- **Internal Name**: `markdown`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.markdown/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Markdown/Markdown.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
