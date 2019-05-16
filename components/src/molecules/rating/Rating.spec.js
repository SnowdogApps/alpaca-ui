import { mount } from '@vue/test-utils'
import ARating from './Rating.vue'

describe('Rating', () => {
  it('has default structure', () => {
    const wrapper = mount(ARating)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-rating')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ARating, {
      slots: {
        item: `<span data-test="item">x</span>`
      }
    })

    expect(wrapper.find('.a-rating > button > span').exists()).toBe(true)
  })
})
