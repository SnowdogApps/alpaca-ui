import { mount } from '@vue/test-utils'
import ACollapse from './Collapse.vue'

describe('Button', () => {
  it('has default structure', () => {
    const wrapper = mount(ACollapse)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-collapse')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ACollapse, {
      slots: {
        default: `
          <p>Alpaca UI</p>
        `
      }
    })

    expect(wrapper.find('.a-collapse div > p').exists()).toBe(true)
    expect(wrapper.find('.a-collapse div > p').text()).toEqual('Alpaca UI')
  })

  it('renders named slot text when passed', () => {
    const wrapper = mount(ACollapse, {
      slots: {
        title: `
          <span>Alpaca UI</span>
        `
      }
    })

    expect(wrapper.find('.a-collapse button > span').exists()).toBe(true)
    expect(wrapper.find('.a-collapse button > span').text()).toEqual('Alpaca UI')
  })
})
