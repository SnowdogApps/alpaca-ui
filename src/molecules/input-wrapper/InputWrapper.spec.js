import { mount } from '@vue/test-utils'
import AInputWrapper from './InputWrapper.vue'

describe('Input wrapper', () => {
  it('has default structure', () => {
    const wrapper = mount(AInputWrapper, {
      slots: {
        default: `<input type="text" id="input-1">`
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-input-wrapper')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AInputWrapper, {
      slots: {
        default: `<input type="text" id="input-1">`,
        label: `<label for="input-1">Alpaca UI</label>`
      }
    })
    const label = wrapper.find('.a-input-wrapper > label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
  })
})
