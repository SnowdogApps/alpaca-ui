import { mount } from '@vue/test-utils'
import ACollapse from './Collapse.vue'

describe('Button', () => {
  it('has default structure', () => {
    const wrapper = mount(ACollapse)

    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.attributes().type).toBeDefined()
    expect(wrapper.attributes().type).toBe('button')
    expect(wrapper.classes()).toContain('a-button')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ACollapse, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })

    expect(wrapper.find('.a-button span').exists()).toBe(true)
    expect(wrapper.find('.a-button span').text()).toEqual('Alpaca UI')
  })
})
