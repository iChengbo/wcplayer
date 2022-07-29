import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-volume',
  styleUrl: 'wc-volume.css',
  shadow: true,
})
export class WcVolume {

  @Prop() currentVolume: number
  @Prop() isMuted: boolean
  @Prop() mute: () => void
  @Prop() cancelMute: () => void
  @Prop() changeVolume: (volume: number) => void

  render() {
    return (
      <Host>
        <div>
          <button onClick={this.isMuted ? this.cancelMute : this.mute}>{this.isMuted ? '取消静音': '静音'}</button>
          <button onClick={() => this.changeVolume(this.currentVolume + 0.1)}>+</button>
          <button onClick={() => this.changeVolume(this.currentVolume - 0.1)}>-</button>
          <span>{this.currentVolume}</span>
        </div>
      </Host>
    );
  }
}
