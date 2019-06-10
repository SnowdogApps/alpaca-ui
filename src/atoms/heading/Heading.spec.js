import { mount } from '@vue/test-utils'
import AHeading from './Heading.vue'

describe('Heading', () => {
  it('has default structure', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 1
      }
    })

    expect(wrapper.is('h1')).toBe(true)
    expect(wrapper.classes()).toContain('a-heading')
    expect(wrapper.classes()).toContain('a-heading--first-level')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 1
      },
      slots: {
        default: `
          <span>Heading level 1</span>
        `
      }
    })

    expect(wrapper.find('.a-heading span').exists()).toBe(true)
    expect(wrapper.find('.a-heading span').text()).toEqual('Heading level 1')
  })
})
