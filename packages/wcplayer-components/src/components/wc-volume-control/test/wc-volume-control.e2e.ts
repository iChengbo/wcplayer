import { newE2EPage } from '@stencil/core/testing';

describe('wc-volume-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-volume-control></wc-volume-control>');

    const element = await page.find('wc-volume-control');
    expect(element).toHaveClass('hydrated');
  });
});
