# Asana

## Description

Consume Asana REST API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Asana
    parameters:
      authentication: "accessToken"
      resource: "task"
      operation: "create" # Create a subtask
      taskId: "" # The task to operate on
      name: "" # The name of the subtask to create
      otherProperties: # Set Assignee on the subtask. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        assignee: "" # Set Assignee on the subtask. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      taskId: "" # The task to operate on
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      options: {} # Defines fields to return. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "create" # Create a task
      workspace: "" # The workspace to create the task in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      name: "" # The name of the task to create
      id: "" # The ID of the task to delete
      id: "" # The ID of the task to get the data of
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      filters: # Properties to search for
        assignee: "" # The assignee to filter tasks on. Note: If you specify assignee, you must also specify the workspace to filter on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      id: "" # The ID of the task to be moved
      projectId: "" # Project to show the sections of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      section: "" # The Section to move the task to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      id: "" # The ID of the task to update the data of
      workspace: "" # The workspace in which the task is searched. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      searchTaskProperties: # Properties to search for
        completed: false # Whether the task is marked completed
        text: "" # Text to search for in name or notes
      otherProperties: # Set Assignee on the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        assignee: "" # Set Assignee on the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "add" # Add a comment to a task
      id: "" # The ID of the task to add the comment to
      isTextHtml: false # Whether body is HTML or simple text
      text: "" # The plain text of the comment to add
      text: "" # Comment as HTML string. Do not use together with plain text.
      additionalFields: # Properties of the task comment
        is_pinned: false # Whether to pin the comment
      id: "" # The ID of the comment to be removed
      operation: "add" # Add a task to a project
      id: "" # The ID of the task to add the project to
      project: "" # The project where the task will be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      additionalFields: # Other properties to set
        insert_after: "" # A task in the project to insert the task after, or null to insert at the beginning of the list
        insert_before: "" # A task in the project to insert the task before, or null to insert at the end of the list
        section: "" # A section in the project to insert the task into. The task will be inserted at the bottom of the section.
      id: "" # The ID of the task to add the project to
      project: "" # The project where the task will be removed from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "add" # Add a tag to a task
      id: "" # The ID of the task to add the tag to
      tag: "" # The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      id: "" # The ID of the task to add the tag to
      tag: "" # The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "get" # Get a user
      userId: "" # An identifier for the user to get data of. Can be one of an email address,the globally unique identifier for the user, or the keyword me to indicate the current user making the request.
      workspace: "" # The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      operation: "get" # Create a new project
      name: "" # The name of the project to create
      workspace: "" # The workspace to create the project in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      team: "" # The team this project will be assigned to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      additionalFields: # Other properties to set
        color: "none" # Color of the project
        due_on: "" # The day on which this project is due. This takes a date with format YYYY-MM-DD.
        notes: "" # Basic description or notes for the project
      id: ""
      id: ""
      workspace: "" # The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: # Other properties to set
        archived: false # Whether to only return projects whose archived field takes on the value of this parameter
      workspace: "" # The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      id: "" # The ID of the project to update the data of
      updateFields: # Other properties to set
        color: "none" # Color of the project
        due_on: "" # The day on which this project is due. This takes a date with format YYYY-MM-DD.
        name: "" # The name of the project
        notes: "" # Basic description or notes for the project
        owner: "" # The new assignee/cardinal for this project
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.asana
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"task"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a subtask

### Parent Task ID

- **Name**: `taskId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The task to operate on

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the subtask to create

### Additional Fields

- **Name**: `otherProperties`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Set Assignee on the subtask. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field

**Options:**

#### Assignee Name or ID
- **Name**: `assignee`
- **Type**: `options`
- **Default**: `""`
- **Description**: Set Assignee on the subtask. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Parent Task ID

- **Name**: `taskId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The task to operate on

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Defines fields to return. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a task

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace to create the task in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the task to create

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to delete

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to get the data of

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Properties to search for
- **Placeholder**: Add Filter

**Options:**

#### Assignee Name or ID
- **Name**: `assignee`
- **Type**: `options`
- **Default**: `""`
- **Description**: The assignee to filter tasks on. Note: If you specify assignee, you must also specify the workspace to filter on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to be moved

### Project Name or ID

- **Name**: `projectId`
- **Type**: `options`
- **Default**: `""`
- **Description**: Project to show the sections of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Section Name or ID

