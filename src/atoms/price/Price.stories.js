import { text } from '@storybook/addon-knobs'

import APrice from './Price.vue'

export default {
  title: 'Atoms/Price',
  component: APrice
}

export const Default = () => ({
  components: { APrice },
  props: {
    regularPriceKnobs: {
      default: text('Regular price', '36,00')
    }
  },
  template: '<a-price :regular-price="regularPriceKnobs"/>'
})

export const SpecialPrice = () => ({
  components: { APrice },
  props: {
    regularPriceKnobs: {
      default: text('Old price', '$36,00')
    },
    specialPriceKnobs: {
      default: text('Special price', '$19,90')
    }
  },
  template: `
    <a-price
      :regular-price="regularPriceKnobs"
      :special-price="specialPriceKnobs"
      aria-label-special-price="On sale at:"
      aria-label-old-price="Price reduced from:"
    />
  `
})

export const Blue = () => ({
  components: { APrice },
  props: {
    regularPriceKnobs: {
      default: text('Old price', '$36,00')
    },
    specialPriceKnobs: {
      default: text('Special price', '$19,90')
    }
  },
  template: `
    <a-price
      variant="blue"
      :regular-price="regularPriceKnobs"
      :special-price="specialPriceKnobs"
      aria-label-special-price="On sale at:"
      aria-label-old-price="Price reduced from:"
      :styles="{
        base: {
          price: ['text-lg', 'font-bold'],
          price__old: ['mr-3', 'text-xs', 'md:text-sm', 'font-normal', 'line-through'],
          price__special: ['text-red', 'no-underline']
        },
        blue: {
          price: '',
          price__old: ['text-blue'],
          price__special: 'text-red no-underline'
        }
      }"
    />
  `
})
