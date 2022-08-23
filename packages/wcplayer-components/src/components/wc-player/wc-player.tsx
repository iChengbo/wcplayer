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

  @State() videoStatus: VideoStatus = VideoStatus.PAUSED
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
      this.videoStatus = VideoStatus.PLAYING
    }
    this._volume = 0.5
  }

  componentDidLoad() {
    this.getNativeVideo()
  }

  _play = async () => {
    await this.wcVideoRef.play()
    this.videoStatus = VideoStatus.PLAYING
  }

  _pause = async () => {
    await this.wcVideoRef.pause()
    this.videoStatus = VideoStatus.PAUSED
  }

  handleOnEnded = () => {
    this.videoStatus = VideoStatus.ENDED
  }

  handleTimeUpdate = throttle(() => {
    this._currentTime = this._nativeVideo?.currentTime ?? 0
  }, 250)

  handleDurationChange = throttle(async () => {
    const nativeVideo = await this.wcVideoRef.getNativeVideo()
    this._duration = nativeVideo?.duration ?? 0
  }, 250)

  handleOnSeek = ({ detail: position }) => {
    this.wcVideoRef.seek(position)
  }

  handleClickPlayToggle = () => {
    if (this.videoStatus === VideoStatus.PLAYING) {
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
            onSeek={this.handleOnSeek}
            // wc-play-pause
            videoStatus={this.videoStatus}
            onClickPlayToggle={this.handleClickPlayToggle}
            // wc-volume
            currentVolume={this._volume}
            isMuted={this._isMuted}
            onClickMuteToggle={this.handleClickMuteToggle}
            onVolumechange={this.handleOnVolumeChange}
            // wc-picture-in-picture
            nativeVideo={this._nativeVideo}
            // wc-fullscreen
            playerElement={this.ele}
          >
          </wc-controls>
        )}
      </Host>
    );
  }

}
