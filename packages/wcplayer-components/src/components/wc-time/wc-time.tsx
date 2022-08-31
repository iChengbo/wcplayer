import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-time',
  styleUrl: 'wc-time.css',
  shadow: true,
})
export class WcTime {

  @Prop() currentTime: number = 0
  @Prop() duration: number = 0

  render() {
    const { currentTime, duration } = this
    return (
      <Host>
        <span>{formatTime(currentTime)}</span>
        <span> / </span>
        <span>{formatTime(duration)}</span>
      </Host>
    );
  }

}

const formatTime = (time: number): string => {
  const _time = Math.round(time)
  const seconds = _time % 60
  const minutes = Math.floor(_time / 60)
  const hours = Math.floor(_time / 60 / 60)
  return (hours !== 0 ? hours + ' : ' : '') + minutes + ' : ' + (seconds > 9 ? seconds : '0'+ seconds)
}
