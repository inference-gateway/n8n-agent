# QuickChart

## Description

Create a chart via QuickChart

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: QuickChart
    parameters:
      chartType: "bar" # The type of chart to create
      labelsMode: "manually"
      labelsUi: {} # Labels to use in the chart
      labelsArray: "" # The array of labels to be used in the chart
      data: "" # Data to use for the dataset, documentation and examples <a href="https://quickchart.io/documentation/chart-types/" target="_blank">here</a>
      output: "data" # The binary data will be displayed in the Output panel on the right, under the Binary tab
      chartOptions: # Background color of the chart
        backgroundColor: "" # Background color of the chart
        devicePixelRatio: "2" # Pixel ratio of the chart
      datasetOptions: # Color used for the background the dataset (area of a line graph, fill of a bar chart, etc.)
        backgroundColor: "" # Color used for the background the dataset (area of a line graph, fill of a bar chart, etc.)
        borderColor: "" # Color used for lines of the dataset
        fill: true # Whether to fill area of the dataset
        label: "" # The label of the dataset
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.quickChart
```

## Parameters

### Chart Type

- **Name**: `chartType`
- **Type**: `options`
- **Default**: `"bar"`
- **Description**: The type of chart to create

### Add Labels

- **Name**: `labelsMode`
- **Type**: `options`
- **Default**: `"manually"`

### Labels

- **Name**: `labelsUi`
- **Type**: `fixedCollection`
- **Default**: `"{}"`
- **Description**: Labels to use in the chart
- **Placeholder**: Add Label

### Labels Array

- **Name**: `labelsArray`
- **Type**: `string`
- **Default**: `""`
- **Description**: The array of labels to be used in the chart
- **Placeholder**: e.g. ["Berlin", "Paris", "Rome", "New York"]

### Data

- **Name**: `data`
- **Type**: `json`
- **Default**: `""`
- **Description**: Data to use for the dataset, documentation and examples <a href="https://quickchart.io/documentation/chart-types/" target="_blank">here</a>
- **Placeholder**: e.g. [60, 10, 12, 20]

### Put Output In Field

- **Name**: `output`
- **Type**: `string`
- **Default**: `"data"`
- **Description**: The binary data will be displayed in the Output panel on the right, under the Binary tab

### Chart Options

- **Name**: `chartOptions`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Background color of the chart
- **Placeholder**: Add option

**Options:**

#### Background Color
- **Name**: `backgroundColor`
- **Type**: `color`
- **Default**: `""`
- **Description**: Background color of the chart

#### Device Pixel Ratio
- **Name**: `devicePixelRatio`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: Pixel ratio of the chart


### Dataset Options

- **Name**: `datasetOptions`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Color used for the background the dataset (area of a line graph, fill of a bar chart, etc.)
- **Placeholder**: Add option

**Options:**

#### Background Color
- **Name**: `backgroundColor`
- **Type**: `color`
- **Default**: `""`
- **Description**: Color used for the background the dataset (area of a line graph, fill of a bar chart, etc.)

#### Border Color
- **Name**: `borderColor`
- **Type**: `color`
- **Default**: `""`
- **Description**: Color used for lines of the dataset

#### Fill
- **Name**: `fill`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to fill area of the dataset

#### Label
- **Name**: `label`
- **Type**: `string`
- **Default**: `""`
- **Description**: The label of the dataset



## Node Information

- **Node Type**: `n8n-nodes-base.quickChart`
- **Display Name**: QuickChart
- **Internal Name**: `quickChart`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickchart/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/QuickChart/QuickChart.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
