# Pipedrive

## Description

Create and edit data in Pipedrive

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Pipedrive
    parameters:
      authentication: "apiToken"
      resource: "deal"
      operation: "create" # Create an activity
      operation: "create" # Create a deal
      operation: "getAll" # Get many activities of a deal
      operation: "add" # Add a product to a deal
      operation: "create" # Create a file
      operation: "create" # Create a lead
      operation: "create" # Create a note
      operation: "create" # Create an organization
      operation: "create" # Create a person
      operation: "getAll" # Get data of many products
      subject: "" # The subject of the activity to create
      done: "0" # Whether the activity is done or not
      type: "" # Type of the activity like "call", "meeting", etc
      additionalFields: # ID of the deal this activity will be associated with
        deal_id: "0" # ID of the deal this activity will be associated with
        due_date: "" # Due Date to activity be done YYYY-MM-DD
        note: "" # Note of the activity (HTML format)
        org_id: "" # ID of the organization this activity will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        person_id: "0" # ID of the person this activity will be associated with
        user_id: "" # ID of the active user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      activityId: "0" # ID of the activity to delete
      activityId: "0" # ID of the activity to get
      activityId: "0" # ID of the activity to update
      updateFields: # Whether the user is set to busy during the activity
        busy_flag: false # Whether the user is set to busy during the activity
        deal_id: "0" # ID of the deal this activity will be associated with
        due_date: "" # Due Date to activity be done YYYY-MM-DD
      title: "" # The title of the deal to create
      associateWith: "organization" # Type of entity to link to this deal
      org_id: "0" # ID of the organization this deal will be associated with
      person_id: "0" # ID of the person this deal will be associated with
      additionalFields: # Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
        currency: "USD" # Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
      dealId: "0" # ID of the deal to delete
      dealId: "0" # ID of the deal to duplicate
      dealId: "0" # ID of the deal to get
      dealId: "0" # ID of the deal to update
      updateFields: # Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
        currency: "USD" # Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
      dealId: "" # The ID of the deal to add a product to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      productId: "" # The ID of the product to add to a deal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      item_price: "0.0" # Price at which to add or update this product in a deal
      quantity: "1" # How many items of this product to add/update in a deal
      additionalFields: # Text to describe this product-deal attachment
        comments: "" # Text to describe this product-deal attachment
        discount_percentage: "0" # Percentage of discount to apply
        product_variation_id: "" # ID of the product variation to use
      dealId: "" # The ID of the deal whose product to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      productAttachmentId: "" # ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      updateFields: # Text to describe this product-deal attachment
        comments: "" # Text to describe this product-deal attachment
        discount_percentage: "0" # Percentage of discount to apply
        item_price: "0.0" # Price at which to add or update this product in a deal
        quantity: "1" # How many items of this product to add/update in a deal
        product_variation_id: "" # ID of the product variation to use
      dealId: "" # The ID of the deal whose product to remove. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      productAttachmentId: "" # ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      dealId: "" # The ID of the deal whose products to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      term: "" # The search term to look for. Minimum 2 characters (or 1 if using exact_match).
      exactMatch: false # Whether only full exact matches against the given term are returned. It is not case sensitive.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      additionalFields: # Supports including optional fields in the results which are not provided by default. Example: deal.cc_email.
        includeFields: "" # Supports including optional fields in the results which are not provided by default. Example: deal.cc_email.
        organizationId: "" # Will filter Deals by the provided Organization ID
        personId: "" # Will filter Deals by the provided Person ID
      binaryPropertyName: "data"
      additionalFields: # ID of the activite this file will be associated with
        activity_id: "0" # ID of the activite this file will be associated with
        deal_id: "0" # ID of the deal this file will be associated with
        org_id: "" # ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        person_id: "0" # ID of the person this file will be associated with
        product_id: "0" # ID of the person this file will be associated with
      fileId: "0" # ID of the file to delete
      fileId: "0" # ID of the file to download
      binaryPropertyName: "data"
      fileId: "0" # ID of the file to get
      fileId: "0" # ID of the file to update
      updateFields: # The updated visible name of the file
        name: "" # The updated visible name of the file
        description: "" # The updated description of the file
      title: "" # Name of the lead to create
      associateWith: "organization" # Type of entity to link to this lead
      organization_id: "0" # ID of the organization to link to this lead
      person_id: "0" # ID of the person to link to this lead
      additionalFields: # Date when the lead’s deal is expected to be closed, in ISO-8601 format
        expected_close_date: "" # Date when the lead’s deal is expected to be closed, in ISO-8601 format
      leadId: "" # ID of the lead to delete
      leadId: "" # ID of the lead to retrieve
      leadId: "" # ID of the lead to update
      updateFields: # Name of the lead to update
        title: "" # Name of the lead to update
        owner_id: "" # ID of the user who will own the lead to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      content: "" # The content of the note to create
      additionalFields: # ID of the deal this note will be associated with
        deal_id: "0" # ID of the deal this note will be associated with
        org_id: "" # ID of the organization this deal will be associated with.
        person_id: "0" # ID of the person this note will be associated with.
      noteId: "0" # ID of the note to delete
      noteId: "0" # ID of the note to get
      noteId: "0" # ID of the note to update
      updateFields: # The content of the note
        content: "" # The content of the note
        deal_id: "0" # ID of the deal this note will be associated with
        lead_id: "0" # ID of the lead this note will be associated with
        org_id: "" # ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        person_id: "0" # ID of the person this note will be associated with
      name: "" # The name of the organization to create
      additionalFields: {} # Adds a custom property to set also values which have not been predefined
      organizationId: "0" # ID of the organization to delete
      organizationId: "0" # ID of the organization to get
      term: "" # The search term to look for. Minimum 2 characters (or 1 if using exact_match).
      additionalFields: # Whether only full exact matches against the given term are returned. It is not case sensitive.
        exactMatch: false # Whether only full exact matches against the given term are returned. It is not case sensitive.
      organizationId: "" # The ID of the organization to create
      updateFields: {} # Adds a custom property to set also values which have not been predefined
      name: "" # The name of the person to create
      additionalFields: {} # Adds a custom property to set also values which have not been predefined
      personId: "0" # ID of the person to delete
      personId: "0" # ID of the person to get
      personId: "0" # ID of the person to update
      updateFields: {} # The fields to update
      resolveProperties: false # By default do custom properties get returned only as ID instead of their actual name. Also option fields contain only the ID instead of their actual value. If this option gets set they get automatically resolved.
      encodeProperties: false # By default do custom properties have to be set as ID instead of their actual name. Also option fields have to be set as ID instead of their actual value. If this option gets set they get automatically encoded.
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "100" # Max number of results to return
      dealId: "" # The ID of the deal whose activity to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      additionalFields: # Whether the activity is done or not
        done: false # Whether the activity is done or not
        exclude: "" # A comma-separated Activity IDs, to exclude from result. Ex. 4, 9, 11, ...
      filters: {}
      filters: # If supplied, only organizations whose name starts with the specified letter will be returned
        firstChar: "" # If supplied, only organizations whose name starts with the specified letter will be returned
        filterId: "" # ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
      additionalFields: # ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        filterId: "" # ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        firstChar: "" # If supplied, only persons whose name starts with the specified letter will be returned
        sort: "" # The field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).
      term: "" # The search term to look for. Minimum 2 characters (or 1 if using exact_match).
      additionalFields: # Whether only full exact matches against the given term are returned. It is not case sensitive.
        exactMatch: false # Whether only full exact matches against the given term are returned. It is not case sensitive.
        fields: "" # A comma-separated string array. The fields to perform the search from. Defaults to all of them.
        includeFields: "" # Supports including optional fields in the results which are not provided by default
        organizationId: "" # Will filter Deals by the provided Organization ID
        rawData: false # Whether to return the data exactly in the way it got received from the API
      additionalFields: # ID of the deal this note will be associated with
        deal_id: "0" # ID of the deal this note will be associated with
        lead_id: "0" # ID of the lead this note will be associated with
        org_id: "" # ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        person_id: "0" # ID of the person this note will be associated with
      additionalFields: # Whether the Activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
        done: false # Whether the Activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
        end_date: "" # Use the Activity due date where you wish to stop fetching Activities from. Insert due date in YYYY-MM-DD format.
        filterId: "" # The ID of the Filter to use (will narrow down results if used together with user_id parameter). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        start_date: "" # Use the Activity due date where you wish to begin fetching Activities from. Insert due date in YYYY-MM-DD format.
      filters: # Predefined filter to apply to the deals to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        filter_id: "" # Predefined filter to apply to the deals to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
        stage_id: "" # ID of the stage to filter deals by. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.pipedrive
