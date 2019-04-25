import { mount } from 'vue-test-utils'
import ATextarea from './Textarea.vue'

describe('Textarea', () => {
  it('has default structure', () => {
    const wrapper = mount(ATextarea, {
      propsData: {
        id: 'textarea-id'
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('textarea')
    expect(wrapper.classes().length).toBe(1)
    const label = wrapper.find('.textarea > label')
    expect(label.exists()).toBe(true)
    expect(label.attributes().for).toBe('textarea-id')
    const textarea = wrapper.find('.textarea > textarea')
    expect(textarea.exists()).toBe(true)
    expect(textarea.attributes().id).toBe('textarea-id')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ATextarea, {
      propsData: {
        id: 'textarea-slot-id'
      },
      slots: {
        default: `<label for="textarea-slot-id">Alpaca UI</label>`
      }
    })
    const label = wrapper.find('.textarea > label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
  })
})
