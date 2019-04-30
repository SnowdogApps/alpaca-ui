import { mount } from 'vue-test-utils'
import ATextarea from './Textarea.vue'

describe('Textarea', () => {
  it('has default structure', () => {
    const wrapper = mount(ATextarea)
    expect(wrapper.is('textarea')).toBe(true)
    expect(wrapper.classes()).toContain('textarea')
    expect(wrapper.classes().length).toBe(1)
  })
})
