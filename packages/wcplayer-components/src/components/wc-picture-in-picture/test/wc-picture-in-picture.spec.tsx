import { newSpecPage } from '@stencil/core/testing';
import { WcPictureInPicture } from '../wc-picture-in-picture';

describe('wc-picture-in-picture', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPictureInPicture],
      html: `<wc-picture-in-picture></wc-picture-in-picture>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-picture-in-picture>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-picture-in-picture>
    `);
  });
});
