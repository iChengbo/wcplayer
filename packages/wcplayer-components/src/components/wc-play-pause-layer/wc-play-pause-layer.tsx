import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-play-pause-layer',
  styleUrl: 'wc-play-pause-layer.css',
  shadow: true,
})
export class WcPlayPauseLayer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
