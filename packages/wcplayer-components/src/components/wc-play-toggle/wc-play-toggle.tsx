import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';
import { VideoStatus } from '../../constants';

@Component({
  tag: 'wc-play-toggle',
  styleUrl: 'wc-play-toggle.css',
  shadow: true,
})
export class WcPlayToggle {

  @Prop() status: VideoStatus = VideoStatus.PAUSED

  render() {

    return (
      <Host class={classNames('wc-play-toggle')}>
        {this.status === VideoStatus.PLAYING ? (
          <button
            class={classNames('btn-pause')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48"><g transform="translate(-950 -398)"><rect width="12" height="48" transform="translate(950 398)" fill="#fff" /><rect width="12" height="48" transform="translate(974 398)" fill="#fff" /></g></svg>
          </button>
        ) : (
          <button
            class={classNames('btn-play')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="47" viewBox="0 0 41 47"><path d="M23.5,0,47,41H0Z" transform="translate(41) rotate(90)" fill="#fff" /></svg>
          </button>
        )}
      </Host>
    );
  }
}
