import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-controls',
  styleUrl: 'wc-controls.css',
  shadow: true,
})
export class WcControls {

  @Prop() currentTime: number = 0
  @Prop() duration: number = 0

  @Prop() isPlaying: boolean
  @Prop() isEnded: boolean
  @Prop() pauseFunc: () => void
  @Prop() playFunc: () => void

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
        <wc-play-pause
          isPlaying={this.isPlaying}
          isEnded={this.isEnded}
          playFunc={this.playFunc}
          pauseFunc={this.pauseFunc}
        ></wc-play-pause>
        <slot></slot>
      </Host>
    );
  }

}
