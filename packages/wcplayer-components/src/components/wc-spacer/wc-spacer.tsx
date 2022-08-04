import { Component, Host, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-spacer',
  styleUrl: 'wc-spacer.css',
  shadow: true,
})
export class WcSpacer {

  render() {
    return (
      <Host class={classNames('wc-spacer')}>
        <slot></slot>
      </Host>
    );
  }

}
