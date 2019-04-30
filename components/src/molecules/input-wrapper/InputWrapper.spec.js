import { mount } from 'vue-test-utils'
import AInputWrapper from './InputWrapper.vue'

describe('Input wrapper', () => {
  it('has default structure', () => {
    const wrapper = mount(AInputWrapper)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-wrapper')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AInputWrapper, {
      slots: {
        label: `<label for="input-1">Alpaca UI</label>`,
        default: `<input id="input-1">`
      }
    })
    const label = wrapper.find('.input-wrapper > label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
    const input = wrapper.find('.input-wrapper > input')
    expect(input.exists()).toBe(true)
  })
})
