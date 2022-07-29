import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-player',
  styleUrl: 'wc-player.css',
  shadow: true,
})
export class WcPlayer {

  // private videoRef: HTMLWcVideoElement
  public volume: number

  /**
   * 要播放视频的资源地址
   */
  @Prop() src: string

  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   */
  @Prop() controls = true
  /**
  * 是否自动播放
  */
  @Prop() autoplay = false
  /**
   * 是否静音播放
   */
  @Prop() muted = true

  render() {
    const {
      src,
      autoplay,
      muted,
      controls,
    } = this

    return (
      <Host class={classNames('wc-player')}>
        <wc-video
          // ref={dom => {
          //   if (dom) {
          //     this.videoRef = dom
          //   }
          // }}
          src={src}
          autoplay={autoplay}
          muted={muted}
          controls={controls}
          onPlay={() => console.log('onPlay')}
          // onPause={() => console.log('onPause')}
          // onEnded={() => console.log('onEnded')}
          // onTimeupdate={() => console.log('onTimeupdate')}
          // onDurationchange={() => console.log('onTimeupdate')}
          // onVolumechange={() => console.log('onVolumechange')}
        ></wc-video>
        {/* <wc-play></wc-play> */}
        {/* <div class={classNames('player-controls')}>
          <p>controls</p>
        </div> */}
      </Host>
    );
  }

}
