import { newE2EPage } from '@stencil/core/testing';

describe('wc-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-progress></wc-progress>');

    const element = await page.find('wc-progress');
    expect(element).toHaveClass('hydrated');
  });
});
