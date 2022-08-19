import { newE2EPage } from '@stencil/core/testing';

describe('wc-picture-in-picture-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-picture-in-picture-toggle></wc-picture-in-picture-toggle>');

    const element = await page.find('wc-picture-in-picture-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
