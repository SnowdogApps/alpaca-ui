import { mount } from '@vue/test-utils'
import AFieldset from './Fieldset.vue'

describe('Fieldset', () => {
  it('has default structure', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      }
    })

    expect(wrapper.is('fieldset')).toBe(true)
    expect(wrapper.classes()).toContain('a-fieldset')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.contains('legend')).toBe(true)
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

    expect(wrapper.find('.a-fieldset').exists()).toBe(true)
    expect(wrapper.find('.a-fieldset span').text()).toEqual('Fieldset content')
  })
})
