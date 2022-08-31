import { newE2EPage } from '@stencil/core/testing';

describe('wc-time', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-time></wc-time>');

    const element = await page.find('wc-time');
    expect(element).toHaveClass('hydrated');
  });
});
