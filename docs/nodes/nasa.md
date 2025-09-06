# NASA

## Description

Retrieve data from the NASA API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: NASA
    parameters:
      resource: "astronomyPictureOfTheDay"
      operation: "get" # Get the Astronomy Picture of the Day
      operation: "get" # Retrieve a list of asteroids based on their closest approach date to Earth
      operation: "get" # Look up an asteroid based on its NASA SPK-ID
      operation: "getAll" # Browse the overall asteroid dataset
      operation: "get" # Retrieve DONKI coronal mass ejection data
      operation: "get" # Retrieve DONKI geomagnetic storm data
      operation: "get" # Retrieve DONKI interplanetary shock data
      operation: "get" # Retrieve DONKI solar flare data
      operation: "get" # Retrieve DONKI solar energetic particle data
      operation: "get" # Retrieve data on DONKI magnetopause crossings
      operation: "get" # Retrieve DONKI radiation belt enhancement data
      operation: "get" # Retrieve DONKI high speed stream data
      operation: "get" # Retrieve DONKI WSA+EnlilSimulation data
      operation: "get" # Retrieve DONKI notifications data
      operation: "get" # Retrieve Earth imagery
      operation: "get" # Retrieve Earth assets
      operation: "get" # Retrieve Insight Mars Weather Service data
      operation: "get" # Retrieve Image and Video Library data
      operation: "get" # Retrieve TechTransfer data
      operation: "get" # Retrieve Two-Line Element Set data
      asteroidId: "" # The ID of the asteroid to be returned
      additionalFields: # Whether to include all the close approach data in the asteroid lookup
        includeCloseApproachData: false # Whether to include all the close approach data in the asteroid lookup
      download: true # By default just the URL of the image is returned. When set to true the image will be downloaded.
      binaryPropertyName: "data"
      additionalFields:
        date: ""
      additionalFields:
        startDate: ""
        endDate: ""
      additionalFields: # The location of the geomagnetic storm
        startDate: ""
        endDate: ""
      lat: "" # Latitude for the location of the image
      lon: "" # Longitude for the location of the image
      binaryPropertyName: "data"
      additionalFields: # Date of the image
        date: "" # Date of the image
        dim: "" # Width and height of the image in degrees
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.nasa
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"astronomyPictureOfTheDay"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get the Astronomy Picture of the Day

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve a list of asteroids based on their closest approach date to Earth

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Look up an asteroid based on its NASA SPK-ID

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getAll"`
- **Description**: Browse the overall asteroid dataset

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI coronal mass ejection data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI geomagnetic storm data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI interplanetary shock data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI solar flare data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI solar energetic particle data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve data on DONKI magnetopause crossings

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI radiation belt enhancement data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI high speed stream data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI WSA+EnlilSimulation data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve DONKI notifications data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve Earth imagery

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve Earth assets

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve Insight Mars Weather Service data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve Image and Video Library data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve TechTransfer data

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Retrieve Two-Line Element Set data

### Asteroid ID

- **Name**: `asteroidId`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of the asteroid to be returned
- **Placeholder**: 3542519

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Whether to include all the close approach data in the asteroid lookup
- **Placeholder**: Add Field

**Options:**

#### Include Close Approach Data
- **Name**: `includeCloseApproachData`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to include all the close approach data in the asteroid lookup


### Download Image

- **Name**: `download`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default just the URL of the image is returned. When set to true the image will be downloaded.

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add field

**Options:**

#### Date
- **Name**: `date`
- **Type**: `dateTime`
- **Default**: `""`


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Placeholder**: Add field

**Options:**

#### Start Date
- **Name**: `startDate`
- **Type**: `dateTime`
- **Default**: `""`

#### End Date
- **Name**: `endDate`
- **Type**: `dateTime`
- **Default**: `""`


### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The location of the geomagnetic storm
- **Placeholder**: Add field

**Options:**

#### Start Date
- **Name**: `startDate`
- **Type**: `dateTime`
- **Default**: `""`

#### End Date
- **Name**: `endDate`
- **Type**: `dateTime`
- **Default**: `""`


### Latitude

- **Name**: `lat`
- **Type**: `number`
- **Default**: `""`
- **Description**: Latitude for the location of the image
- **Placeholder**: 47.751076

### Longitude

- **Name**: `lon`
- **Type**: `number`
- **Default**: `""`
- **Description**: Longitude for the location of the image
- **Placeholder**: -120.740135

### Put Output File in Field

- **Name**: `binaryPropertyName`
- **Type**: `string`
- **Default**: `"data"`

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Date of the image
- **Placeholder**: Add field

**Options:**

#### Date
- **Name**: `date`
- **Type**: `dateTime`
- **Default**: `""`
- **Description**: Date of the image

#### Degrees
- **Name**: `dim`
- **Type**: `number`
- **Default**: `""`
- **Description**: Width and height of the image in degrees


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

- **Node Type**: `n8n-nodes-base.nasa`
- **Display Name**: NASA
- **Internal Name**: `nasa`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nasa/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Nasa/Nasa.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
