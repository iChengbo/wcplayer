import { newE2EPage } from '@stencil/core/testing';

describe('wc-picture-in-picture', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-picture-in-picture></wc-picture-in-picture>');

    const element = await page.find('wc-picture-in-picture');
    expect(element).toHaveClass('hydrated');
  });
});
