import { mount } from '@vue/test-utils'
import TableRow from './TableRow.vue'

describe('atoms/TableRow.vue', () => {
  it('has default structure', () => {
    const wrapper = mount(TableRow)

    expect(wrapper.element.tagName).toBe('TR')
    expect(wrapper.element.tagName).toBe('TR')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('row')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(TableRow, {
      slots: {
        default: '<td>Test table row</td>'
      }
    })

    const defaultSlot = wrapper.find('td')
    expect(defaultSlot.exists()).toBe(true)
    expect(defaultSlot.text()).toEqual('Test table row')
  })
})
