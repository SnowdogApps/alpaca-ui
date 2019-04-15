import { mount } from 'vue-test-utils'
import AButton from './Button.vue'

 describe('Button.spec.js', () => {
  it('has default structure', () => {
    const wrapper = mount(AButton)

    expect(wrapper.is("button")).toBe(true)
    expect(wrapper.attributes().type).toBeDefined()
    expect(wrapper.attributes().type).toBe('button')
    expect(wrapper.classes()).toContain('button1')
  })

  it("renders slot text when passed", () => {
    const wrapper = mount(AButton, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })
    expect(wrapper.find('.button span').exists()).toBe(true)
    expect(wrapper.find(".button span").text()).toEqual('Alpaca UI')
  })
})
