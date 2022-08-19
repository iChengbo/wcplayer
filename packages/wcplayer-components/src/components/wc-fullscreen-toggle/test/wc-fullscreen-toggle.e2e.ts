import { newE2EPage } from '@stencil/core/testing';

describe('wc-fullscreen-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-fullscreen-toggle></wc-fullscreen-toggle>');

    const element = await page.find('wc-fullscreen-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
