import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-controls',
  styleUrl: 'wc-controls.css',
  shadow: true,
})
export class WcControls {

  // @Prop() isPlaying: boolean
  // @Prop() pauseFunc: () => void
  // @Prop() playFunc: () => void

  render() {
    // const {
    //   isPlaying,
    //   pauseFunc,
    //   playFunc,
    // } = this
    return (
      <Host>
        {/* <wc-play-pause
          isPlaying={isPlaying}
          playFunc={playFunc}
          pauseFunc={pauseFunc}
        ></wc-play-pause> */}
        <slot></slot>
      </Host>
    );
  }

}
