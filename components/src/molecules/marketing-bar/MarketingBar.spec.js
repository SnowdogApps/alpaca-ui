import { mount } from '@vue/test-utils'
import AMarketingBar from './MarketingBar.vue'

describe('Marketing bar', () => {
  it('has default structure', () => {
    const wrapper = mount(AMarketingBar, {
      propsData: {
        isBarVisible: true
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-marketing-bar')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AMarketingBar, {
      slots: {
        default: `<span>Sample content</span>`,
        button: `<button>Sample button</button>`
      }
    })

    const span = wrapper.find('.a-marketing-bar span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toEqual('Sample content')
    expect(wrapper.find('button').text()).toBe('Sample button')
  })

  it('close marketing bar', () => {
    const wrapper = mount(AMarketingBar)
    const closeBtn = wrapper.find('.a-marketing-bar__close')

    expect(closeBtn.exists()).toBe(true)
    closeBtn.trigger('click')
    expect(closeBtn.exists()).toBe(false)
  })
})
