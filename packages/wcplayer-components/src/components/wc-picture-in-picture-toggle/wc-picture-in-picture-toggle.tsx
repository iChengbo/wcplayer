import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-picture-in-picture-toggle',
  styleUrl: 'wc-picture-in-picture-toggle.css',
  shadow: true,
})
export class WcPictureInPictureToggle {

  @Prop() nativeVideo: HTMLVideoElement

  handleOnClick = async () => {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture()
    } else {
      await this.nativeVideo.requestPictureInPicture()
    }
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleOnClick}>
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M896 812.010667l0-600-768 0 0 600 768 0zM896 128q34.005333 0 60.010667 26.005333t26.005333 60.010667l0 596.010667q0 34.005333-26.005333 60.010667t-60.010667 26.005333l-768 0q-34.005333 0-60.010667-26.005333t-26.005333-60.010667l0-596.010667q0-34.005333 26.005333-60.010667t60.010667-26.005333l768 0zM810.005333 298.005333l0 256-340.010667 0 0-256 340.010667 0z" p-id="1330" fill="#ffffff"></path></svg>
        </button>
      </Host>
    );
  }

}
