# wc-volume



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                       | Default     |
| --------------- | ---------------- | ----------- | -------------------------- | ----------- |
| `cancelMute`    | --               |             | `() => void`               | `undefined` |
| `changeVolume`  | --               |             | `(volume: number) => void` | `undefined` |
| `currentVolume` | `current-volume` |             | `number`                   | `undefined` |
| `isMuted`       | `is-muted`       |             | `boolean`                  | `undefined` |
| `mute`          | --               |             | `() => void`               | `undefined` |


## Dependencies

### Used by

 - [wc-player](../../players/wc-player)

### Graph
```mermaid
graph TD;
  wc-player --> wc-volume
  style wc-volume fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
