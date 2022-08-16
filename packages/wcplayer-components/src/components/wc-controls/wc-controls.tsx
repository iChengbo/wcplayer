import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-controls',
  styleUrl: 'wc-controls.css',
  shadow: true,
})
export class WcControls {

  @Prop() currentTime: number = 0
  @Prop() duration: number = 0

  @Event({
    eventName: 'seek'
  }) onSeek: EventEmitter

  handleOnSeek = ({ detail: position }) => {
    this.onSeek.emit(position)
  }

  render() {
    return (
      <Host>
        <wc-progress
          currentTime={this.currentTime}
          duration={this.duration}
          onSeek={this.handleOnSeek}
        ></wc-progress>
        <slot></slot>
      </Host>
    );
  }

}
