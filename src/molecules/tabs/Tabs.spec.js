import { shallowMount } from '@vue/test-utils'
import merge from 'lodash.merge'
import ATab from '@atoms/tab/Tab.vue'
import ATabs from './Tabs.vue'

const factory = (customData = {}) => {
  const defaultData = {
    slots: {
      default: `
        <a-tab
          name="test tab1"
          :selected="true"
        >
          Tab text 1
        </a-tab>
        <a-tab name="test tab2">
          Tab text 2
        </a-tab>
      `
    },
    stubs: {
      'a-tab': ATab
    }
  }

  return shallowMount(ATabs, merge(defaultData, customData))
}

describe('Tabs', () => {
  it('has default structure', async () => {
    const wrapper = factory()

    await wrapper.vm.$nextTick()

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('has default structure when content rendered', async () => {
    const wrapper = factory()

    await wrapper.vm.$nextTick()

    expect(wrapper.find('#test-tab1-tab-trigger').exists()).toBe(true)
    expect(wrapper.find('#test-tab1-tab').exists()).toBe(true)
    expect(wrapper.find('#test-tab2-tab-trigger').exists()).toBe(true)
    expect(wrapper.find('#test-tab2-tab').exists()).toBe(true)
  })

  it('renders slot content when passed', async () => {
    const wrapper = factory()

    await wrapper.vm.$nextTick()

    expect(wrapper.find('#test-tab1-tab-trigger').exists()).toBe(true)
    expect(wrapper.find('#test-tab1-tab-trigger').text()).toEqual('test tab1')
    expect(wrapper.find('#test-tab1-tab').exists()).toBe(true)
    expect(wrapper.find('#test-tab1-tab').text()).toEqual('Tab text 1')
    expect(wrapper.find('#test-tab2-tab-trigger').exists()).toBe(true)
    expect(wrapper.find('#test-tab2-tab-trigger').text()).toEqual('test tab2')
    expect(wrapper.find('#test-tab2-tab').exists()).toBe(true)
    expect(wrapper.find('#test-tab2-tab').text()).toEqual('Tab text 2')
  })

  it('renders custom button', async () => {
    const wrapper = factory({
      slots: {
        button: `
          <div data-test="button-slot">
            Test slot
          </div>
        `
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-test="button-slot"]').exists()).toBe(true)
  })

  it('switches between tabs', async () => {
    const wrapper = factory()

    await wrapper.vm.$nextTick()

    const firstTrigger = wrapper.find('#test-tab1-tab-trigger')
    const secondTrigger = wrapper.find('#test-tab2-tab-trigger')
    const firstContent = wrapper.find('#test-tab1-tab')
    const secondContent = wrapper.find('#test-tab2-tab')

    await firstTrigger.trigger('click')

    expect(firstTrigger.attributes('aria-selected')).toEqual('true')
    expect(firstTrigger.attributes('aria-expanded')).toEqual('true')
    expect(firstContent.isVisible()).toBe(true)
    expect(secondTrigger.attributes('aria-selected')).toEqual('false')
    expect(secondTrigger.attributes('aria-expanded')).toEqual('false')
    expect(secondContent.isVisible()).toBe(false)

    await secondTrigger.trigger('click')

    expect(firstTrigger.attributes('aria-selected')).toEqual('false')
    expect(firstTrigger.attributes('aria-expanded')).toEqual('false')
    expect(firstContent.isVisible()).toBe(false)
    expect(secondTrigger.attributes('aria-selected')).toEqual('true')
    expect(secondTrigger.attributes('aria-expanded')).toEqual('true')
    expect(secondContent.isVisible()).toBe(true)
  })
})
