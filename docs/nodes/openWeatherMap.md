# OpenWeatherMap

## Description

Gets current and future weather information

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenWeatherMap
    parameters:
      operation: "currentWeather" # Returns the current weather data
      format: "metric" # Fahrenheit | miles/hour
      locationSelection: "cityName" # How to define the location for which to return the weather
      cityName: "" # The name of the city to return the weather of
      cityId: "160001123" # The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
      latitude: "" # The latitude of the location to return the weather of
      longitude: "" # The longitude of the location to return the weather of
      zipCode: "" # The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
      language: "" # The two letter language code to get your output in (eg. en, de, ...).
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.openWeatherMap
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"currentWeather"`
- **Description**: Returns the current weather data

### Format

- **Name**: `format`
- **Type**: `options`
- **Default**: `"metric"`
- **Description**: Fahrenheit | miles/hour

### Location Selection

- **Name**: `locationSelection`
- **Type**: `options`
- **Default**: `"cityName"`
- **Description**: How to define the location for which to return the weather

### City

- **Name**: `cityName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the city to return the weather of
- **Placeholder**: berlin,de

### City ID

- **Name**: `cityId`
- **Type**: `number`
- **Default**: `"160001123"`
- **Description**: The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.

### Latitude

- **Name**: `latitude`
- **Type**: `string`
- **Default**: `""`
- **Description**: The latitude of the location to return the weather of
- **Placeholder**: 13.39

### Longitude

- **Name**: `longitude`
- **Type**: `string`
- **Default**: `""`
- **Description**: The longitude of the location to return the weather of
- **Placeholder**: 52.52

### Zip Code

- **Name**: `zipCode`
- **Type**: `string`
- **Default**: `""`
- **Description**: The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
- **Placeholder**: 10115,de

### Language

- **Name**: `language`
- **Type**: `string`
- **Default**: `""`
- **Description**: The two letter language code to get your output in (eg. en, de, ...).
- **Placeholder**: en


## Node Information

- **Node Type**: `n8n-nodes-base.openWeatherMap`
- **Display Name**: OpenWeatherMap
- **Internal Name**: `openWeatherMap`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openweathermap/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/OpenWeatherMap/OpenWeatherMap.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