```

## Parameters

### Authentication

- **Name**: `authentication`
- **Type**: `options`
- **Default**: `"apiToken"`

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"deal"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create an activity

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a deal

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Get many activities of a deal

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Add a product to a deal

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a file

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a lead

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a note

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create an organization

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a person

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Get data of many products

### Subject

- **Name**: `subject`
- **Type**: `string`
- **Default**: `""`
- **Description**: The subject of the activity to create

### Done

- **Name**: `done`
- **Type**: `options`
- **Default**: `"0"`
- **Description**: Whether the activity is done or not

### Type

- **Name**: `type`
- **Type**: `string`
- **Default**: `""`
- **Description**: Type of the activity like "call", "meeting", etc
- **Placeholder**: call

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the deal this activity will be associated with
- **Placeholder**: Add Field

**Options:**

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this activity will be associated with

#### Due Date
- **Name**: `due_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Due Date to activity be done YYYY-MM-DD

#### Note
- **Name**: `note`
- **Type**: `string`
- **Default**: `""`
- **Description**: Note of the activity (HTML format)

#### Organization Name or ID
- **Name**: `org_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the organization this activity will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Person ID
- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this activity will be associated with

#### User Name or ID
- **Name**: `user_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the active user whom the activity will be assigned to. If omitted, the activity will be assigned to the authorized user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Activity ID

