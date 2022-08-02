import { newSpecPage } from '@stencil/core/testing';
import { WcPlayPauseLayer } from '../wc-play-pause-layer';

describe('wc-play-pause-layer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPlayPauseLayer],
      html: `<wc-play-pause-layer></wc-play-pause-layer>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-play-pause-layer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-play-pause-layer>
    `);
  });
});
