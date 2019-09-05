import { mount } from '@vue/test-utils'
import ABanner from './Banner.vue'

describe('Banner', () => {
  it('has default structure', () => {
    const wrapper = mount(ABanner, {
      propsData: {
        image: { key: 'key', src: 'src' }
      }
    })

    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.classes()).toContain('a-banner')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders named slot text when passed', () => {
    const wrapper = mount(ABanner, {
      propsData: {
        image: { key: 'key', src: 'src' },
        text: 'Title'
      },
      slots: {
        default: `<div class="example-slot">Alpaca UI</div>`
      }
    })

    expect(wrapper.find('.a-banner div').exists()).toBe(true)
    expect(wrapper.find('.a-banner div').text()).toEqual('Alpaca UI')
  })

  it('should be generated with correct props', () => {
    const wrapper = mount(ABanner, {
      propsData: {
        image: { key: 'key', src: 'src' },
        sources: [{ srcset: 'srcset', media: 'media' }],
        text: 'Text'
      }
    })

    expect(wrapper.props().image.key).toBe('key')
    expect(wrapper.props().sources[0].media).toBe('media')
    expect(wrapper.props().text).toBe('Text')
  })
})
