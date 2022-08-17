import { Component, Host, h, Prop, State, Watch, Element, Method } from '@stencil/core';
import classNames from 'classnames';
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

  @State() _isMuted: boolean
  @State() _isPlaying: boolean
  @State() _isEnded: boolean
  @State() _volume: number
  @State() _isPictureInPicture: boolean
  @State() _nativeVideo: HTMLVideoElement

  @State() _currentTime = 0
  @State() _duration = 0

  @Watch('muted')
  watchMutedHandler(muted: boolean) {
    this._isMuted = muted
  }

  @Method() async getNativeVideo () {
    this._nativeVideo = await this.wcVideoRef.getNativeVideo()
    return this._nativeVideo
  }

  componentWillLoad() {
    this._isMuted = this.muted
    this._isPlaying = this.autoplay && this.muted
    this._volume = 0.5
  }

  componentDidLoad() {
    this.getNativeVideo()
  }

  _play = async () => {
    await this.wcVideoRef.play()
    this._isPlaying = true
  }

  _pause = async () => {
    await this.wcVideoRef.pause()
    this._isPlaying = false
  }

  handleOnEnded = () => {
    this._isPlaying = false
    this._isEnded = true
  }

  handleTimeUpdate = throttle(() => {
    this._currentTime = this._nativeVideo?.currentTime ?? 0
  }, 250)

  handleDurationChange = throttle(() => {
    this._duration = this._nativeVideo?.duration ?? 0
  }, 250)

  handleOnSeek = ({ detail: position }) => {
    this.wcVideoRef.seek(position)
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
        <wc-layers>
          <wc-play-pause-layer></wc-play-pause-layer>
        </wc-layers>
        {controls && (
          <wc-controls
            // wc-progress
            currentTime={this._currentTime}
            duration={this._duration}
            onSeek={this.handleOnSeek}
            // wc-play-pause
            isPlaying={this._isPlaying}
            isEnded={this._isEnded}
            playFunc={this._play}
            pauseFunc={this._pause}
          >
            <wc-volume
              currentVolume={this._volume}
              mute={() => this._isMuted = true}
              isMuted={this._isMuted}
              cancelMute={() => this._isMuted = false}
              changeVolume={(volume: number) => {
                this._volume = volume
              }}
            ></wc-volume>
            <wc-spacer></wc-spacer>
            <wc-picture-in-picture nativeVideo={this._nativeVideo}></wc-picture-in-picture>
            <wc-fullscreen ele={this.ele}></wc-fullscreen>
          </wc-controls>
        )}
      </Host>
    );
  }

}
