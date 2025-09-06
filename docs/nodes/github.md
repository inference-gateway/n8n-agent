# GitHub

## Description

Consume GitHub API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: GitHub
    parameters:
      authentication: "accessToken"
      resource: "issue"
      operation: "getRepositories" # Returns all repositories of an organization
      operation: "create" # Create a new issue
      operation: "create" # Create a new file in repository
      operation: "getIssues" # Get the data of a single repository
      operation: "getRepositories" # Returns the repositories of a user
      operation: "create" # Creates a new release
      operation: "create" # Creates a new review
      operation: "dispatch" # Disable a workflow
      webhookNotice: ""
      owner: "{ mode: 'list', value: '' }"
      repository: "{
					mode: 'list',
					value: '',
				}"
      workflowId: "{
					mode: 'list',
					value: '',
				}" # The workflow to dispatch
      ref: "main" # The git reference for the workflow dispatch (branch or tag name)
      ref: "{
					mode: 'list',
					value: '',
				}" # The git reference for the workflow dispatch (branch, tag, or commit SHA)
      inputs: {} # JSON object with input parameters for the workflow
      filePath: "" # The file path of the file. Has to contain the full path.
      filePath: "" # The path of the folder to list
      binaryData: false # Whether the data to upload should be taken from binary field
      fileContent: "" # The text content of the file
      binaryPropertyName: "data"
      commitMessage: ""
      additionalParameters: {} # Additional fields to add
      asBinaryProperty: true # Whether to set the data of the file as binary property instead of returning the raw API response
      binaryPropertyName: "data"
      additionalParameters: # Additional fields to add
        reference: "" # The name of the commit/branch/tag. Default: the repository’s default branch (usually master).
      title: "" # The title of the issue
      body: "" # The body of the issue
      labels: # Label to add to issue
        label: "" # Label to add to issue
      assignees: # User to assign issue too
        assignee: "" # User to assign issue too
      issueNumber: "0" # The number of the issue on which to create the comment on
      body: "" # The body of the comment
      issueNumber: "0" # The number of the issue edit
      editFields: {} # User to assign issue to
      issueNumber: "0" # The issue number to get data for
      issueNumber: "0" # The issue number to lock
      lockReason: "resolved" # The issue is Off-Topic
      releaseTag: "" # The tag of the release
      additionalFields: # The name of the issue
        name: "" # The name of the issue
        body: "" # The body of the release
        draft: false # Whether to create a draft (unpublished) release, "false" to create a published one
        prerelease: false # Whether to point out that the release is non-production ready
        target_commitish: "" # Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).
      release_id: ""
      additionalFields: # The body of the release
        body: "" # The body of the release
        draft: false # Whether to create a draft (unpublished) release, "false" to create a published one
        name: "" # The name of the release
        prerelease: false # Whether to point out that the release is non-production ready
        tag_name: "" # The name of the tag
        target_commitish: "" # Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      getRepositoryIssuesFilters: # Return only issues which are assigned to a specific user
        assignee: "" # Return only issues which are assigned to a specific user
        creator: "" # Return only issues which were created by a specific user
        mentioned: "" # Return only issues in which a specific user was mentioned
        labels: "" # Return only issues with the given labels. Multiple labels can be separated by comma.
        since: "" # Return only issues updated at or after this time
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return. Maximum value is <a href="https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests">100</a>.
      getRepositoryPullRequestsFilters: {} # Returns pull requests with any state
      pullRequestNumber: "0" # The number of the pull request
      reviewId: "" # ID of the review
      pullRequestNumber: "0" # The number of the pull request
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      pullRequestNumber: "0" # The number of the pull request to review
      event: "approve" # Approve the pull request
      body: "" # The body of the review (required for events Request Changes or Comment)
      additionalFields: # The SHA of the commit that needs a review, if different from the latest
        commitId: "" # The SHA of the commit that needs a review, if different from the latest
      body: "" # The body of the review
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      organization: "" # The GitHub organization that the user is being invited to
      email: "" # The email address of the invited user
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.github
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
- **Default**: `"getRepositories"`
- **Description**: Returns all repositories of an organization

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new issue

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new file in repository

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
- **Description**: Creates a new release

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Creates a new review

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"dispatch"`
- **Description**: Disable a workflow

### Your execution will pause until a webhook is called. This URL will be generated at runtime and passed to your Github workflow as a resumeUrl input.

- **Name**: `webhookNotice`
- **Type**: `notice`
- **Default**: `""`

### Repository Owner

- **Name**: `owner`
- **Type**: `resourceLocator`
- **Default**: `"{ mode: 'list', value: '' }"`
- **Placeholder**: Select an owner...

### Repository Name

- **Name**: `repository`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Placeholder**: Select an Repository...

### Workflow

- **Name**: `workflowId`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Description**: The workflow to dispatch
- **Placeholder**: Select a workflow...

### Ref

- **Name**: `ref`
- **Type**: `string`
- **Default**: `"main"`
- **Description**: The git reference for the workflow dispatch (branch or tag name)

### Ref

- **Name**: `ref`
- **Type**: `resourceLocator`
- **Default**: `"{\n\t\t\t\t\tmode: 'list',\n\t\t\t\t\tvalue: '',\n\t\t\t\t}"`
- **Description**: The git reference for the workflow dispatch (branch, tag, or commit SHA)
- **Placeholder**: Select a branch, tag, or commit...

### Inputs

- **Name**: `inputs`
- **Type**: `json`
- **Default**: `"{}"`
- **Description**: JSON object with input parameters for the workflow

### File Path

- **Name**: `filePath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The file path of the file. Has to contain the full path.
- **Placeholder**: docs/README.md

