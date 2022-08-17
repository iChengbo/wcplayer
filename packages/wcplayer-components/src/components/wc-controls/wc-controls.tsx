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
  @Prop() mute: () => void
  @Prop() cancelMute: () => void
  @Prop() changeVolume: (volume: number) => void

  @Prop() nativeVideo: HTMLVideoElement
  @Prop() playerEle: HTMLElement

  @Event({
    eventName: 'seek'
  }) onSeek: EventEmitter

  @Event({
    eventName: 'clickPlayPause'
  }) onClickVideoStatus: EventEmitter

  handleOnSeek = ({ detail: position }) => {
    this.onSeek.emit(position)
  }

  handleOnClickPlayPause = () => {
    this.onClickVideoStatus.emit()
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
          status={this.videoStatus}
          onClick={this.handleOnClickPlayPause}
        ></wc-play-pause>
        <slot></slot>
        <wc-spacer></wc-spacer>
        <wc-picture-in-picture
          nativeVideo={this.nativeVideo}
        ></wc-picture-in-picture>
        <wc-fullscreen ele={this.playerEle}></wc-fullscreen>
      </Host>
    );
  }

}
