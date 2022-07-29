import { newSpecPage } from '@stencil/core/testing';
import { WcVideo } from '../wc-video';

describe('wc-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcVideo],
      html: `<wc-video></wc-video>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-video>
    `);
  });
});
