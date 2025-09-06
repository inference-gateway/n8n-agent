# AWS Transcribe

## Description

Sends data to AWS Transcribe

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: AWS Transcribe
    parameters:
      resource: "transcriptionJob"
      operation: "create" # Create a transcription job
      transcriptionJobName: "" # The name of the job
      mediaFileUri: "" # The S3 object location of the input media file
      detectLanguage: false # Whether to set this field to true to enable automatic language identification
      languageCode: "en-US" # Language used in the input media file
      options: # Instructs Amazon Transcribe to process each audiochannel separately and then merge the transcription output of each channel into a single transcription. You can't set both Max Speaker Labels and Channel Identification in the same request. If you set both, your request returns a BadRequestException.
        channelIdentification: false # Instructs Amazon Transcribe to process each audiochannel separately and then merge the transcription output of each channel into a single transcription. You can't set both Max Speaker Labels and Channel Identification in the same request. If you set both, your request returns a BadRequestException.
        maxAlternatives: "2" # The number of alternative transcriptions that the service should return
        maxSpeakerLabels: "2" # The maximum number of speakers to identify in the input audio. If there are more speakers in the audio than this number, multiple speakers are identified as a single speaker.
        vocabularyName: "" # Name of vocabulary to use when processing the transcription job
        vocabularyFilterName: "" # The name of the vocabulary filter to use when transcribing the audio. The filter that you specify must have the same language code as the transcription job.
      returnTranscript: true # By default, the response only contains metadata about the transcript. Enable this option to retrieve the transcript instead.
      simple: true # Whether to return a simplified version of the response instead of the raw data
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "20" # Max number of results to return
      filters: # Return only transcription jobs whose name contains the specified string
        jobNameContains: "" # Return only transcription jobs whose name contains the specified string
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.awsTranscribe
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"transcriptionJob"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"create"`
- **Description**: Create a transcription job

### Job Name

- **Name**: `transcriptionJobName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the job

### Media File URI

- **Name**: `mediaFileUri`
- **Type**: `string`
- **Default**: `""`
- **Description**: The S3 object location of the input media file

### Detect Language

- **Name**: `detectLanguage`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether to set this field to true to enable automatic language identification

### Language

- **Name**: `languageCode`
- **Type**: `options`
- **Default**: `"en-US"`
- **Description**: Language used in the input media file

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Instructs Amazon Transcribe to process each audiochannel separately and then merge the transcription output of each channel into a single transcription. You can't set both Max Speaker Labels and Channel Identification in the same request. If you set both, your request returns a BadRequestException.
- **Placeholder**: Add option

**Options:**

#### Channel Identification
- **Name**: `channelIdentification`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Instructs Amazon Transcribe to process each audiochannel separately and then merge the transcription output of each channel into a single transcription. You can't set both Max Speaker Labels and Channel Identification in the same request. If you set both, your request returns a BadRequestException.

#### Max Alternatives
- **Name**: `maxAlternatives`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: The number of alternative transcriptions that the service should return

#### Max Speaker Labels
- **Name**: `maxSpeakerLabels`
- **Type**: `number`
- **Default**: `"2"`
- **Description**: The maximum number of speakers to identify in the input audio. If there are more speakers in the audio than this number, multiple speakers are identified as a single speaker.

#### Vocabulary Name
- **Name**: `vocabularyName`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of vocabulary to use when processing the transcription job

#### Vocabulary Filter Name
- **Name**: `vocabularyFilterName`
- **Type**: `string`
- **Default**: `""`
- **Description**: The name of the vocabulary filter to use when transcribing the audio. The filter that you specify must have the same language code as the transcription job.


### Return Transcript

- **Name**: `returnTranscript`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: By default, the response only contains metadata about the transcript. Enable this option to retrieve the transcript instead.

### Simplify

- **Name**: `simple`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to return a simplified version of the response instead of the raw data

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

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Return only transcription jobs whose name contains the specified string
- **Placeholder**: Add Filter

**Options:**

#### Job Name Contains
- **Name**: `jobNameContains`
- **Type**: `string`
- **Default**: `""`
- **Description**: Return only transcription jobs whose name contains the specified string



## Node Information

- **Node Type**: `n8n-nodes-base.awsTranscribe`
- **Display Name**: AWS Transcribe
- **Internal Name**: `awsTranscribe`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awstranscribe/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Aws/Transcribe/AwsTranscribe.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
