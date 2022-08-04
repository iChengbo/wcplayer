import { newE2EPage } from '@stencil/core/testing';

describe('wc-spacer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-spacer></wc-spacer>');

    const element = await page.find('wc-spacer');
    expect(element).toHaveClass('hydrated');
  });
});
