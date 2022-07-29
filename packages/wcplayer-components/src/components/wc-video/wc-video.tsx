import { Component, Host, h, Prop, Method, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';

import { throttle } from '../../utils/utils';
import { Engine } from './engine';

@Component({
  tag: 'wc-video',
  styleUrl: 'wc-video.css',
  shadow: true,
})
export class WcVideo {
  private videoRef: HTMLVideoElement

  @Prop() autoplay = false
  @Prop() controls = true
  @Prop() loop = false
  @Prop() muted = false
  @Prop() poster: string
  @Prop() src: string

  @Prop() nativeProps = {}

  @Event({
    eventName: 'play'
  }) onPlay: EventEmitter

  @Event({
    eventName: 'pause'
  }) onPause: EventEmitter

  @Event({
    eventName: 'ended'
  }) onEnded: EventEmitter

  @Event({
    eventName: 'timeupdate'
  }) onTimeUpdate: EventEmitter

  @Event({
    eventName: 'durationchange'
  }) onDurationchange: EventEmitter

  @Event({
    eventName: 'volumechange'
  }) onVolumechange: EventEmitter


  @Method() async play() {
    this._play()
  }
  _play = () => this.videoRef.play()

  @Method() async pause() {
    this._pause()
  }
  _pause = () => this.videoRef.pause()

  @Method() async stop() {
    this._stop()
  }
  _stop = () => {
    this.videoRef.pause()
    this._seek(0)
  }

  @Method() async seek(position: number) {
    this._seek(position)
  }

  _seek = (position: number) => {
    this.videoRef.currentTime = position
  }

  componentDidLoad() {
    this.initialize()
  }

  initialize = () => {
    const { src, videoRef } = this

    const engine = new Engine({
      src,
      type: 'HLS',
    }, videoRef)

    engine.hls.on(engine.Events.MANIFEST_PARSED, async () => {
      if (this.autoplay) {
        await this._play()
      }
    })
  }

  handlePlay = () => {
    this.onPlay.emit()
  }

  handlePause = () => {
    this.onPause.emit()
  }

  handleEnded = () => {
    this.pause()
    this.onEnded.emit()
  }

  handleTimeUpdate = throttle(async () => {
    this.onTimeUpdate.emit()
  }, 250)

  handleDurationChange = throttle(async () => {
    this.onDurationchange.emit()
  }, 250)

  handleVolumeChange = async () => {
    this.onVolumechange.emit()
  }

  render() {
    const {
      muted,
      controls,
      loop,
      poster,
    } = this

    return (
      <Host class={classNames('wc-video')}>
        <video
          ref={dom => {
            if (dom) {
              this.videoRef = dom
            }
          }}
          class={classNames('wc-video-video')}
          webkit-playsinline={true}
          playsinline={true}
          controls={controls}
          muted={muted}
          loop={loop}
          poster={poster}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onTimeUpdate={this.handleTimeUpdate}
          onDurationChange={this.handleDurationChange}
          onVolumeChange={this.handleVolumeChange}
        ></video>
      </Host>
    );
  }
}
