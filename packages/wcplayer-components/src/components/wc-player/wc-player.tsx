import { Component, Host, h, Prop, State, Watch, Element, Method } from '@stencil/core';
import classNames from 'classnames';

import { VideoStatus } from '../../constants';
import { throttle } from '../../utils/utils';

@Component({
  tag: 'wc-player',
  styleUrl: 'wc-player.css',
  shadow: true,
})
export class WcPlayer {

  private wcVideoRef: HTMLWcVideoElement

  @Element() ele: HTMLElement

  @Prop() src: string
  @Prop() controls = true
  @Prop() autoplay = false
  @Prop() muted = false

  @State() _videoStatus: VideoStatus = VideoStatus.PAUSED
  @State() _isMuted: boolean
  @State() _volume: number
  @State() _isPictureInPicture: boolean
  @State() _nativeVideo: HTMLVideoElement

  @State() _currentTime = 0
  @State() _duration = 0

  @Watch('muted')
  watchMutedHandler(muted: boolean) {
    this._isMuted = muted
  }

  @Method() async getNativeVideo() {
    this._nativeVideo = await this.wcVideoRef.getNativeVideo()
    return this._nativeVideo
  }

  componentWillLoad() {
    this._isMuted = this.muted
    if (this.autoplay && this.muted) {
      this._videoStatus = VideoStatus.PLAYING
    }
    this._volume = 0.5
  }

  componentDidLoad() {
    this.getNativeVideo()
  }

  _play = async () => {
    await this.wcVideoRef.play()
    this._videoStatus = VideoStatus.PLAYING
  }

  _pause = async () => {
    await this.wcVideoRef.pause()
    this._videoStatus = VideoStatus.PAUSED
  }

  handleOnEnded = () => {
    this._videoStatus = VideoStatus.ENDED
  }

  handleTimeUpdate = throttle(() => {
    this._currentTime = this._nativeVideo?.currentTime ?? 0
  }, 250)

  handleDurationChange = throttle(async () => {
    const nativeVideo = await this.wcVideoRef.getNativeVideo()
    this._duration = nativeVideo?.duration ?? 0
  }, 250)

  handleOnSeeking = async () => {
    await this._pause()
  }

  handleOnSeeked = async ({ detail: position }) => {
    this.wcVideoRef.seek(position)
    await this._play()
  }

  handleClickPlayToggle = () => {
    if (this._videoStatus === VideoStatus.PLAYING) {
      this._pause()
    } else {
      this._play()
    }
  }

  handleClickMuteToggle = () => {
    this._isMuted = !this._isMuted
  }

  handleOnVolumeChange = ({detail: volume}) => {
    this._volume = volume
    if (volume === 0) {
      this._isMuted = true
    } else {
      this._isMuted = false
    }
  }

  render() {
    const {
      src,
      autoplay,
      controls,
    } = this

    return (
      <Host class={classNames('wc-player')}>
        <wc-video
          ref={dom => {
            if (dom) {
              this.wcVideoRef = dom
            }
          }}
          src={src}
          autoplay={autoplay}
          muted={this._isMuted}
          controls={false}
          volume={this._volume}
          onEnded={this.handleOnEnded}
          onTimeupdate={this.handleTimeUpdate}
          onDurationchange={this.handleDurationChange}
        ></wc-video>
        <wc-layers
          onSingleClick={this.handleClickPlayToggle}
          onDoubleClick={() => {
            console.log('double click')
          }}
        ></wc-layers>
        {controls && (
          <wc-controls
            // wc-progress
            currentTime={this._currentTime}
            duration={this._duration}
            onSeeking={this.handleOnSeeking}
            onSeeked={this.handleOnSeeked}
            // onSeek={this.handleOnSeek}
            // wc-play-toggle
            videoStatus={this._videoStatus}
            onTogglePlay={this.handleClickPlayToggle}
            // wc-volume-control
            currentVolume={this._volume}
            isMuted={this._isMuted}
            onToggleMute={this.handleClickMuteToggle}
            onVolumechange={this.handleOnVolumeChange}
            // wc-picture-in-picture-toggle
            nativeVideo={this._nativeVideo}
            // wc-fullscreen
            playerElement={this.ele}
          >
            <div slot="before-left">
              <slot name='before-left'></slot>
            </div>
            <div slot="after-left">
              <slot name="after-left"></slot>
            </div>
            <div slot="before-right">
              <slot name="before-right"></slot>
            </div>
            <div slot="after-right">
              <slot name="after-right"></slot>
            </div>
          </wc-controls>
        )}
      </Host>
    );
  }

}
