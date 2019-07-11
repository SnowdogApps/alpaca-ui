import { mount } from '@vue/test-utils'
import ASelect from './Select.vue'

describe('Select', () => {
  it('has default structure', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        id: '1',
        name: 'select',
        value: 'select'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-select')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders named slots content when passed', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        id: '1',
        name: 'select',
        value: 'select'
      },
      slots: {
        label: '<label data-test="label">Label</label>'
      }
    })

    const label = wrapper.find('label[data-test="label"]')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Label')
  })

  it('default has no disabled attribute on select', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        id: '1',
        name: 'select',
        value: 'select'
      }
    })

    const select = wrapper.find('.a-select__field')
    expect(select.attributes('disabled')).not.toBeDefined()
  })

  it('has option elements from simple options array', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        options: ['one', 'two', 'three']
      }
    })
    const $options = wrapper.findAll('option')
    expect($options.length).toBe(3)
    expect($options.at(0).text()).toBe('one')
    expect($options.at(1).text()).toBe('two')
    expect($options.at(2).text()).toBe('three')
    expect($options.at(0).attributes('value')).toBe('one')
    expect($options.at(1).attributes('value')).toBe('two')
    expect($options.at(2).attributes('value')).toBe('three')
    expect($options.is('[disabled]')).toBe(false)
  })
})
