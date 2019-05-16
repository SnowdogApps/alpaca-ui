import { mount } from '@vue/test-utils'
import ARating from './Rating.vue'

describe('Rating', () => {
  it('has default structure', () => {
    const wrapper = mount(ARating)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-ratinig')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ARating, {
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
