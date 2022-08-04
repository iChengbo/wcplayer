import { newSpecPage } from '@stencil/core/testing';
import { WcSpacer } from '../wc-spacer';

describe('wc-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcSpacer],
      html: `<wc-spacer></wc-spacer>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-spacer>
    `);
  });
});