- **Name**: `section`
- **Type**: `options`
- **Default**: `""`
- **Description**: The Section to move the task to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to update the data of

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace in which the task is searched. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Filters

- **Name**: `searchTaskProperties`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Properties to search for
- **Placeholder**: Add Filter

**Options:**

#### Completed
- **Name**: `completed`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the task is marked completed

#### Text
- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text to search for in name or notes


### Additional Fields

- **Name**: `otherProperties`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Set Assignee on the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field

**Options:**

#### Assignee Name or ID
- **Name**: `assignee`
- **Type**: `options`
- **Default**: `""`
- **Description**: Set Assignee on the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Add a comment to a task

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to add the comment to

### Is Text HTML

- **Name**: `isTextHtml`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether body is HTML or simple text

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The plain text of the comment to add

### HTML Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: Comment as HTML string. Do not use together with plain text.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Properties of the task comment
- **Placeholder**: Add Field

**Options:**

#### Pinned
- **Name**: `is_pinned`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to pin the comment


### Comment ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the comment to be removed

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Add a task to a project

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to add the project to

### Project Name or ID

- **Name**: `project`
- **Type**: `options`
- **Default**: `""`
- **Description**: The project where the task will be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Other properties to set
- **Placeholder**: Add Field

**Options:**

#### Insert After
- **Name**: `insert_after`
- **Type**: `string`
- **Default**: `""`
- **Description**: A task in the project to insert the task after, or null to insert at the beginning of the list

#### Insert Before
- **Name**: `insert_before`
- **Type**: `string`
- **Default**: `""`
- **Description**: A task in the project to insert the task before, or null to insert at the end of the list

#### Section
- **Name**: `section`
- **Type**: `string`
- **Default**: `""`
- **Description**: A section in the project to insert the task into. The task will be inserted at the bottom of the section.


### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to add the project to

### Project Name or ID

- **Name**: `project`
- **Type**: `options`
- **Default**: `""`
- **Description**: The project where the task will be removed from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Add a tag to a task

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to add the tag to

### Tags Name or ID

- **Name**: `tag`
- **Type**: `options`
- **Default**: `""`
- **Description**: The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Task ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the task to add the tag to

### Tags Name or ID

- **Name**: `tag`
- **Type**: `options`
- **Default**: `""`
- **Description**: The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get a user

### User ID

- **Name**: `userId`
- **Type**: `string`
- **Default**: `""`
- **Description**: An identifier for the user to get data of. Can be one of an email address,the globally unique identifier for the user, or the keyword me to indicate the current user making the request.

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Create a new project

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the project to create

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace to create the project in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Team Name or ID

- **Name**: `team`
- **Type**: `options`
- **Default**: `""`
- **Description**: The team this project will be assigned to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Other properties to set
- **Placeholder**: Add Property

**Options:**

#### Color
- **Name**: `color`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Color of the project

#### Due On
- **Name**: `due_on`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: The day on which this project is due. This takes a date with format YYYY-MM-DD.

#### Notes
- **Name**: `notes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Basic description or notes for the project


### Project ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`

### Project ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`

### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"100"`
- **Description**: Max number of results to return

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Other properties to set
- **Placeholder**: Add Property

**Options:**

#### Archived
- **Name**: `archived`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to only return projects whose archived field takes on the value of this parameter


### Workspace Name or ID

- **Name**: `workspace`
- **Type**: `options`
- **Default**: `""`
- **Description**: The workspace in which to get users. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Project ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the project to update the data of

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Other properties to set
- **Placeholder**: Add Property

**Options:**

#### Color
- **Name**: `color`
- **Type**: `options`
- **Default**: `"none"`
- **Description**: Color of the project

#### Due On
- **Name**: `due_on`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: The day on which this project is due. This takes a date with format YYYY-MM-DD.

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the project

#### Notes
- **Name**: `notes`
- **Type**: `string`
- **Default**: `""`
- **Description**: Basic description or notes for the project

#### Owner
- **Name**: `owner`
- **Type**: `string`
- **Default**: `""`
- **Description**: The new assignee/cardinal for this project



## Node Information

- **Node Type**: `n8n-nodes-base.asana`
- **Display Name**: Asana
- **Internal Name**: `asana`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.asana/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Asana/Asana.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
