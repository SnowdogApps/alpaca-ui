import { mount } from '@vue/test-utils'
import AParagraph from './Paragraph.vue'

describe('Paragraph', () => {
  it('has default structure', () => {
    const wrapper = mount(AParagraph)

    expect(wrapper.element.tagName).toBe('P')
  })

  it('renders custom root element', () => {
    const wrapper = mount(AParagraph, {
      propsData: {
        tag: 'span'
      }
    })

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AParagraph, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })
    expect(wrapper.find('p span').exists()).toBe(true)
    expect(wrapper.find('p span').text()).toEqual('Alpaca UI')
  })
})
