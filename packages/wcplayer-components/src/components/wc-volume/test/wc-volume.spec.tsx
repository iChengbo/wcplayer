import { newSpecPage } from '@stencil/core/testing';
import { WcVolume } from '../wc-volume';

describe('wc-volume', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcVolume],
      html: `<wc-volume></wc-volume>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-volume>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-volume>
    `);
  });
});
