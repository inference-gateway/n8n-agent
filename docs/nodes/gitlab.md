# GitLab

## Description

Retrieve data from GitLab API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GitLab
    parameters:
      authentication: "accessToken"
      resource: "issue"
      operation: "create" # Create a new issue
      operation: "getIssues" # Get the data of a single repository
      operation: "getRepositories" # Returns the repositories of a user
      operation: "create" # Create a new release
      operation: "create" # Create a new file in repository
      owner: "" # User, group or namespace of the project
      repository: "" # The name of the project
      title: "" # The title of the issue
      body: "" # The body of the issue
      due_date: "" # Due Date for issue
      labels: # Label to add to issue
        label: "" # Label to add to issue
      assignee_ids: # User ID to assign issue to
        assignee: "0" # User ID to assign issue to
      issueNumber: "0" # The number of the issue on which to create the comment on
      body: "" # The body of the comment
      issueNumber: "0" # The number of the issue edit
      editFields: # The title of the issue
        title: "" # The title of the issue
        description: "" # The body of the issue
      issueNumber: "0" # The number of the issue get data of
      issueNumber: "0" # The number of the issue to lock
      lockReason: "resolved" # The issue is Off-Topic
      releaseTag: "" # The tag of the release
      additionalFields: # The name of the release
        name: "" # The name of the release
        description: "" # The description of the release
        ref: "" # If Tag doesn’t exist, the release will be created from Ref. It can be a commit SHA, another tag name, or a branch name.
      projectId: "" # The ID or URL-encoded path of the project
      tag_name: "" # The Git tag the release is associated with
      projectId: "" # The ID or URL-encoded path of the project
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
      additionalFields: {} # The field to use as order
      projectId: "" # The ID or URL-encoded path of the project
      tag_name: "" # The Git tag the release is associated with
      additionalFields: # The release name
        name: "" # The release name
        description: "" # The description of the release. You can use Markdown.
        milestones: "" # The title of each milestone to associate with the release (provide a titles list spearated with comma)
        released_at: "" # The date when the release is/was ready
      getRepositoryIssuesFilters: # Return only issues which are assigned to a specific user
        assignee_username: "" # Return only issues which are assigned to a specific user
        author_username: "" # Return only issues which were created by a specific user
        search: "" # Search issues against their title and description
        labels: "" # Return only issues with the given labels. Multiple lables can be separated by comma.
        updated_after: "" # Return only issues updated at or after this time
      filePath: "" # The file path of the file. Has to contain the full path or leave it empty for root folder.
      filePath: "" # The path of the folder to list
      page: "1" # Page of results to display
      additionalParameters: # Additional fields to add
        ref: "" # The name of the commit/branch/tag. Default: the repository’s default branch (usually main).
        recursive: false # Whether or not to get a recursive file tree. Default is false.
      asBinaryProperty: true # Whether to set the data of the file as binary property instead of returning the raw API response
      binaryPropertyName: "data"
      additionalParameters: # Additional fields to add
        reference: "" # The name of the commit/branch/tag. Default: the repository’s default branch (usually main).
      binaryData: false # Whether the data to upload should be taken from binary field
      fileContent: "" # The text content of the file
      binaryPropertyName: "data"
      commitMessage: ""
      branch: "" # Name of the new branch to create. The commit is added to this branch.
      additionalParameters: {} # Additional fields to add
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.gitlab
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"accessToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"issue"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new issue

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getIssues"`
- **Description**: Get the data of a single repository

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getRepositories"`
- **Description**: Returns the repositories of a user

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new release

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new file in repository

### Project Owner

- **Name**: `owner`
- **Type**: `string`
- **Default**: `""`
- **Description**: User, group or namespace of the project
- **Placeholder**: n8n-io

### Project Name

- **Name**: `repository`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the project
- **Placeholder**: n8n

### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title of the issue

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the issue

### Due Date

