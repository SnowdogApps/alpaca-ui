import { mount, shallowMount } from '@vue/test-utils'
import AInput from './Input.vue'
import ALabel from './../../atoms/label/Label.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'input label',
        type: 'text'
      }
    })
    const input = wrapper.find('input')
    expect(wrapper.element.tagName === 'DIV')

    expect(input.attributes().id).toBeDefined()
    expect(input.attributes().id).toBe('input-id')
    expect(input.attributes().type).toBeDefined()
    expect(input.attributes().type).toBe('text')
  })

  it('renders email input when type set to email', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'input label',
        type: 'email'
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('email')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'Alpaca UI'
      },
      scopedSlots: {
        label: '<label for="input-id">{{ props.label }}</label>'
      }
    })

    const label = wrapper.find('label')

    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
    expect(label.attributes().for).toBeDefined()
    expect(label.attributes().for).toBe('input-id')
  })

  it('renders label slot with component', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'Alpaca UI'
      },
      scopedSlots: {
        label: '<a-label :for="props.id">{{ props.label }}</a-label>'
      },
      stubs: {
        'a-label': ALabel
      }
    })

    const label = wrapper.find('label')

    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
    expect(label.attributes().for).toBeDefined()
    expect(label.attributes().for).toBe('input-id')
  })

  it('emits an input event', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        label: 'input label'
      }
    })

    const textInput = wrapper.find('input')
    textInput.setValue('Sample text')

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted().input[0].length).toBe(1)
    expect(wrapper.emitted().input[0][0]).toEqual('Sample text')
  })
})
