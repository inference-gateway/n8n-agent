# OpenThesaurus

## Description

Get synonmns for German words using the OpenThesaurus API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: OpenThesaurus
    parameters:
      operation: "getSynonyms" # Get synonyms for a German word in German
      text: "" # The word to get synonyms for
      options: # Specifies the basic form for the search term if it is not already a basic form
        baseform: false # Specifies the basic form for the search term if it is not already a basic form
        similar: false # This also returns up to five similarly written words for each answer. This is useful to be able to make a suggestion to the user in the event of a possible typing error.
        startswith: false # Like substring = true, but only finds words that begin with the specified search term
        substring: false # Whether up to ten words are returned for each answer that only contain the search term as a partial word
        substringFromResults: "0" # Specifies from which entry the partial word hits are to be returned. Only works together with substring = true.
        substringMaxResults: "10" # Specifies how many partial word hits should be returned in total. Only works together with substring = true.
        subsynsets: false # Whether each synonym group has its (optional) sub-terms supplied
        supersynsets: false # Whether each synonym group is supplied with its (optional) generic terms
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.openThesaurus
```

## Parameters

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getSynonyms"`
- **Description**: Get synonyms for a German word in German

### Text

- **Name**: `text`
- **Type**: `string`
- **Default**: `""`
- **Description**: The word to get synonyms for

### Options

- **Name**: `options`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Specifies the basic form for the search term if it is not already a basic form
- **Placeholder**: Add option

**Options:**

#### Baseform
- **Name**: `baseform`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Specifies the basic form for the search term if it is not already a basic form

#### Similar
- **Name**: `similar`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: This also returns up to five similarly written words for each answer. This is useful to be able to make a suggestion to the user in the event of a possible typing error.

#### Starts With
- **Name**: `startswith`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Like substring = true, but only finds words that begin with the specified search term

#### Substring
- **Name**: `substring`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether up to ten words are returned for each answer that only contain the search term as a partial word

#### Substring From Results
- **Name**: `substringFromResults`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: Specifies from which entry the partial word hits are to be returned. Only works together with substring = true.

#### Substring Max Results
- **Name**: `substringMaxResults`
- **Type**: `number`
- **Default**: `"10"`
- **Description**: Specifies how many partial word hits should be returned in total. Only works together with substring = true.

#### Subsynsets
- **Name**: `subsynsets`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether each synonym group has its (optional) sub-terms supplied

#### Supersynsets
- **Name**: `supersynsets`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Whether each synonym group is supplied with its (optional) generic terms



## Node Information

- **Node Type**: `n8n-nodes-base.openThesaurus`
- **Display Name**: OpenThesaurus
- **Internal Name**: `openThesaurus`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.openthesaurus/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/OpenThesaurus/OpenThesaurus.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
