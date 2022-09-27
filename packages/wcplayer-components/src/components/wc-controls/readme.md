# wc-controls



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type                     | Default     |
| ------------------ | --------- | ----------- | ------------------------ | ----------- |
| `getNativeVideo`   | --        |             | `() => HTMLVideoElement` | `undefined` |
| `getPlayerElement` | --        |             | `() => HTMLElement`      | `undefined` |


## Dependencies

### Used by

 - [wc-player](../wc-player)

### Depends on

- [wc-progress](../wc-progress)
- [wc-play-toggle](../wc-play-toggle)
- [wc-volume-control](../wc-volume-control)
- [wc-time](../wc-time)
- [wc-spacer](../wc-spacer)
- [wc-picture-in-picture-toggle](../wc-picture-in-picture-toggle)
- [wc-fullscreen-toggle](../wc-fullscreen-toggle)

### Graph
```mermaid
graph TD;
  wc-controls --> wc-progress
  wc-controls --> wc-play-toggle
  wc-controls --> wc-volume-control
  wc-controls --> wc-time
  wc-controls --> wc-spacer
  wc-controls --> wc-picture-in-picture-toggle
  wc-controls --> wc-fullscreen-toggle
  wc-volume-control --> wc-mute-toggle
  wc-volume-control --> wc-volume
  wc-player --> wc-controls
  style wc-controls fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
