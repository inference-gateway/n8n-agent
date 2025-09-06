# Spotify

## Description

Access public song data via the Spotify API

**Version**: 1

## n8n-cli Configuration

Use this node in your n8n workflows with the following type:

```yaml
nodes:
  - id: ${unique-node-id}
    name: Spotify
    parameters:
      resource: "player"
      operation: "addSongToQueue" # Add a song to your queue
      id: "" # Enter a playlist, artist, or album URI or ID
      id: "" # Enter a track URI or ID
      operation: "get" # Get an album by URI or ID
      id: "" # The album's Spotify URI or ID
      query: "" # The keyword term to search for
      operation: "get" # Get an artist by URI or ID
      id: "" # The artist's Spotify URI or ID
      country: "US" # Top tracks in which country? Enter the postal abbreviation
      query: "" # The keyword term to search for
      operation: "add" # Add tracks to a playlist by track and playlist URI or ID
      id: "" # The playlist's Spotify URI or its ID
      name: "" # Name of the playlist to create
      additionalFields: # Description for the playlist to create
        description: "" # Description for the playlist to create
        public: true # Whether the playlist is publicly accessible
      trackID: "" # The track's Spotify URI or its ID. The track to add/delete from the playlist.
      additionalFields: # The new track's position in the playlist
        position: "0" # The new track's position in the playlist
      query: "" # The keyword term to search for
      operation: "track" # Get a track by its URI or ID
      id: "" # The track's Spotify URI or ID
      query: "" # The keyword term to search for
      operation: "getLikedTracks" # Get the user's liked tracks
      operation: "getFollowingArtists" # Get your followed artists
      returnAll: false # Whether to return all results or only up to a given limit
      limit: "50" # Max number of results to return
      limit: "50" # Max number of results to return
      volumePercent: "50" # The volume percentage to set
      filters: # Country to filter new releases by
        country: "US" # Country to filter new releases by
      filters: # If a country code is specified, only content that is playable in that market is returned
        market: "" # If a country code is specified, only content that is playable in that market is returned
    position: [x, y]  # Canvas position coordinates
    type: n8n-nodes-base.spotify
```

## Parameters

### Resource

- **Name**: `resource`
- **Type**: `options`
- **Default**: `"player"`

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"addSongToQueue"`
- **Description**: Add a song to your queue

### Resource ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: Enter a playlist, artist, or album URI or ID
- **Placeholder**: spotify:album:1YZ3k65Mqw3G8FzYlW1mmp

### Track ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: Enter a track URI or ID
- **Placeholder**: spotify:track:0xE4LEFzSNGsz1F6kvXsHU

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get an album by URI or ID

### Album ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The album's Spotify URI or ID
- **Placeholder**: spotify:album:1YZ3k65Mqw3G8FzYlW1mmp

### Search Keyword

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The keyword term to search for

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"get"`
- **Description**: Get an artist by URI or ID

### Artist ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The artist's Spotify URI or ID
- **Placeholder**: spotify:artist:4LLpKhyESsyAXpc4laK94U

### Country

- **Name**: `country`
- **Type**: `string`
- **Default**: `"US"`
- **Description**: Top tracks in which country? Enter the postal abbreviation
- **Placeholder**: US

### Search Keyword

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The keyword term to search for

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"add"`
- **Description**: Add tracks to a playlist by track and playlist URI or ID

### Playlist ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The playlist's Spotify URI or its ID
- **Placeholder**: spotify:playlist:37i9dQZF1DWUhI3iC1khPH

### Name

- **Name**: `name`
- **Type**: `string`
- **Default**: `""`
- **Description**: Name of the playlist to create
- **Placeholder**: Favorite Songs

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Description for the playlist to create
- **Placeholder**: Add Field

**Options:**

#### Description
- **Name**: `description`
- **Type**: `string`
- **Default**: `""`
- **Description**: Description for the playlist to create

#### Public
- **Name**: `public`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether the playlist is publicly accessible


### Track ID

- **Name**: `trackID`
- **Type**: `string`
- **Default**: `""`
- **Description**: The track's Spotify URI or its ID. The track to add/delete from the playlist.
- **Placeholder**: spotify:track:0xE4LEFzSNGsz1F6kvXsHU

### Additional Fields

- **Name**: `additionalFields`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: The new track's position in the playlist
- **Placeholder**: Add Field

**Options:**

#### Position
- **Name**: `position`
- **Type**: `number`
- **Default**: `"0"`
- **Description**: The new track's position in the playlist


### Search Keyword

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The keyword term to search for

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"track"`
- **Description**: Get a track by its URI or ID

### Track ID

- **Name**: `id`
- **Type**: `string`
- **Default**: `""`
- **Description**: The track's Spotify URI or ID
- **Placeholder**: spotify:track:0xE4LEFzSNGsz1F6kvXsHU

### Search Keyword

- **Name**: `query`
- **Type**: `string`
- **Default**: `""`
- **Description**: The keyword term to search for

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getLikedTracks"`
- **Description**: Get the user's liked tracks

### Operation

- **Name**: `operation`
- **Type**: `options`
- **Default**: `"getFollowingArtists"`
- **Description**: Get your followed artists

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

### Limit

- **Name**: `limit`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: Max number of results to return

### Volume

- **Name**: `volumePercent`
- **Type**: `number`
- **Default**: `"50"`
- **Description**: The volume percentage to set

### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: Country to filter new releases by
- **Placeholder**: Add Filter

**Options:**

#### Country
- **Name**: `country`
- **Type**: `options`
- **Default**: `"US"`
- **Description**: Country to filter new releases by


### Filters

- **Name**: `filters`
- **Type**: `collection`
- **Default**: `"{}"`
- **Description**: If a country code is specified, only content that is playable in that market is returned
- **Placeholder**: Add Filter

**Options:**

#### Country
- **Name**: `market`
- **Type**: `options`
- **Default**: `""`
- **Description**: If a country code is specified, only content that is playable in that market is returned



## Node Information

- **Node Type**: `n8n-nodes-base.spotify`
- **Display Name**: Spotify
- **Internal Name**: `spotify`
- **Package**: `n8n-nodes-base`
- **Category**: Based on file location in n8n repository

## Resources

- [Official N8N Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.spotify/) - Complete parameter reference
- [Source Code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Spotify/Spotify.node.ts) - TypeScript implementation
- [n8n-cli Documentation](https://github.com/edenreich/n8n-cli) - Workflow configuration format

---
*Generated automatically from n8n 1 source code*
