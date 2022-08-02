import { newE2EPage } from '@stencil/core/testing';

describe('wc-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-controls></wc-controls>');

    const element = await page.find('wc-controls');
    expect(element).toHaveClass('hydrated');
  });
});
