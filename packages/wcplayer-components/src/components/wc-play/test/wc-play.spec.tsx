import { newSpecPage } from '@stencil/core/testing';
import { WcPlay } from '../wc-play';

describe('wc-play', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPlay],
      html: `<wc-play></wc-play>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-play>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-play>
    `);
  });
});