- **Name**: `activityId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the activity to delete

### Activity ID

- **Name**: `activityId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the activity to get

### Activity ID

- **Name**: `activityId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the activity to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the user is set to busy during the activity
- **Placeholder**: Add Field

**Options:**

#### Busy Flag
- **Name**: `busy_flag`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the user is set to busy during the activity

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this activity will be associated with

#### Due Date
- **Name**: `due_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Due Date to activity be done YYYY-MM-DD


### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: The title of the deal to create

### Associate With

- **Name**: `associateWith`
- **Type**: `options`
- **Default**: `"organization"`
- **Description**: Type of entity to link to this deal

### Organization ID

- **Name**: `org_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the organization this deal will be associated with

### Person ID

- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this deal will be associated with

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
- **Placeholder**: Add Field

**Options:**

#### Currency
- **Name**: `currency`
- **Type**: `string`
- **Default**: `"USD"`
- **Description**: Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...


### Deal ID

- **Name**: `dealId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal to delete

### Deal ID

- **Name**: `dealId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal to duplicate

### Deal ID

- **Name**: `dealId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal to get

### Deal ID

- **Name**: `dealId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...
- **Placeholder**: Add Field

**Options:**

#### Currency
- **Name**: `currency`
- **Type**: `string`
- **Default**: `"USD"`
- **Description**: Currency of the deal. Accepts a 3-character currency code. Like EUR, USD, ...


### Deal Name or ID

- **Name**: `dealId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the deal to add a product to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Product Name or ID

- **Name**: `productId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the product to add to a deal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Item Price

- **Name**: `item_price`
- **Type**: `number`
- **Default**: `"0.0"`
- **Description**: Price at which to add or update this product in a deal

### Quantity

- **Name**: `quantity`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: How many items of this product to add/update in a deal

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Text to describe this product-deal attachment
- **Placeholder**: Add Field

**Options:**

#### Comments
- **Name**: `comments`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text to describe this product-deal attachment

#### Discount Percentage
- **Name**: `discount_percentage`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Percentage of discount to apply

#### Product Variation ID
- **Name**: `product_variation_id`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the product variation to use


### Deal Name or ID

- **Name**: `dealId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the deal whose product to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Product Attachment Name or ID

- **Name**: `productAttachmentId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Text to describe this product-deal attachment
- **Placeholder**: Add Field

**Options:**

#### Comments
- **Name**: `comments`
- **Type**: `string`
- **Default**: `""`
- **Description**: Text to describe this product-deal attachment

#### Discount Percentage
- **Name**: `discount_percentage`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Percentage of discount to apply

#### Item Price
- **Name**: `item_price`
- **Type**: `number`
- **Default**: `"0.0"`
- **Description**: Price at which to add or update this product in a deal

#### Quantity
- **Name**: `quantity`
- **Type**: `number`
- **Default**: `"1"`
- **Description**: How many items of this product to add/update in a deal

#### Product Variation ID
- **Name**: `product_variation_id`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the product variation to use


### Deal Name or ID

- **Name**: `dealId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the deal whose product to remove. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Product Attachment Name or ID

