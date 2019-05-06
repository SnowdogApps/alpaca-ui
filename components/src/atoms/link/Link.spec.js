import { mount } from '@vue/test-utils'
import ALink from './Link.vue'

describe('Link', () => {
  it('has default structure', () => {
    const wrapper = mount(ALink)

    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.classes()).toContain('a-link')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ALink, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })

    expect(wrapper.find('.a-link span').exists()).toBe(true)
    expect(wrapper.find('.a-link span').text()).toEqual('Alpaca UI')
  })

  it('should be generated with the `href` passed as attributes', () => {
    const href = '#'
    const wrapper = mount(ALink, {
      attrs: {
        href
      }
    })
    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.classes()).toContain('a-link')
    expect(wrapper.attributes().href).toBeDefined()
    expect(wrapper.attributes().href).toEqual(href)
  })
})
