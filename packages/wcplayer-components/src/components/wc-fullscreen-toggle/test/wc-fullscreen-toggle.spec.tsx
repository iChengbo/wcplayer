import { newSpecPage } from '@stencil/core/testing';
import { WcFullscreenToggle } from '../wc-fullscreen-toggle';

describe('wc-fullscreen-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcFullscreenToggle],
      html: `<wc-fullscreen-toggle></wc-fullscreen-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-fullscreen-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-fullscreen-toggle>
    `);
  });
});
