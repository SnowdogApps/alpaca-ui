import { mount } from '@vue/test-utils'
import TableCell from './TableCell.vue'

describe('atoms/TableCell.vue', () => {
  it('has default structure', () => {
    const wrapper = mount(TableCell)

    expect(wrapper.element.tagName).toBe('TD')
    expect(wrapper.element.tagName).toBe('TD')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('gridcell')
  })

  it('renders scope prop when passed', () => {
    const wrapper = mount(TableCell, {
      propsData: {
        scope: 'row'
      }
    })

    expect(wrapper.attributes().scope).toBeDefined()
    expect(wrapper.attributes().scope).toEqual('row')
  })
})

it('renders slot text when passed', () => {
  const wrapper = mount(TableCell, {
    slots: {
      default: 'Test table cell'
    }
  })

  expect(wrapper.text()).toEqual('Test table cell')
})
