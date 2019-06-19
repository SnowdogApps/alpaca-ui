import { mount } from '@vue/test-utils'
import AInput from './Input.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput)
    expect(wrapper.is('input')).toBe(true)
    expect(wrapper.classes()).toContain('a-input')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders text input when type set to text', () => {
    const wrapper = mount(AInput, {
      propsData: {
        type: 'text'
      }
    })
    const input = wrapper.find('.a-input')
    expect(input.attributes('type')).toBe('text')
  })

  it('is disabled when disabled', () => {
    const wrapper = mount(AInput, {
      propsData: {
        disabled: true
      }
    })
    const input = wrapper.find('.a-input')
    expect(!!input.attributes('disabled')).toBe(true)
    expect(input.element.disabled).toBe(true)
  })

  it('emits an input event', () => {
    const wrapper = mount(AInput)
    const input = wrapper.find('.a-input')
    input.element.value = 'Sample text'
    input.trigger('input')

    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted().input[0].length).toEqual(1)
    expect(wrapper.emitted().input[0][0]).toEqual('Sample text')
  })
})
