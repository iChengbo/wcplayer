import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'wc-fullscreen-toggle',
  styleUrl: 'wc-fullscreen-toggle.css',
  shadow: true,
})
export class WcFullscreenToggle {

  @Prop() target: HTMLElement

  @State() isFullScreen: boolean

  componentDidLoad() {
    // TODO: 兼容各种浏览器
    if (document.addEventListener) {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange)
    }
  }

  handleFullScreenChange = () => {
    this.isFullScreen = !!document.fullscreenElement
  }

  handleOnClick = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await this.target.requestFullscreen()
    }
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleOnClick}>
          {this.isFullScreen ? (
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3387" width="200" height="200"><path d="M704 864v-96c0-54.4 41.6-96 96-96h96c19.2 0 32-12.8 32-32s-12.8-32-32-32h-96c-89.6 0-160 70.4-160 160v96c0 19.2 12.8 32 32 32s32-12.8 32-32z m-64-704v96c0 89.6 70.4 160 160 160h96c19.2 0 32-12.8 32-32s-12.8-32-32-32h-96c-54.4 0-96-41.6-96-96v-96c0-19.2-12.8-32-32-32s-32 12.8-32 32z m-256 704v-96c0-89.6-70.4-160-160-160h-96c-19.2 0-32 12.8-32 32s12.8 32 32 32h96c54.4 0 96 41.6 96 96v96c0 19.2 12.8 32 32 32s32-12.8 32-32z m-64-704v96c0 54.4-41.6 96-96 96h-96c-19.2 0-32 12.8-32 32s12.8 32 32 32h96c89.6 0 160-70.4 160-160v-96c0-19.2-12.8-32-32-32s-32 12.8-32 32z" p-id="3388" fill="#ffffff"></path></svg>
          ) : (
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3212" width="200" height="200"><path d="M170.666667 170.666667v213.333333H85.333333V85.333333h298.666667v85.333334H170.666667z m682.666666 213.333333V170.666667h-213.333333V85.333333h298.666667v298.666667h-85.333334zM170.666667 640v213.333333h213.333333v85.333334H85.333333v-298.666667h85.333334z m682.666666 0h85.333334v298.666667h-298.666667v-85.333334h213.333333v-213.333333z" p-id="3213" fill="#ffffff"></path></svg>
          )}
        </button>
      </Host>
    );
  }

}
