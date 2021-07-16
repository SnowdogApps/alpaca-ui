import { mount } from '@vue/test-utils'
import ADescriptionList from './DescriptionList.vue'

describe('DescriptionList', () => {
  it('has default structure', () => {
    const wrapper = mount(ADescriptionList)

    expect(wrapper.element.tagName).toBe('DL')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ADescriptionList, {
      slots: {
        default: '<dt>List default text</dt>'
      }
    })

    expect(wrapper.find('dl > dt').exists()).toBe(true)
    expect(wrapper.find('dl > dt').text()).toEqual('List default text')
  })
})
