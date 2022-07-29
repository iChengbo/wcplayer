import { newSpecPage } from '@stencil/core/testing';
import { WcProgress } from '../wc-progress';

describe('wc-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcProgress],
      html: `<wc-progress></wc-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-progress>
    `);
  });
});
