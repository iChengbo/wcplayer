import { newSpecPage } from '@stencil/core/testing';
import { WcVolumeControl } from '../wc-volume-control';

describe('wc-volume-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcVolumeControl],
      html: `<wc-volume-control></wc-volume-control>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-volume-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-volume-control>
    `);
  });
});
