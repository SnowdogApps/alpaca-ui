import { mount } from '@vue/test-utils'
import Table from './Table.vue'

describe('atoms/Table.vue', () => {
  it('has default structure', () => {
    const wrapper = mount(Table)

    expect(wrapper.element.tagName).toBe('TABLE')
    expect(wrapper.classes()).toContain('table')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders caption prop when passed', () => {
    const wrapper = mount(Table, {
      propsData: {
        caption: 'This is a table'
      }
    })

    const caption = wrapper.find('caption')
    expect(caption.exists()).toBe(true)
    expect(caption.text()).toEqual('This is a table')
  })

  it('renders slots when defined', () => {
    const wrapper = mount(Table, {
      slots: {
        default: '<tbody><tr><td>Test table</td></tr></tbody>',
        caption: '<div class="caption">This is caption slot</div>'
      }
    })

    const captionSlotElement = wrapper.find('div.caption')
    expect(captionSlotElement.exists()).toBe(true)
    expect(captionSlotElement.classes()).toContain('caption')
    expect(captionSlotElement.text()).toEqual('This is caption slot')

    const defaultSlot = wrapper.find('tbody tr td')
    expect(defaultSlot.exists()).toBe(true)
    expect(defaultSlot.text()).toEqual('Test table')
  })
})
