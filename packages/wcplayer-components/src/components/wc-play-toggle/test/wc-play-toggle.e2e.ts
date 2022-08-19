import { newE2EPage } from '@stencil/core/testing';

describe('wc-play-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-play-toggle></wc-play-toggle>');

    const element = await page.find('wc-play-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
