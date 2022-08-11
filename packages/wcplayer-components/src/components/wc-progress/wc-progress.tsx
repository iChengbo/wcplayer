import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-progress',
  styleUrl: 'wc-progress.css',
  shadow: true,
})
export class WcProgress {

  private sliderRef: HTMLInputElement

  @Prop() currentTime: number
  @Prop() duration: number
  @Prop() seek: (position: number) => void

  @State() _currentTime: number
  @State() _duration: number
  @State() _currentValue: number

  @Watch('currentTime')
  watchCurrentTimeHander() {
    this._currentTime = Math.round(this.currentTime)
  }

  @Watch('duration')
  watchDurationHander() {
    this._duration = Math.round(this.duration)
  }

  componentWillLoad() {
    this._currentTime = Math.round(this.currentTime)
    this._duration = Math.round(this.duration)

    if (this._currentTime === 0 || this._duration === 0) {
      this._currentValue = 0
    } else {
      this._currentValue = 100 * this._currentTime / this._duration
    }
  }

  handleChangeValue = () => {
    const nextTime = Number(this.sliderRef.value)
    this.seek(nextTime)
  }

  render() {
    const {
      _currentTime,
      _duration
    } = this

    return (
      <Host class={classNames('wc-progress')}>
          <input
            ref={(dom) => {
              if (dom) {
                this.sliderRef = dom
              }
            }}
            class={classNames('slider')}
            type="range"
            min={0}
            max={_duration}
            value={_currentTime}
            onChange={this.handleChangeValue}
          />
      </Host>
    );
  }
}
