import { newE2EPage } from '@stencil/core/testing';

describe('wc-play-pause-layer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-play-pause-layer></wc-play-pause-layer>');

    const element = await page.find('wc-play-pause-layer');
    expect(element).toHaveClass('hydrated');
  });
});