- **Name**: `productAttachmentId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Deal Name or ID

- **Name**: `dealId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the deal whose products to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Term

- **Name**: `term`
- **Type**: `string`
- **Default**: `""`
- **Description**: The search term to look for. Minimum 2 characters (or 1 if using exact_match).

### Exact Match

- **Name**: `exactMatch`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether only full exact matches against the given term are returned. It is not case sensitive.

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
- **Description**: Supports including optional fields in the results which are not provided by default. Example: deal.cc_email.
- **Placeholder**: Add Field

**Options:**

#### Include Fields
- **Name**: `includeFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: Supports including optional fields in the results which are not provided by default. Example: deal.cc_email.

#### Organization ID
- **Name**: `organizationId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Will filter Deals by the provided Organization ID

#### Person ID
- **Name**: `personId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Will filter Deals by the provided Person ID


### Input Binary Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the activite this file will be associated with
- **Placeholder**: Add Field

**Options:**

#### Activity ID
- **Name**: `activity_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the activite this file will be associated with

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this file will be associated with

#### Organization Name or ID
- **Name**: `org_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Person ID
- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this file will be associated with

#### Product ID
- **Name**: `product_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this file will be associated with


### File ID

- **Name**: `fileId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the file to delete

### File ID

- **Name**: `fileId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the file to download

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### File ID

- **Name**: `fileId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the file to get

### File ID

- **Name**: `fileId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the file to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The updated visible name of the file
- **Placeholder**: Add Field

**Options:**

#### Name
- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The updated visible name of the file

#### Description
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: The updated description of the file


### Title

- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the lead to create

### Associate With

- **Name**: `associateWith`
- **Type**: `options`
- **Default**: `"organization"`
- **Description**: Type of entity to link to this lead

### Organization ID

- **Name**: `organization_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the organization to link to this lead

### Person ID

- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person to link to this lead

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Date when the lead’s deal is expected to be closed, in ISO-8601 format
- **Placeholder**: Add Field

**Options:**

#### Expected Close Date
- **Name**: `expected_close_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Date when the lead’s deal is expected to be closed, in ISO-8601 format


### Lead ID

- **Name**: `leadId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the lead to delete

### Lead ID

- **Name**: `leadId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the lead to retrieve

### Lead ID

- **Name**: `leadId`
- **Type**: `string`
- **Default**: `""`
- **Description**: ID of the lead to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Name of the lead to update
- **Placeholder**: Add Field

**Options:**

#### Title
- **Name**: `title`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the lead to update

#### Owner Name or ID
- **Name**: `owner_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the user who will own the lead to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Content

- **Name**: `content`
- **Type**: `string`
- **Default**: `""`
- **Description**: The content of the note to create

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the deal this note will be associated with
- **Placeholder**: Add Field

**Options:**

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this note will be associated with

#### Organization ID
- **Name**: `org_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the organization this deal will be associated with.

#### Person ID
- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this note will be associated with.


### Note ID

- **Name**: `noteId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the note to delete

### Note ID

- **Name**: `noteId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the note to get

### Note ID

- **Name**: `noteId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the note to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The content of the note
- **Placeholder**: Add Field

**Options:**

#### Content
- **Name**: `content`
- **Type**: `string`
- **Default**: `""`
- **Description**: The content of the note

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this note will be associated with

#### Lead ID
- **Name**: `lead_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the lead this note will be associated with

#### Organization Name or ID
- **Name**: `org_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Person ID
- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this note will be associated with


### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the organization to create

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Adds a custom property to set also values which have not been predefined
- **Placeholder**: Add Field

### Organization ID

- **Name**: `organizationId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the organization to delete

### Organization ID

- **Name**: `organizationId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the organization to get

### Term

- **Name**: `term`
- **Type**: `string`
- **Default**: `""`
- **Description**: The search term to look for. Minimum 2 characters (or 1 if using exact_match).

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether only full exact matches against the given term are returned. It is not case sensitive.
- **Placeholder**: Add Field

**Options:**

#### Exact Match
- **Name**: `exactMatch`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether only full exact matches against the given term are returned. It is not case sensitive.


### Organization ID

- **Name**: `organizationId`
- **Type**: `number`
- **Default**: `""`
- **Description**: The ID of the organization to create

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Adds a custom property to set also values which have not been predefined
- **Placeholder**: Add Field

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the person to create

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Adds a custom property to set also values which have not been predefined
- **Placeholder**: Add Field

### Person ID

- **Name**: `personId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person to delete

