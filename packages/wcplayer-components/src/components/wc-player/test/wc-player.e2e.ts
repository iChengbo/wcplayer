import { newE2EPage } from '@stencil/core/testing';

describe('wc-player', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-player></wc-player>');

    const element = await page.find('wc-player');
    expect(element).toHaveClass('hydrated');
  });
});
