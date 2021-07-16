import { mount } from '@vue/test-utils'
import AList from './List.vue'

describe('List', () => {
  it('has default structure', () => {
    const wrapper = mount(AList)

    expect(wrapper.element.tagName).toBe('UL')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AList, {
      slots: {
        default: '<li>List default text</li>'
      }
    })

    expect(wrapper.find('ul > li').exists()).toBe(true)
    expect(wrapper.find('ul > li').text()).toEqual('List default text')
  })

  it('should be generated with the `ol` passed as tag', () => {
    const wrapper = mount(AList, {
      propsData: {
        tag: 'ol'
      }
    })

    expect(wrapper.element.tagName).toBe('OL')
    expect(wrapper.props().tag).toBe('ol')
  })
})
