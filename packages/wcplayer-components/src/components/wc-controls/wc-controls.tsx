import { Component, Host, h, Prop, State } from '@stencil/core';
import { VideoStatus } from '../../constants';
import { throttle } from '../../utils/utils';

@Component({
  tag: 'wc-controls',
  styleUrl: 'wc-controls.css',
  shadow: true,
})
export class WcControls {

  @Prop() getNativeVideo: () => HTMLVideoElement
  @Prop() getPlayerElement: () => HTMLElement

  @State() _currentTime: number
  @State() _duration: number
  @State() _status: VideoStatus
  @State() _muted: boolean
  @State() _volume: number

  handleTimeupdate = throttle(() => {
    this._currentTime = this.getNativeVideo().currentTime ?? 0
  }, 250)

  handleDurationchange = () => {
    this._duration = this.getNativeVideo().duration ?? 0
  }

  handlePlaying = () => {
    this._status = VideoStatus.PLAYING
  }

  handlePause = () => {
    this._status = VideoStatus.PAUSED
  }

  handleEnded = () => {
    this._status = VideoStatus.ENDED
  }

  handleWaiting = () => {
    this._status = VideoStatus.WAITING
  }

  componentWillLoad() {
    const nativeVideo = this.getNativeVideo()
    this._currentTime = nativeVideo.currentTime
    this._duration = nativeVideo.duration
    this._muted = nativeVideo.muted
    this._volume = 0.5

    nativeVideo.addEventListener('playing', this.handlePlaying)
    nativeVideo.addEventListener('pause', this.handlePause)
    nativeVideo.addEventListener('ended', this.handleEnded)
    nativeVideo.addEventListener('waiting', this.handleWaiting)
    nativeVideo.addEventListener('timeupdate', this.handleTimeupdate)
    nativeVideo.addEventListener('durationchange', this.handleDurationchange)
  }

  disconnectedCallback() {
    const nativeVideo = this.getNativeVideo()
    nativeVideo.removeEventListener('playing', this.handlePlaying)
    nativeVideo.removeEventListener('pause', this.handlePause)
    nativeVideo.removeEventListener('ended', this.handleEnded)
    nativeVideo.removeEventListener('waiting', this.handleWaiting)
    nativeVideo.removeEventListener('timeupdate', this.handleTimeupdate)
    nativeVideo.removeEventListener('durationchange', this.handleDurationchange)
  }

  handleSeeking = () => {
    this.getNativeVideo().pause()
  }

  handleSeeked = async ({ detail: position }) => {
    this.getNativeVideo().currentTime = position
    await this.getNativeVideo().play()
  }

  handleClickPlayToggle = async () => {
    if (this._status === VideoStatus.PLAYING || this._status === VideoStatus.WAITING) {
      this.getNativeVideo().pause()
    } else if (this._status === VideoStatus.PAUSED || this._status === VideoStatus.ENDED) {
      await this.getNativeVideo().play()
    } else {
      console.warn('xxx')
    }
  }

  handleClickMuteToggle = () => {
    this._muted = !this._muted
    this.getNativeVideo().muted = this._muted
  }

  handleOnVolumeChange = ({ detail: volume }) => {
    this._volume = volume
    this._muted = volume === 0
    this.getNativeVideo().volume = volume
    this.getNativeVideo().muted = this._muted
  }

  render() {
    return (
      <Host>
        <wc-progress
          currentTime={this._currentTime}
          duration={this._duration}
          onSeeking={this.handleSeeking}
          onSeeked={this.handleSeeked}
        ></wc-progress>
        <slot name="before-left"/>
        <wc-play-toggle
          status={this._status}
          onClick={this.handleClickPlayToggle}
        ></wc-play-toggle>
        <wc-volume-control
          isMuted={this._muted}
          onToggleMute={this.handleClickMuteToggle}
          volume={this._volume}
          onVolumeChange={this.handleOnVolumeChange}
        ></wc-volume-control>
        <wc-time
          currentTime={this._currentTime}
          duration={this._duration}
        ></wc-time>
        <slot name="after-left"/>
        <wc-spacer></wc-spacer>
         <slot name="before-right"/>
        <wc-picture-in-picture-toggle
           nativeVideo={this.getNativeVideo()}
         ></wc-picture-in-picture-toggle>
         <wc-fullscreen-toggle
           target={this.getPlayerElement()}
         ></wc-fullscreen-toggle>
         <slot name="after-right"/>
      </Host>
    )
  }

}
