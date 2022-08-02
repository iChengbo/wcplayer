import { newSpecPage } from '@stencil/core/testing';
import { WcFullscreen } from '../wc-fullscreen';

describe('wc-fullscreen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcFullscreen],
      html: `<wc-fullscreen></wc-fullscreen>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-fullscreen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-fullscreen>
    `);
  });
});
