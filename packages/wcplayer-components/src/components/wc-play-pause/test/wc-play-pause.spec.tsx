import { newSpecPage } from '@stencil/core/testing';
import { WcPlayPause } from '../wc-play-pause';

describe('wc-play-pause', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPlayPause],
      html: `<wc-play-pause></wc-play-pause>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-play-pause>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-play-pause>
    `);
  });
});
