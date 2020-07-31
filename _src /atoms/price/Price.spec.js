import { mount } from '@vue/test-utils'
import APrice from './Price.vue'

describe('Price', () => {
  it('has default structure', () => {
    const wrapper = mount(APrice)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-price')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders regular price when props regularPrice passed', () => {
    const wrapper = mount(APrice, {
      propsData: {
        regularPrice: '$128,00'
      }
    })

    expect(wrapper.text()).toEqual('$128,00')
  })

  it('renders old and special prices when props regularPrice and specialPrice passed', () => {
    const wrapper = mount(APrice, {
      propsData: {
        regularPrice: '$128,00',
        specialPrice: '$99,00'
      }
    })

    const oldPrice = wrapper.find('.a-price__old')
    const specialPrice = wrapper.find('.a-price__special')

    expect(oldPrice.exists()).toBe(true)
    expect(oldPrice.is('del')).toBe(true)
    expect(oldPrice.text()).toEqual('$128,00')

    expect(specialPrice.exists()).toBe(true)
    expect(specialPrice.is('ins')).toBe(true)
    expect(specialPrice.text()).toEqual('$99,00')
  })

  it('renders named slot regularPrice when passed', () => {
    const wrapper = mount(APrice, {
      slots: {
        regularPrice: '<span>Price: $123,00</span>'
      }
    })

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Price: $123,00')
  })

  it('renders custom classes when passed', () => {
    const wrapper = mount(APrice, {
      propsData: {
        regularPrice: '$128,00',
        specialPrice: '$99,00',
        oldPriceCustomClass: 'old-price-custom-class',
        specialPriceCustomClass: 'special-price-custom-class'
      }
    })

    expect(wrapper.find('.a-price__old').classes()).toContain('old-price-custom-class')
    expect(wrapper.find('.a-price__special').classes()).toContain('special-price-custom-class')
  })
})
