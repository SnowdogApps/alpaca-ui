import { mount } from '@vue/test-utils'
import AContainer from './Container.vue'

describe('Container', () => {
  it('has default structure', () => {
    const wrapper = mount(AContainer)

    expect(wrapper.element.tagName).toBe('MAIN')
  })

  it('renders custom root element', () => {
    const wrapper = mount(AContainer, {
      propsData: {
        tag: 'div'
      }
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AContainer, {
      slots: {
        default: 'Container'
      }
    })

    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('main').text()).toEqual('Container')
  })
})
