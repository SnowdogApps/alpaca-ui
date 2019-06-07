import { mount, RouterLinkStub } from '@vue/test-utils'
import AProductGridItem from './ProductGridItem.vue'

describe('Product Grid Item', () => {

  const sampleRequiredData = {
    id: 'prod1',
    name: 'Some product name - very long name because that\'s important',
    price: '',
    specialPrice: '$100,00',
    oldPrice: '$299,99',
    url: '#',
    imageUrl: '/images/catalog-grid-item/product-1_320_312.jpg',
    badgeText: 'Sale!'
  }

  it('has default structure', () => {
    const wrapper = mount(AProductGridItem, {
      propsData: sampleRequiredData,
      stubs: { 'router-link': RouterLinkStub }
    })

    expect(wrapper.classes()).toContain('a-product-grid-item')
    expect(wrapper.classes().length).toBe(2)
  })

  it('renders badge when text was passed', () => {
    const wrapper = mount(AProductGridItem, {
      propsData: sampleRequiredData,
      stubs: { 'router-link': RouterLinkStub }
    })

    expect(wrapper.find('.a-product-grid-item__badge').exists()).toBe(true)
    expect(wrapper.find('.a-product-grid-item__badge').text()).toEqual('Sale!')
  })
})
