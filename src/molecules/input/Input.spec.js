import { mount } from '@vue/test-utils'
import AInput1 from './Input.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput1)

    expect(wrapper.is('div')).toBe(true)
    // expect(wrapper.classes()).toContain('a-input')
    // expect(wrapper.classes().length).toBe(1)
    // expect(input.is('input')).toBe(true)
    // expect(input.classes()).toContain('a-input__field')
    // expect(input.classes().length).toBe(1)
  })

  // it('renders text input when type set to text', () => {
  //   const wrapper = mount(AInput, {
  //     propsData: {
  //       type: 'text'
  //     }
  //   })
  //   const input = wrapper.find('.a-input')
  //   expect(input.attributes('type')).toBe('text')
  // })

  // it('is disabled when disabled = true', () => {
  //   const wrapper = mount(AInput, {
  //     propsData: {
  //       disabled: true
  //     }
  //   })
  //   const input = wrapper.find('.a-input')
  //   expect(!!input.attributes('disabled')).toBe(true)
  //   expect(input.element.disabled).toBe(true)
  // })

  // it('emits an input event', () => {
  //   const wrapper = mount(AInput)
  //   const textInput = wrapper.find('input')
  //   textInput.setValue('Sample text')
  //   textInput.trigger('input')

  //   expect(wrapper.emitted('input')).toBeDefined()
  //   expect(wrapper.emitted().input[0].length).toEqual(1)
  //   expect(wrapper.emitted().input[0][0]).toEqual('Sample text')
  // })
})

// import { mount } from '@vue/test-utils'
// import AInputWrapper from './InputWrapper.vue'

// describe('Input wrapper', () => {
//   it('has default structure', () => {
//     const wrapper = mount(AInputWrapper, {
//       slots: {
//         default: `<input type="text" id="input-1">`
//       }
//     })
//     expect(wrapper.is('div')).toBe(true)
//     expect(wrapper.classes()).toContain('a-input-wrapper')
//     expect(wrapper.classes().length).toBe(1)
//   })

//   it('renders slots content when passed', () => {
//     const wrapper = mount(AInputWrapper, {
//       slots: {
//         default: `<input type="text" id="input-1">`,
//         label: `<label for="input-1">Alpaca UI</label>`
//       }
//     })
//     const label = wrapper.find('.a-input-wrapper > label')
//     expect(label.exists()).toBe(true)
//     expect(label.text()).toEqual('Alpaca UI')
//   })
// })
