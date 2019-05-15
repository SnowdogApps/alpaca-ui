import { mount } from '@vue/test-utils'
import APasswordStrength from './PasswordStrength.vue'

describe('PasswordStrength', () => {
  it('has default structure', () => {
    const wrapper = mount(APasswordStrength)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-password-strength')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders label when label prop provided', () => {
    const wrapper = mount(APasswordStrength, {
      propsData: {
        label: 'Passworf strength'
      }
    })

    expect(wrapper.contains('span')).toBe(true)
    expect(wrapper.findAll('span').length).toBe(2)
    expect(wrapper.find('.a-password-strength__label').exists()).toBe(true)
    expect(wrapper.find('.a-password-strength__label').text()).toEqual('Passworf strength:')
  })

  it('does not renders label when label prop empty', () => {
    const wrapper = mount(APasswordStrength, {
      propsData: {
        label: ''
      }
    })

    expect(wrapper.findAll('span').length).toBe(1)
    expect(wrapper.find('.a-password-strength__label').exists()).toBe(false)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(APasswordStrength, {
      slots: {
        default: 'Passworf strength'
      }
    })

    expect(wrapper.find('.a-password-strength__indicator').exists()).toBe(true)
    expect(wrapper.find('.a-password-strength__indicator').text()).toEqual('Passworf strength')
  })
})
