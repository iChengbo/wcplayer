import { newE2EPage } from '@stencil/core/testing';

describe('wc-layers', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-layers></wc-layers>');

    const element = await page.find('wc-layers');
    expect(element).toHaveClass('hydrated');
  });
});
