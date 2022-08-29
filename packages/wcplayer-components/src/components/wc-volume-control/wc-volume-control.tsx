import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-volume-control',
  styleUrl: 'wc-volume-control.css',
  shadow: true,
})
export class WcVolumeControl {

  @Prop() volume: number
  @Prop() isMuted: boolean

  @Event({
    eventName: 'toggleMute'
  }) onToggleMute: EventEmitter

  @Event({
    eventName: 'volumeChange'
  }) onVolumeChange: EventEmitter


  handleClickMuteToggle = () => {
    this.onToggleMute.emit()
  }

  handleOnVolumeChange = () => {
    this.onVolumeChange.emit()
  }

  render() {
    return (
      <Host>
        <wc-mute-toggle
          isMuted={this.isMuted}
          onClick={this.handleClickMuteToggle}
        ></wc-mute-toggle>
        <wc-volume
          currentVolume={this.volume}
          isMuted={this.isMuted}
          onVolumechange={this.handleOnVolumeChange}
        ></wc-volume>
      </Host>
    );
  }

}
