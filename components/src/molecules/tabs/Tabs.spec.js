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

    const TestComponent = {
      template: `
        <a-tab name="test1">
          <span>hehe</span>
        </a-tab>
      `,
      components: {
        ATab
      }
    }

    const wrapper = mount(ATabs, {
      slots: {
        default: TestComponent
      }
    })

    console.log(wrapper)
    console.log(wrapper.find('a-tabs a-tabs__nav-button').exists())
  })
})
