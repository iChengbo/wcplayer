import { newSpecPage } from '@stencil/core/testing';
import { WcPictureInPictureToggle } from '../wc-picture-in-picture-toggle';

describe('wc-picture-in-picture-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPictureInPictureToggle],
      html: `<wc-picture-in-picture-toggle></wc-picture-in-picture-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-picture-in-picture-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-picture-in-picture-toggle>
    `);
  });
});
