import { Component, Host, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-layers',
  styleUrl: 'wc-layers.css',
  shadow: true,
})
export class WcLayers {

  render() {
    return (
      <Host class={classNames('wc-layers')}>
        <wc-play-pause-layer></wc-play-pause-layer>
      </Host>
    );
  }

}
