import { mount } from '@vue/test-utils'
import ATab from './Tab.vue'

describe('Tab', () => {
  it('has default structure', () => {
    const wrapper = mount(ATab, {
      propsData: {
        name: 'Tab'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('tabpanel')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ATab, {
      slots: {
        default: `<span>Tab default text</span>`
      },
      propsData: {
        name: 'Tab'
      }
    })

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Tab default text')
  })

  it('renders when passed name props', () => {
    const wrapper = mount(ATab, {
      slots: {
        default: `<span>Tab default text</span>`
      },
      propsData: {
        name: 'Tab'
      }
    })

    expect(wrapper.props().name).toBe('Tab')
  })
})
