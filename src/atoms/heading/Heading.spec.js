import { mount } from '@vue/test-utils'
import AHeading from './Heading.vue'

describe('Heading', () => {
  it('has default structure', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 1
      }
    })

    expect(wrapper.element.tagName).toBe('H1')
    expect(wrapper.classes()).toContain('a-heading')
    expect(wrapper.classes()).toContain('a-heading--first-level')
    expect(wrapper.classes().length).toBe(2)
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

  it('has custom tag when tag prop is set', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 2,
        tag: 'span'
      }
    })
    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('a-heading')
    expect(wrapper.classes()).toContain('a-heading--second-level')
    expect(wrapper.classes().length).toBe(2)
  })

  it('has correct level', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 5
      }
    })
    expect(wrapper.element.tagName).toBe('H5')
    expect(wrapper.classes()).toContain('a-heading')
    expect(wrapper.classes()).toContain('a-heading--fifth-level')
    expect(wrapper.classes().length).toBe(2)
  })
})
