import { mount } from 'vue-test-utils'
import AInputWrapper from './InputWrapper.vue'

describe('Input wrapper', () => {
  it('has default structure', () => {
    const wrapper = mount(AInputWrapper)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-wrapper')
    expect(wrapper.classes().length).toBe(1)
  })
})
