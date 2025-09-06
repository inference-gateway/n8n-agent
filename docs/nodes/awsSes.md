# AWS SES

## Description

Sends data to AWS SES

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS SES
    parameters:
      resource: "email"
      operation: "create" # Create a new custom verification email template
      fromEmailAddress: "" # The email address that the custom verification email is sent from
      templateName: "" # The name of the custom verification email template
      templateContent: "" # The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML
      templateSubject: "" # The subject line of the custom verification email
      successRedirectionURL: "" # The URL that the recipient of the verification email is sent to if his or her address is successfully verified
      failureRedirectionURL: "" # The URL that the recipient of the verification email is sent to if his or her address is not successfully verified
      email: "" # The email address to verify
      templateName: "" # The name of the custom verification email template to use when sending the verification email
      additionalFields: # Name of a configuration set to use when sending the verification email
        configurationSetName: "" # Name of a configuration set to use when sending the verification email
      templateName: "" # The name of the custom verification email template
      updateFields: # The URL that the recipient of the verification email is sent to if his or her address is not successfully verified
        failureRedirectionURL: "" # The URL that the recipient of the verification email is sent to if his or her address is not successfully verified
        fromEmailAddress: "" # The email address that the custom verification email is sent from
        successRedirectionURL: "" # The URL that the recipient of the verification email is sent to if his or her address is successfully verified
        templateContent: "" # The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML
        templateSubject: "" # The subject line of the custom verification email
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
      operation: "send"
      isBodyHtml: false # Whether body is HTML or simple text
      subject: ""
      body: "" # The message to be sent
      fromEmail: "" # Email address of the sender
      toAddresses: [] # Email addresses of the recipients
      templateName: "" # The ARN of the template to use when sending this email. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      fromEmail: "" # Email address of the sender
      toAddresses: [] # Email addresses of the recipients
      templateDataUi: {}
      additionalFields: {} # Bcc Recipients of the email
      operation: "create" # Create a template
      templateName: "" # The name of the template
      subjectPart: "" # The subject line of the email
      htmlPart: "" # The HTML body of the email
      additionalFields: # The email body that will be visible to recipients whose email clients do not display HTML
        textPart: "" # The email body that will be visible to recipients whose email clients do not display HTML
      updateFields: # The email body that will be visible to recipients whose email clients do not display HTML
        textPart: "" # The email body that will be visible to recipients whose email clients do not display HTML
        subjectPart: "" # The subject line of the email
        htmlPart: "" # The HTML body of the email
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsSes
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"email"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a new custom verification email template

### From Email

- **Name**: `fromEmailAddress`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address that the custom verification email is sent from

### Template Name

- **Name**: `templateName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the custom verification email template

### Template Content

- **Name**: `templateContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML

### Template Subject

- **Name**: `templateSubject`
- **Type**: `string`
- **Default**: `""`
- **Description**: The subject line of the custom verification email

### Success Redirection URL

- **Name**: `successRedirectionURL`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL that the recipient of the verification email is sent to if his or her address is successfully verified

### Failure Redirection URL

- **Name**: `failureRedirectionURL`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified

### Email

- **Name**: `email`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address to verify
- **Placeholder**: name@email.com

### Template Name

- **Name**: `templateName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the custom verification email template to use when sending the verification email

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Name of a configuration set to use when sending the verification email
- **Placeholder**: Add Field

**Options:**

#### Configuration Set Name
- **Name**: `configurationSetName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of a configuration set to use when sending the verification email


### Template Name

- **Name**: `templateName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the custom verification email template

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified
- **Placeholder**: Add Field

**Options:**

#### Failure Redirection URL
- **Name**: `failureRedirectionURL`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL that the recipient of the verification email is sent to if his or her address is not successfully verified

#### From Email
- **Name**: `fromEmailAddress`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email address that the custom verification email is sent from

#### Success Redirection URL
- **Name**: `successRedirectionURL`
- **Type**: `string`
- **Default**: `""`
- **Description**: The URL that the recipient of the verification email is sent to if his or her address is successfully verified

#### Template Content
- **Name**: `templateContent`
- **Type**: `string`
- **Default**: `""`
- **Description**: The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML

#### Template Subject
- **Name**: `templateSubject`
- **Type**: `string`
- **Default**: `""`
- **Description**: The subject line of the custom verification email


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

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"send"`

### Is Body HTML

- **Name**: `isBodyHtml`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether body is HTML or simple text

### Subject

- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`

### Body

- **Name**: `body`
- **Type**: `string`
- **Default**: `""`
- **Description**: The message to be sent

### From Email

- **Name**: `fromEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the sender
- **Placeholder**: admin@example.com

### To Addresses

- **Name**: `toAddresses`
- **Type**: `string`
- **Default**: `"[]"`
- **Description**: Email addresses of the recipients
- **Placeholder**: info@example.com

### Template Name or ID

- **Name**: `templateName`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ARN of the template to use when sending this email. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### From Email

- **Name**: `fromEmail`
- **Type**: `string`
- **Default**: `""`
- **Description**: Email address of the sender
- **Placeholder**: admin@example.com

### To Addresses

- **Name**: `toAddresses`
- **Type**: `string`
- **Default**: `"[]"`
- **Description**: Email addresses of the recipients
- **Placeholder**: info@example.com

### Template Data

- **Name**: `templateDataUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Placeholder**: Add Data

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Bcc Recipients of the email
- **Placeholder**: Add Field

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a template

### Template Name

- **Name**: `templateName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the template

### Subject Part

- **Name**: `subjectPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The subject line of the email

### Html Part

- **Name**: `htmlPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The HTML body of the email

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The email body that will be visible to recipients whose email clients do not display HTML
- **Placeholder**: Add Field

**Options:**

#### Text Part
- **Name**: `textPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email body that will be visible to recipients whose email clients do not display HTML


### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The email body that will be visible to recipients whose email clients do not display HTML
- **Placeholder**: Add Field

**Options:**

#### Text Part
- **Name**: `textPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The email body that will be visible to recipients whose email clients do not display HTML

#### Subject Part
- **Name**: `subjectPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The subject line of the email

#### Html Part
- **Name**: `htmlPart`
- **Type**: `string`
- **Default**: `""`
- **Description**: The HTML body of the email


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


## Node Information

- **Node Type**: `n8n-nodes-base.awsSes`
- **Display Name**: AWS SES
- **Internal Name**: `awsSes`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsses/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/SES/AwsSes.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
