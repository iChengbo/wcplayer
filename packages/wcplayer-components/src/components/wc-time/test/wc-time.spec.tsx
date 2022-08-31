import { newSpecPage } from '@stencil/core/testing';
import { WcTime } from '../wc-time';

describe('wc-time', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcTime],
      html: `<wc-time></wc-time>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-time>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-time>
    `);
  });
});
