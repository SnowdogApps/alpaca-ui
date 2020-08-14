import { mount } from '@vue/test-utils'
import ALabel from './Label.vue'

describe('Label', () => {
  it('has default structure', () => {
    const wrapper = mount(ALabel)

    expect(wrapper.element.tagName).toBe('LABEL')
    expect(wrapper.classes()).toContain('a-label')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ALabel, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })

    expect(wrapper.find('label span').exists()).toBe(true)
    expect(wrapper.find('label span').text()).toEqual('Alpaca UI')
  })
})
