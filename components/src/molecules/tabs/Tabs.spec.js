import { mount } from '@vue/test-utils'
import ATabs from './Tabs.vue'

describe('Tabs', () => {
  it('has default structure', () => {
    const wrapper = mount(ATabs)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-tabs')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ATabs, {
      slots: {
        default: `<span>Tabs default text</span>`
      }
    })

    expect(wrapper.find('.a-tabs div').exists()).toBe(true)
    expect(wrapper.find('.a-tabs div span').text()).toEqual('Tabs default text')
  })
})
