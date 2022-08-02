import { newSpecPage } from '@stencil/core/testing';
import { WcCoverLayer } from '../wc-cover-layer';

describe('wc-cover-layer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcCoverLayer],
      html: `<wc-cover-layer></wc-cover-layer>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-cover-layer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-cover-layer>
    `);
  });
});
