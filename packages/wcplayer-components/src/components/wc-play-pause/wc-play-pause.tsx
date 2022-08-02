import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'wc-play-pause',
  styleUrl: 'wc-play-pause.css',
  shadow: true,
})
export class WcPlayPause {

  @Prop() isPlaying: boolean
  @Prop() pauseFunc: () => void
  @Prop() playFunc: () => void

  render() {
    const {
      isPlaying,
      pauseFunc,
      playFunc
    } = this

    return (
      <Host class={classNames('wc-play-pause')}>
        {isPlaying ? (
          <button
            onClick={pauseFunc}
            class={classNames('btn-pause')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48"><g transform="translate(-950 -398)"><rect width="12" height="48" transform="translate(950 398)" fill="#fff" /><rect width="12" height="48" transform="translate(974 398)" fill="#fff" /></g></svg>
          </button>
        ) : (
          <button
            onClick={playFunc}
            class={classNames('btn-play')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="47" viewBox="0 0 41 47"><path d="M23.5,0,47,41H0Z" transform="translate(41) rotate(90)" fill="#fff" /></svg>
          </button>
        )}
      </Host>
    );
  }
}
