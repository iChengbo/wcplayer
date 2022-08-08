import { mount } from '@vue/test-utils';
import { WcSpacer } from '../src';

describe('WcSpacer', () => {
  it('should be rendered by Vue', () => {
    const wrapper = mount(WcSpacer);
    expect(wrapper.element.tagName.toLowerCase()).toEqual('wc-spacer');
  });
})
