import { mount } from '@vue/test-utils'
import ABlockquote from './Blockquote.vue'

describe('Blockquote', () => {
  it('has default structure', () => {
    const wrapper = mount(ABlockquote)

    expect(wrapper.element.tagName).toBe('BLOCKQUOTE')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ABlockquote, {
      slots: {
        default: 'Blockquote content'
      }
    })

    expect(wrapper.find('blockquote').exists()).toBe(true)
    expect(wrapper.find('blockquote').text()).toEqual('Blockquote content')
  })
})
