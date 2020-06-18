import { mount } from '@vue/test-utils'
import ABadge from './Badge.vue'

describe('Badge', () => {
  it('has default structure', () => {
    const wrapper = mount(ABadge)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-badge')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ABadge, {
      slots: {
        default: 'Badge default text'
      }
    })

    expect(wrapper.find('.a-badge').exists()).toBe(true)
    expect(wrapper.find('.a-badge').text()).toEqual('Badge default text')
  })

  it('renders custom root element', () => {
    const wrapper = mount(ABadge, {
      propsData: {
        tag: 'span'
      }
    })

    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('a-badge')
    expect(wrapper.classes().length).toBe(1)
  })
})
