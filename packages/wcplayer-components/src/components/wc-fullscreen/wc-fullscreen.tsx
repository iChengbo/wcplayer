import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'wc-fullscreen',
  styleUrl: 'wc-fullscreen.css',
  shadow: true,
})
export class WcFullscreen {

  @Prop() ele: HTMLElement

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
      await this.ele.requestFullscreen()
    }
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleOnClick}>
          {this.isFullScreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18"><g fill="#fff"><g data-name="6 9"><g data-name="4 1"><path data-name="7" d="M15 5h10v2H15z"/><path data-name="8" d="M15 0h2v6h-2z"/></g><g data-name="5 1"><path data-name="9" d="M15 12h10v2H15z"/><path data-name="10" d="M15 12h2v6h-2z"/></g></g><g data-name="6 10"><g data-name="4 1"><path data-name="7" d="M10 14H0v-2h10z"/><path data-name="8" d="M10 18H8v-6h2z"/></g><g data-name="5 1"><path data-name="9" d="M10 6H0V4h10z"/><path data-name="10" d="M10 6H8V0h2z"/></g></g></g></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20"><g fill="#fff"><g data-name="6 7"><g data-name="4 1"><path data-name="7" d="M16 0h10v2H16z"/><path data-name="8" d="M26 0h2v6h-2z"/></g><g data-name="5 1"><path data-name="9" d="M18 18h10v2H18z"/><path data-name="10" d="M26 14h2v6h-2z"/></g></g><g data-name="6 8"><g data-name="4 1"><path data-name="7" d="M12 20H2v-2h10z"/><path data-name="8" d="M2 20H0v-6h2z"/></g><g data-name="5 1"><path data-name="9" d="M10 2H0V0h10z"/><path data-name="10" d="M2 6H0V0h2z"/></g></g></g></svg>
          )}
        </button>
      </Host>
    );
  }

}
