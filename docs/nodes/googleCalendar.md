# Google Calendar

## Description

Consume Google Calendar API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Google Calendar
    parameters:
      resource: "event"
      useN8nTimeZone: ""
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.googleCalendar
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"event"`

### This node will use the time zone set in n8n’s settings, but you can override this in the workflow settings

- **Name**: `useN8nTimeZone`
- **Type**: `notice`
- **Default**: `""`


## Node Information

- **Node Type**: `n8n-nodes-base.googleCalendar`
- **Display Name**: Google Calendar
- **Internal Name**: `googleCalendar`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Calendar/GoogleCalendar.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
