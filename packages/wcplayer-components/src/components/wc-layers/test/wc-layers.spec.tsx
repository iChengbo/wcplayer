import { newSpecPage } from '@stencil/core/testing';
import { WcLayers } from '../wc-layers';

describe('wc-layers', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcLayers],
      html: `<wc-layers></wc-layers>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-layers>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-layers>
    `);
  });
});
