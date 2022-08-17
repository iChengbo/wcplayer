# wc-controls



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type         | Default     |
| ------------- | -------------- | ----------- | ------------ | ----------- |
| `currentTime` | `current-time` |             | `number`     | `0`         |
| `duration`    | `duration`     |             | `number`     | `0`         |
| `isEnded`     | `is-ended`     |             | `boolean`    | `undefined` |
| `isPlaying`   | `is-playing`   |             | `boolean`    | `undefined` |
| `pauseFunc`   | --             |             | `() => void` | `undefined` |
| `playFunc`    | --             |             | `() => void` | `undefined` |


## Events

| Event  | Description | Type               |
| ------ | ----------- | ------------------ |
| `seek` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [wc-player](../wc-player)

### Depends on

- [wc-progress](../wc-progress)
- [wc-play-pause](../wc-play-pause)

### Graph
```mermaid
graph TD;
  wc-controls --> wc-progress
  wc-controls --> wc-play-pause
  wc-player --> wc-controls
  style wc-controls fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
