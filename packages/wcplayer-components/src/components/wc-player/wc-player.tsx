import { Component, Host, h, Prop, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-player',
  styleUrl: 'wc-player.css',
  shadow: false,
})
export class WcPlayer {
  private videoRef: HTMLVideoElement

  @Element() ele: HTMLVideoElement

  @Prop() src: string
  @Prop() controls = true
  @Prop() autoplay = false
  @Prop() muted = false
  @Prop() poster: string

  render() {
    const {
      src,
      controls,
      poster,
      muted,
      autoplay,
    } = this

    return (
      <Host class={classNames('wc-live-player')}>
        <video
          ref={dom => {
            if (dom) {
              this.videoRef = dom
            }
          }}
          webkit-playsinline={true}
          playsinline={true}
          src={src}
          controls={false}
          muted={muted}
          autoPlay={autoplay}
          poster={poster}
        ></video>
        {controls && (
          <wc-controls
            getNativeVideo={() => this.videoRef}
            getPlayerElement={() => this.ele}
          >
            {/* <div slot="before-left">
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
            </div> */}
          </wc-controls>
        )}
      </Host>
    );
  }

}