### Person ID

- **Name**: `personId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person to get

### Person ID

- **Name**: `personId`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person to update

### Update Fields

- **Name**: `updateFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The fields to update
- **Placeholder**: Add Field

### Resolve Properties

- **Name**: `resolveProperties`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: By default do custom properties get returned only as ID instead of their actual name. Also option fields contain only the ID instead of their actual value. If this option gets set they get automatically resolved.

### Encode Properties

- **Name**: `encodeProperties`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: By default do custom properties have to be set as ID instead of their actual name. Also option fields have to be set as ID instead of their actual value. If this option gets set they get automatically encoded.

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

### Deal Name or ID

- **Name**: `dealId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the deal whose activity to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the activity is done or not
- **Placeholder**: Add Field

**Options:**

#### Done
- **Name**: `done`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the activity is done or not

#### Exclude Activity IDs
- **Name**: `exclude`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated Activity IDs, to exclude from result. Ex. 4, 9, 11, ...


### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add Filter

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: If supplied, only organizations whose name starts with the specified letter will be returned
- **Placeholder**: Add Field

**Options:**

#### First Char
- **Name**: `firstChar`
- **Type**: `string`
- **Default**: `""`
- **Description**: If supplied, only organizations whose name starts with the specified letter will be returned

#### Predefined Filter Name or ID
- **Name**: `filterId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Field

**Options:**

#### Predefined Filter Name or ID
- **Name**: `filterId`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the filter to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### First Char
- **Name**: `firstChar`
- **Type**: `string`
- **Default**: `""`
- **Description**: If supplied, only persons whose name starts with the specified letter will be returned

#### Sort
- **Name**: `sort`
- **Type**: `string`
- **Default**: `""`
- **Description**: The field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).


### Term

- **Name**: `term`
- **Type**: `string`
- **Default**: `""`
- **Description**: The search term to look for. Minimum 2 characters (or 1 if using exact_match).

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether only full exact matches against the given term are returned. It is not case sensitive.
- **Placeholder**: Add Field

**Options:**

#### Exact Match
- **Name**: `exactMatch`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether only full exact matches against the given term are returned. It is not case sensitive.

#### Fields
- **Name**: `fields`
- **Type**: `string`
- **Default**: `""`
- **Description**: A comma-separated string array. The fields to perform the search from. Defaults to all of them.

#### Include Fields
- **Name**: `includeFields`
- **Type**: `string`
- **Default**: `""`
- **Description**: Supports including optional fields in the results which are not provided by default

#### Organization ID
- **Name**: `organizationId`
- **Type**: `string`
- **Default**: `""`
- **Description**: Will filter Deals by the provided Organization ID

#### RAW Data
- **Name**: `rawData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to return the data exactly in the way it got received from the API


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: ID of the deal this note will be associated with
- **Placeholder**: Add Field

**Options:**

#### Deal ID
- **Name**: `deal_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the deal this note will be associated with

#### Lead ID
- **Name**: `lead_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the lead this note will be associated with

#### Organization Name or ID
- **Name**: `org_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the organization this deal will be associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Person ID
- **Name**: `person_id`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: ID of the person this note will be associated with


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether the Activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.
- **Placeholder**: Add Field

**Options:**

#### Done
- **Name**: `done`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether the Activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities.

#### End Date
- **Name**: `end_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Use the Activity due date where you wish to stop fetching Activities from. Insert due date in YYYY-MM-DD format.

#### Predefined Filter Name or ID
- **Name**: `filterId`
- **Type**: `options`
- **Default**: `""`
- **Description**: The ID of the Filter to use (will narrow down results if used together with user_id parameter). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Star Date
- **Name**: `start_date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Use the Activity due date where you wish to begin fetching Activities from. Insert due date in YYYY-MM-DD format.


### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Predefined filter to apply to the deals to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
- **Placeholder**: Add Filter

**Options:**

#### Predefined Filter Name or ID
- **Name**: `filter_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: Predefined filter to apply to the deals to retrieve. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.

#### Stage Name or ID
- **Name**: `stage_id`
- **Type**: `options`
- **Default**: `""`
- **Description**: ID of the stage to filter deals by. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.



## Node Information

- **Node Type**: `n8n-nodes-base.pipedrive`
- **Display Name**: Pipedrive
- **Internal Name**: `pipedrive`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Pipedrive/Pipedrive.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
