import { mount } from '@vue/test-utils'
import ATabs from './Tabs.vue'
import ATab from '../../atoms/tab/Tab.vue'

describe('Tabs', () => {
  it('has default structure', () => {
    const wrapper = mount(ATabs)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-tabs')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ATabs, {
      slots: {
        default: {
          render (h) {
            return h(ATab, { props: { name: 'Sample' } })
          }
        }
      }
    })

    expect(wrapper.find('.a-tabs div').exists()).toBe(true)
    const tab = wrapper.find(ATab)
    expect(tab.vm.name).toBe('Sample')
  })
})
