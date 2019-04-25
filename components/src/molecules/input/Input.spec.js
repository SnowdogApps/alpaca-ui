import { mount } from 'vue-test-utils'
import AInput from './Input.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'Default label'
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input')
    expect(wrapper.classes().length).toBe(1)
    const label = wrapper.find('.input > label')
    expect(label.exists()).toBe(true)
    expect(label.attributes().for).toBe('input-id')
    expect(label.text()).toEqual('Default label')
    const input = wrapper.find('.input > input')
    expect(input.exists()).toBe(true)
    expect(input.attributes().id).toBe('input-id')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-slot-id'
      },
      slots: {
        default: `<label for="input-slot-id">Alpaca UI</label>`
      }
    })
    const label = wrapper.find('.input > label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
  })
})
