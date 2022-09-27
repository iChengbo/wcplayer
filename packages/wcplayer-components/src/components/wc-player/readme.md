# wc-player



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `autoplay` | `autoplay` |             | `boolean` | `false`     |
| `controls` | `controls` |             | `boolean` | `true`      |
| `muted`    | `muted`    |             | `boolean` | `false`     |
| `poster`   | `poster`   |             | `string`  | `undefined` |
| `src`      | `src`      |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [wc-controls](../wc-controls)

### Graph
```mermaid
graph TD;
  wc-player --> wc-controls
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
