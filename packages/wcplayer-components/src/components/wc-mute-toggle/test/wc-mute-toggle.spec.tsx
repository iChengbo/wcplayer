import { newSpecPage } from '@stencil/core/testing';
import { WcMuteToggle } from '../wc-mute-toggle';

describe('wc-mute-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcMuteToggle],
      html: `<wc-mute-toggle></wc-mute-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-mute-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-mute-toggle>
    `);
  });
});
