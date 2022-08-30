import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
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

  @State() _currentTime: number
  @State() _duration: number
  @State() _currentValue: number

  @Event({
    eventName: 'seeked'
  }) onSeeked: EventEmitter

  @Event({
    eventName: 'seeking'
  }) onSeeking: EventEmitter

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

  handleSeeking = () => {
    this.onSeeking.emit()
  }

  handleSeeked = () => {
    const nextTime = Number(this.sliderRef.value)
    this.onSeeked.emit(nextTime)
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
            type="range"
            min={0}
            max={_duration}
            value={_currentTime}
            onMouseDown={this.handleSeeking}
            onMouseUp={this.handleSeeked}
          />
      </Host>
    );
  }
}
