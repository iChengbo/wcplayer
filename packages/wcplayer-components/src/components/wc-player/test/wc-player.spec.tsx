import { newSpecPage } from '@stencil/core/testing';
import { WcPlayer } from '../wc-player';

describe('wc-player', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPlayer],
      html: `<wc-player></wc-player>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-player>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-player>
    `);
  });
});
