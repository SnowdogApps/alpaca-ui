import { mount } from '@vue/test-utils'
import AModal from './Modal.vue'

describe('Modal', () => {
  it('has default structure', () => {
    const wrapper = mount(AModal, {
      propsData: {
        name: 'Test modal'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-modal')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.find('.a-modal__content').exists()).toBe(true)
  })

  // it('renders slot text when passed', () => {
  //   const wrapper = mount(AModal, {
  //     slots: {
  //       item: `<span data-test="item">Sample text</span>`
  //     }
  //   })

  //   expect(wrapper.find('.a-rating > button > span').exists()).toBe(true)
  //   expect(wrapper.find('.a-rating > button > span').text()).toEqual('Sample text')
  // })

  // it('should return chosen value', () => {
  //   const wrapper = mount(AModal, {
  //     propsData: {
  //       items: 1,
  //       buttonClass: 'button-class'
  //     }
  //   })

  //   const item = wrapper.find('.a-rating__button')
  //   item.trigger('click')
  //   expect(wrapper.find('.a-rating__button').classes()).toContain('selected')
  //   expect(wrapper.props().buttonClass).toBe('button-class')
  //   expect(wrapper.find('.a-rating > button').classes()).toContain('button-class')
  //   expect(item.is('.a-rating > button')).toBe(true)
  // })
})
