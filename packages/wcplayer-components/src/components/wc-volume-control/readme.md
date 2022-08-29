# wc-volume-control



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type      | Default     |
| --------- | ---------- | ----------- | --------- | ----------- |
| `isMuted` | `is-muted` |             | `boolean` | `undefined` |
| `volume`  | `volume`   |             | `number`  | `undefined` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `toggleMute`   |             | `CustomEvent<any>` |
| `volumeChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [wc-controls](../wc-controls)

### Depends on

- [wc-mute-toggle](../wc-mute-toggle)
- [wc-volume](../wc-volume)

### Graph
```mermaid
graph TD;
  wc-volume-control --> wc-mute-toggle
  wc-volume-control --> wc-volume
  wc-controls --> wc-volume-control
  style wc-volume-control fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
