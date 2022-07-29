import { newE2EPage } from '@stencil/core/testing';

describe('wc-volume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-volume></wc-volume>');

    const element = await page.find('wc-volume');
    expect(element).toHaveClass('hydrated');
  });
});
