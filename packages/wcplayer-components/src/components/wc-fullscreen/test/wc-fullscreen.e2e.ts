import { newE2EPage } from '@stencil/core/testing';

describe('wc-fullscreen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-fullscreen></wc-fullscreen>');

    const element = await page.find('wc-fullscreen');
    expect(element).toHaveClass('hydrated');
  });
});
