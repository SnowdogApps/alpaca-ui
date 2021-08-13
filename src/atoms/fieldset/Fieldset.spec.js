import { mount } from '@vue/test-utils'
import AFieldset from './Fieldset.vue'

describe('Fieldset', () => {
  it('has default structure', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      }
    })

    expect(wrapper.element.tagName).toBe('FIELDSET')
    expect(wrapper.find('legend').exists()).toBe(true)
    expect(wrapper.find('legend').text()).toEqual('Legend text')
  })

  it('renders legend with custom class', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      }
    })
    expect(wrapper.find('legend').text()).toEqual('Legend text')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      },
      slots: {
        default: '<span>Fieldset content</span>'
      }
    })

    expect(wrapper.find('fieldset').exists()).toBe(true)
    expect(wrapper.find('fieldset > span').text()).toEqual('Fieldset content')
  })
})
