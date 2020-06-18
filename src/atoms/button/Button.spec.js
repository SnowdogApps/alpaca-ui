import { mount } from '@vue/test-utils'
import AButton from './Button.vue'

describe('atoms/Button', () => {
  it('has default structure', () => {
    const wrapper = mount(AButton)

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.classes()).toContain('a-btn')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes().type).toBeDefined()
    expect(wrapper.attributes().type).toBe('button')
  })
})