- **Name**: `due_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Due Date for issue

### Labels

- **Name**: `labels`
- **Type**: `collection`
- **Default**: `"{ label: '' }"`
- **Description**: Label to add to issue

**Options:**

#### Label
- **Name**: `label`
- **Type**: `string`
- **Default**: `""`
- **Description**: Label to add to issue


### Assignees

- **Name**: `assignee_ids`
- **Type**: `collection`
- **Default**: `"{ assignee: '' }"`
- **Description**: User ID to assign issue to

**Options:**

#### Assignee
- **Name**: `assignee`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: User ID to assign issue to


### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the issue on which to create the comment on

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the comment

### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the issue edit

### Edit Fields

- **Name**: `editFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The title of the issue

**Options:**

#### Title
- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title of the issue

#### Body
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the issue


### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the issue get data of

### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the issue to lock

### Lock Reason

- **Name**: `lockReason`
- **Type**: `options`
- **Default**: `"resolved"`
- **Description**: The issue is Off-Topic

### Tag

- **Name**: `releaseTag`
- **Type**: `string`
- **Default**: `""`
- **Description**: The tag of the release

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The name of the release

**Options:**

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the release

#### Description
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: The description of the release

#### Ref
- **Name**: `ref`
- **Type**: `string`
- **Default**: `""`
- **Description**: If Tag doesn’t exist, the release will be created from Ref. It can be a commit SHA, another tag name, or a branch name.


### Project ID

- **Name**: `projectId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID or URL-encoded path of the project

### Tag Name

- **Name**: `tag_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Git tag the release is associated with

### Project ID

- **Name**: `projectId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID or URL-encoded path of the project

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"20"`
- **Description**: Max number of results to return

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The field to use as order

### Project ID

- **Name**: `projectId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID or URL-encoded path of the project

### Tag Name

- **Name**: `tag_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The Git tag the release is associated with

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The release name

**Options:**

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The release name

#### Description
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: The description of the release. You can use Markdown.

#### Milestones
- **Name**: `milestones`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title of each milestone to associate with the release (provide a titles list spearated with comma)

#### Released At
- **Name**: `released_at`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: The date when the release is/was ready


### Filters

- **Name**: `getRepositoryIssuesFilters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Return only issues which are assigned to a specific user

**Options:**

#### Assignee
- **Name**: `assignee_username`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues which are assigned to a specific user

#### Creator
- **Name**: `author_username`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues which were created by a specific user

#### Search
- **Name**: `search`
- **Type**: `string`
- **Default**: `""`
- **Description**: Search issues against their title and description

#### Labels
- **Name**: `labels`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues with the given labels. Multiple lables can be separated by comma.

#### Updated After
- **Name**: `updated_after`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Return only issues updated at or after this time


### File Path

- **Name**: `filePath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file. Has to contain the full path or leave it empty for root folder.
- **Placeholder**: docs/README.md

### Path

- **Name**: `filePath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of the folder to list
- **Placeholder**: docs/

### Page

- **Name**: `page`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: Page of results to display

### Additional Parameters

- **Name**: `additionalParameters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional fields to add
- **Placeholder**: Add Parameter

**Options:**

#### Reference
- **Name**: `ref`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the commit/branch/tag. Default: the repository’s default branch (usually main).

#### Recursive
- **Name**: `recursive`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether or not to get a recursive file tree. Default is false.


### As Binary Property

- **Name**: `asBinaryProperty`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to set the data of the file as binary property instead of returning the raw API response

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Additional Parameters

- **Name**: `additionalParameters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Additional fields to add
- **Placeholder**: Add Parameter

**Options:**

#### Reference
- **Name**: `reference`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the commit/branch/tag. Default: the repository’s default branch (usually main).


### Binary File

- **Name**: `binaryData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the data to upload should be taken from binary field

### File Content

- **Name**: `fileContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The text content of the file

### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Commit Message

- **Name**: `commitMessage`
- **Type**: `string`
- **Default**: `""`

### Branch

- **Name**: `branch`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the new branch to create. The commit is added to this branch.

### Additional Parameters

- **Name**: `additionalParameters`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Additional fields to add
- **Placeholder**: Add Parameter


## Node Information

- **Node Type**: `n8n-nodes-base.gitlab`
- **Display Name**: GitLab
- **Internal Name**: `gitlab`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gitlab/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Gitlab/Gitlab.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