### Path

- **Name**: `filePath`
- **Type**: `string`
- **Default**: `""`
- **Description**: The path of the folder to list
- **Placeholder**: docs/

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

### Additional Parameters

- **Name**: `additionalParameters`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Additional fields to add
- **Placeholder**: Add Parameter

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
- **Description**: The name of the commit/branch/tag. Default: the repository’s default branch (usually master).


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

- **Name**: `assignees`
- **Type**: `collection`
- **Default**: `"{ assignee: '' }"`
- **Description**: User to assign issue too

**Options:**

#### Assignee
- **Name**: `assignee`
- **Type**: `string`
- **Default**: `""`
- **Description**: User to assign issue too


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
- **Description**: User to assign issue to

### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The issue number to get data for

### Issue Number

- **Name**: `issueNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The issue number to lock

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
- **Description**: The name of the issue

**Options:**

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the issue

#### Body
- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the release

#### Draft
- **Name**: `draft`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to create a draft (unpublished) release, "false" to create a published one

#### Prerelease
- **Name**: `prerelease`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to point out that the release is non-production ready

#### Target Commitish
- **Name**: `target_commitish`
- **Type**: `string`
- **Default**: `""`
- **Description**: Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).


### Release ID

- **Name**: `release_id`
- **Type**: `string`
- **Default**: `""`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The body of the release

**Options:**

#### Body
- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the release

#### Draft
- **Name**: `draft`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to create a draft (unpublished) release, "false" to create a published one

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the release

#### Prerelease
- **Name**: `prerelease`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to point out that the release is non-production ready

#### Tag Name
- **Name**: `tag_name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the tag

#### Target Commitish
- **Name**: `target_commitish`
- **Type**: `string`
- **Default**: `""`
- **Description**: Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).


### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### Filters

- **Name**: `getRepositoryIssuesFilters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Return only issues which are assigned to a specific user

**Options:**

#### Assignee
- **Name**: `assignee`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues which are assigned to a specific user

#### Creator
- **Name**: `creator`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues which were created by a specific user

#### Mentioned
- **Name**: `mentioned`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues in which a specific user was mentioned

#### Labels
- **Name**: `labels`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only issues with the given labels. Multiple labels can be separated by comma.

#### Updated Since
- **Name**: `since`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Return only issues updated at or after this time


### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return. Maximum value is <a href="https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests">100</a>.

### Filters

- **Name**: `getRepositoryPullRequestsFilters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Returns pull requests with any state

### PR Number

- **Name**: `pullRequestNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the pull request

### Review ID

- **Name**: `reviewId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the review

### PR Number

- **Name**: `pullRequestNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the pull request

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### PR Number

- **Name**: `pullRequestNumber`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The number of the pull request to review

### Event

- **Name**: `event`
- **Type**: `options`
- **Default**: `"approve"`
- **Description**: Approve the pull request

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the review (required for events Request Changes or Comment)

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The SHA of the commit that needs a review, if different from the latest
- **Placeholder**: Add Field

**Options:**

#### Commit ID
- **Name**: `commitId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The SHA of the commit that needs a review, if different from the latest


### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The body of the review

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### Organization

- **Name**: `organization`
- **Type**: `string`
- **Default**: `""`
- **Description**: The GitHub organization that the user is being invited to

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address of the invited user
- **Placeholder**: name@email.com

### Return All

- **Name**: `returnAll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return all results or only up to a given limit

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return


## Node Information

- **Node Type**: `n8n-nodes-base.github`
- **Display Name**: GitHub
- **Internal Name**: `github`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.github/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Github/Github.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
