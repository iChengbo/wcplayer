import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { VideoStatus } from '../../constants';

@Component({
  tag: 'wc-controls',
  styleUrl: 'wc-controls.css',
  shadow: true,
})
export class WcControls {

  @Prop() currentTime: number = 0
  @Prop() duration: number = 0

  @Prop() videoStatus: VideoStatus

  @Prop() currentVolume: number
  @Prop() isMuted: boolean

  @Prop() nativeVideo: HTMLVideoElement
  @Prop() playerElement: HTMLElement

  @Event({
    eventName: 'seek'
  }) onSeek: EventEmitter

  @Event({
    eventName: 'clickPlayToggle'
  }) onClickPlayToggle: EventEmitter

  @Event({
    eventName: 'clickMuteToggle',
  }) onClickMuteToggle: EventEmitter

  @Event({
    eventName: 'volumechange'
  }) onVolumechange: EventEmitter

  handleOnSeek = ({ detail: position }) => {
    this.onSeek.emit(position)
  }

  handleClickPlayToggle = () => {
    this.onClickPlayToggle.emit()
  }

  handleClickMuteToggle = () => {
    this.onClickMuteToggle.emit()
  }
  handleOnVolumeChange = () => {
    this.onVolumechange.emit()
  }

  render() {
    return (
      <Host>
        <wc-progress
          currentTime={this.currentTime}
          duration={this.duration}
          onSeek={this.handleOnSeek}
        ></wc-progress>
        <slot name="before-left"/>
        <wc-play-toggle
          status={this.videoStatus}
          onClick={this.handleClickPlayToggle}
        ></wc-play-toggle>
        <wc-volume-control
          isMuted={this.isMuted}
          onToggleMute={this.handleClickMuteToggle}
          volume={this.currentVolume}
          onVolumeChange={this.handleOnVolumeChange}
        ></wc-volume-control>
        <slot name="after-left"/>
        <wc-spacer></wc-spacer>
        <slot name="before-right"/>
        <wc-picture-in-picture-toggle
          nativeVideo={this.nativeVideo}
        ></wc-picture-in-picture-toggle>
        <wc-fullscreen-toggle
          target={this.playerElement}
        ></wc-fullscreen-toggle>
        <slot name="after-right"/>
      </Host>
    );
  }

}
