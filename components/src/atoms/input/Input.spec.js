import { mount } from '@vue/test-utils'
import AInput from './Input.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput)
    expect(wrapper.is('input')).toBe(true)
    expect(wrapper.classes()).toContain('a-input')
    expect(wrapper.classes().length).toBe(1)
  })
})
