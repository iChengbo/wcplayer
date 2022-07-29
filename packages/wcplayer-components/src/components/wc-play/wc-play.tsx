import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-play',
  styleUrl: 'wc-play.css',
  shadow: true,
})
export class WcPlay {

  @Prop() isPlaying: boolean
  @Prop() pauseFunc: () => void
  @Prop() playFunc: () => void

  render() {
    const {
      isPlaying,
      pauseFunc,
      playFunc
    } = this

    return (
      <Host>
        <button onClick={isPlaying ? pauseFunc : playFunc}>{isPlaying ? '暂停' : '播放'}</button>
      </Host>
    );
  }
}
