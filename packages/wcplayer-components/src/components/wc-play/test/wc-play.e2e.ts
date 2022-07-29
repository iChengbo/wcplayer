import { newE2EPage } from '@stencil/core/testing';

describe('wc-play', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-play></wc-play>');

    const element = await page.find('wc-play');
    expect(element).toHaveClass('hydrated');
  });
});
