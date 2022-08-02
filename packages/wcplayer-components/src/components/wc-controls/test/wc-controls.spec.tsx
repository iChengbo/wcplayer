import { newSpecPage } from '@stencil/core/testing';
import { WcControls } from '../wc-controls';

describe('wc-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcControls],
      html: `<wc-controls></wc-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-controls>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-controls>
    `);
  });
});
