import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-volume',
  styleUrl: 'wc-volume.css',
  shadow: true,
})
export class WcVolume {

  private sliderRef: HTMLInputElement

  @Prop() currentVolume: number
  @Prop() isMuted: boolean

  @State() _volume: number

  @Watch('isMuted')
  watchIsMutedHandler(isMuted: boolean) {
    if (isMuted) {
      this._volume = 0
    } else {
      this._volume = this.currentVolume
    }
  }

  @Event({
    eventName: 'volumechange'
  }) onVolumechange: EventEmitter

  componentWillLoad () {
    if (this.isMuted) {
      this._volume = 0
    } else {
      this._volume = this.currentVolume
    }
  }

  handleChangeVolume = (newVolume: number) => {
    const volume = Math.round(Math.max(Math.min(1, newVolume), 0) * 10) / 10
    this.onVolumechange.emit(volume)
  }

  render() {
    return (
      <Host class={classNames('wc-volume')}>
        <div class={classNames('volume-slider')}>
          <input
            ref={(dom) => {
              if (dom) {
                this.sliderRef = dom
              }
            }}
            class={classNames('slider')}
            type="range"
            min="0"
            max="100"
            value={this._volume * 100}
            onInput={() => {
              this.handleChangeVolume(Number(this.sliderRef.value) / 100)
            }}
          />
        </div>
      </Host>
    );
  }
}
