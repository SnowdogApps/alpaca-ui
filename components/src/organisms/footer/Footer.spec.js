import { mount } from '@vue/test-utils'
import AFooter from './Footer.vue'

describe('Footer', () => {
  it('has default structure', () => {
    const wrapper = mount(AFooter)

    expect(wrapper.is('footer')).toBe(true)
    expect(wrapper.classes()).toContain('a-footer')
    expect(wrapper.classes().length).toBe(1)
  })
})
