import { mount } from '@vue/test-utils'
import breadcrumbs from '../../../mocks/breadcrumbs.json'
import ABreadcrumbs from './Breadcrumbs.vue'

describe('Breadcrumbs', () => {
  it('has default structure', () => {
    const wrapper = mount(ABreadcrumbs, {
      propsData: {
        breadcrumbs: breadcrumbs
      },
      stubs: ['router-link']
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-breadcrumbs')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots when passed', () => {
    const previousCount = breadcrumbs.length - 1
    const wrapper = mount(ABreadcrumbs, {
      propsData: {
        breadcrumbs: breadcrumbs
      },
      slots: {
        previous: `
          <span class="a-breadcrumbs__link">Previous breadcrumb</span>
        `,
        separator: `
          <span class="a-breadcrumbs__separator">-</span>
        `,
        current: `
          <span class="a-breadcrumbs__item">Current breadcrumb</span>
        `
      }
    })

    expect(wrapper.findAll('.a-breadcrumbs__link')).toHaveLength(previousCount)
    expect(wrapper.find('.a-breadcrumbs__link').text()).toEqual('Previous breadcrumb')
    expect(wrapper.find('.a-breadcrumbs__separator').exists()).toBe(true)
    expect(wrapper.find('.a-breadcrumbs__separator').text()).toEqual('-')
    expect(wrapper.find('.a-breadcrumbs__item').exists()).toBe(true)
    expect(wrapper.find('.a-breadcrumbs__item').text()).toEqual('Current breadcrumb')
  })
})
