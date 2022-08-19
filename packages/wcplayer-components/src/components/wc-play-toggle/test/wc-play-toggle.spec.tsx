import { newSpecPage } from '@stencil/core/testing';
import { WcPlayPause } from '../wc-play-toggle';

describe('wc-play-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPlayPause],
      html: `<wc-play-toggle></wc-play-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-play-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-play-toggle>
    `);
  });
});
