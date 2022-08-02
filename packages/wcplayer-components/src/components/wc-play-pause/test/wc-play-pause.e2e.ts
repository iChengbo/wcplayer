import { newE2EPage } from '@stencil/core/testing';

describe('wc-play-pause', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-play-pause></wc-play-pause>');

    const element = await page.find('wc-play-pause');
    expect(element).toHaveClass('hydrated');
  });
});
