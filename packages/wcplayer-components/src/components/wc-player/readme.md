# wc-player



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `autoplay` | `autoplay` |             | `boolean` | `false`     |
| `controls` | `controls` |             | `boolean` | `true`      |
| `muted`    | `muted`    |             | `boolean` | `false`     |
| `src`      | `src`      |             | `string`  | `undefined` |


## Methods

### `getNativeVideo() => Promise<HTMLVideoElement>`



#### Returns

Type: `Promise<HTMLVideoElement>`




## Dependencies

### Depends on

- [wc-video](../wc-video)
- [wc-layers](../wc-layers)
- [wc-controls](../wc-controls)

### Graph
```mermaid
graph TD;
  wc-player --> wc-video
  wc-player --> wc-layers
  wc-player --> wc-controls
  wc-layers --> wc-play-pause-layer
  wc-controls --> wc-progress
  wc-controls --> wc-play-toggle
  wc-controls --> wc-volume-control
  wc-controls --> wc-time
  wc-controls --> wc-spacer
  wc-controls --> wc-picture-in-picture-toggle
  wc-controls --> wc-fullscreen-toggle
  wc-volume-control --> wc-mute-toggle
  wc-volume-control --> wc-volume
  style wc-player fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
