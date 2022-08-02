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
- [wc-play-pause-layer](../wc-play-pause-layer)
- [wc-controls](../wc-controls)
- [wc-play-pause](../wc-play-pause)
- [wc-volume](../wc-volume)
- [wc-picture-in-picture](../wc-picture-in-picture)
- [wc-fullscreen](../wc-fullscreen)

### Graph
```mermaid
graph TD;
  wc-player --> wc-video
  wc-player --> wc-layers
  wc-player --> wc-play-pause-layer
  wc-player --> wc-controls
  wc-player --> wc-play-pause
  wc-player --> wc-volume
  wc-player --> wc-picture-in-picture
  wc-player --> wc-fullscreen
  wc-layers --> wc-play-pause-layer
  style wc-player fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
