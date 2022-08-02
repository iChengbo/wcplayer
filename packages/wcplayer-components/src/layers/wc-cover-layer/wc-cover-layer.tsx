import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-cover-layer',
  styleUrl: 'wc-cover-layer.css',
  shadow: true,
})
export class WcCoverLayer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
