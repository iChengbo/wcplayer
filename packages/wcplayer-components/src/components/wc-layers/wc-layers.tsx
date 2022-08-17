import { Component, Host, h, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-layers',
  styleUrl: 'wc-layers.css',
  shadow: true,
})
export class WcLayers {
  private clickTimer

  @Event({
    eventName: 'singleClick'
  }) onSingleClick: EventEmitter

  @Event({
    eventName: 'doubleClick'
  }) onDoubleClick: EventEmitter

  handleOnClick = () => {
    if (this.clickTimer) {
      window.clearTimeout?.(this.clickTimer)
      this.clickTimer = null
    }

    this.clickTimer = window.setTimeout(() => {
      this.onSingleClick.emit()
    }, 200)
  }

  handleOnDblClick = () => {
    if (this.clickTimer) {
      window.clearTimeout?.(this.clickTimer)
      this.clickTimer = null
    }
    this.onDoubleClick.emit()
  }

  render() {
    return (
      <Host class={classNames('wc-layers')}>
        <wc-play-pause-layer
          onClick={this.handleOnClick}
          onDblClick={this.handleOnDblClick}
        ></wc-play-pause-layer>
      </Host>
    );
  }

}
