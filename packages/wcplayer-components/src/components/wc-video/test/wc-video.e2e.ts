import { newE2EPage } from '@stencil/core/testing';

describe('wc-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-video></wc-video>');

    const element = await page.find('wc-video');
    expect(element).toHaveClass('hydrated');
  });
});
