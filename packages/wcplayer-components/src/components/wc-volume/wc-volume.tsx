import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

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

  handleChangeVolume = (newVolume: number) => {
    const volume = Math.round(Math.max(Math.min(1, newVolume), 0) * 10) / 10
    this.changeVolume(volume)
  }

  handleClickMute = () => {
    if (this.isMuted) {
      this.cancelMute()
    } else {
      this.mute()
    }
  }

  render() {
    return (
      <Host class={classNames('volume-control')}>
        <button onClick={this.handleClickMute}>
          {this.isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24.485" height="23" viewBox="0 0 24.485 23"><g fill="#fff"><path data-name="矩形 15" d="M0 5.5h7v12H0z" /><path data-name="多边形 3" d="M.5 11.5L12.5 0v23z" /><g data-name="组 3"><path data-name="矩形 39" d="M23.071 7.257l1.414 1.414-7.07 7.071L16 14.328z" /><path data-name="矩形 40" d="M16 8.672l1.414-1.414 7.071 7.07-1.414 1.415z" /></g></g></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="23.542" height="23" viewBox="0 0 23.542 23"><path data-name="15" fill="#fff" d="M0 5.5h7v12H0z" /><path data-name="3" d="M.5 11.5L12.5 0v23z" fill="#fff" /><g data-name="12 1" fill="none" stroke="#fff" stroke-width="1.5"><path data-name="2" d="M15.787 8.349a2.89 2.89 0 0 1 3.04 3.126 2.763 2.763 0 0 1-3.142 2.833" stroke-width="1.50021" /><path data-name="3" d="M16.052 4.807s6.917-.147 6.61 6.796-6.83 6.16-6.83 6.16" stroke-width="1.50021" /></g></svg>
          )}
        </button>
        {/* <button style={{ width: '20px', background: 'red' }} onClick={() => this.handleChangeVolume(this.currentVolume + 0.1)}>+</button> */}
        {/* <button style={{ width: '20px', background: 'red' }} onClick={() => this.handleChangeVolume(this.currentVolume - 0.1)}>-</button> */}
        <div class={classNames('volume-panel')}>
          <div style={{ width: this.currentVolume * 100 / 2 + 'px' }} class={classNames('volume-slider')}></div>
        </div>
        {/* {/* <span>{this.currentVolume * 100 + '%'}</span> */}
      </Host>
    );
  }
}
