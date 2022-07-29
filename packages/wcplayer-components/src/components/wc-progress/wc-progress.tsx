import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-progress',
  styleUrl: 'wc-progress.css',
  shadow: true,
})
export class WcProgress {

  @Prop() currentTime: number
  @Prop() duration: number
  @Prop() seek: (position: number) => void

  render() {
    return (
      <Host>
        <div>
          <span>{this.currentTime} / {this.duration}</span>
          <button onClick={() => this.seek(this.currentTime + 10)}>+10</button>
        </div>
      </Host>
    );
  }
}
