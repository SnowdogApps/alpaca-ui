import { mount } from '@vue/test-utils'
import ATab from './Tab.vue'

const factory = () => {
  return mount(ATab, {
    slots: {
      default: `
        <span>
          Tab text
        </span>
      `
    },
    propsData: {
      name: 'Tab'
    }
  })
}

describe('Tab', () => {
  it('has default structure', async () => {
    const wrapper = factory()

    await wrapper.vm.$nextTick()

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('tabpanel')
    expect(wrapper.attributes('data-tab')).toBeDefined()
  })

  it('renders slot text when passed', () => {
    const wrapper = factory()

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Tab text')
  })

  it('has correct id attribute', () => {
    const wrapper = factory()

    expect(wrapper.props().name).toBe('Tab')
    expect(wrapper.attributes().id).toBeDefined()
    expect(wrapper.attributes().id).toEqual('tab-tab')
  })
})
