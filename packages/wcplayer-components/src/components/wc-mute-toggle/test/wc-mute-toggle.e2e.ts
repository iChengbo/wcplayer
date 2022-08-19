import { newE2EPage } from '@stencil/core/testing';

describe('wc-mute-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-mute-toggle></wc-mute-toggle>');

    const element = await page.find('wc-mute-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
