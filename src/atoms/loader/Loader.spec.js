import { mount } from '@vue/test-utils'
import ALoader from './Loader.vue'

describe('Loader', () => {
  it('has default structure', () => {
    const wrapper = mount(ALoader)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
