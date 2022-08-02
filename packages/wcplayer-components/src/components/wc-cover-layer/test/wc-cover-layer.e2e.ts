import { newE2EPage } from '@stencil/core/testing';

describe('wc-cover-layer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-cover-layer></wc-cover-layer>');

    const element = await page.find('wc-cover-layer');
    expect(element).toHaveClass('hydrated');
  });
});
