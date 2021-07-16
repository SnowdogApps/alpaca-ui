import { mount } from '@vue/test-utils'
import AListItem from './ListItem.vue'

describe('ListItem', () => {
  it('has default structure', () => {
    const wrapper = mount(AListItem)

    expect(wrapper.element.tagName).toBe('LI')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AListItem, {
      slots: {
        default: '<span>List item default text</span>'
      }
    })

    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('span').text()).toEqual('List item default text')
  })

  it('should be generated with the `dt` passed as tag', () => {
    const wrapper = mount(AListItem, {
      propsData: {
        tag: 'dt'
      }
    })

    expect(wrapper.element.tagName).toBe('DT')
    expect(wrapper.props().tag).toBe('dt')
  })
})
