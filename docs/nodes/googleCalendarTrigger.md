# Google Calendar Trigger

## Description

Starts the workflow when Google Calendar events occur

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Calendar Trigger
    parameters:
      calendarId: "{ mode: 'list', value: '' }" # Google Calendar to operate on
      triggerOn: ""
      options: # Free text search terms to filter events that match these terms in any field, except for extended properties
        matchTerm: "" # Free text search terms to filter events that match these terms in any field, except for extended properties
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleCalendarTrigger
```

## Parameters

### Calendar

- **Name**: `calendarId`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Description**: Google Calendar to operate on
- **Placeholder**: Select a Calendar...

### Trigger On

- **Name**: `triggerOn`
- **Type**: `options`
- **Default**: `""`

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Free text search terms to filter events that match these terms in any field, except for extended properties
- **Placeholder**: Add option

**Options:**

#### Match Term
- **Name**: `matchTerm`
- **Type**: `string`
- **Default**: `""`
- **Description**: Free text search terms to filter events that match these terms in any field, except for extended properties



## Node Information

- **Node Type**: `n8n-nodes-base.googleCalendarTrigger`
- **Display Name**: Google Calendar Trigger
- **Internal Name**: `googleCalendarTrigger`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendartrigger/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Calendar/GoogleCalendarTrigger.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
