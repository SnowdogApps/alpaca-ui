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
    },
    oldPriceCustomClass: {
      default: text('Old price custom class', '')
    },
    specialPriceCustomClass: {
      default: text('Special price custom class', '')
    }
  },
  template: `
    <a-price
      :regular-price="regularPriceKnobs"
      :special-price="specialPriceKnobs"
      :old-price-custom-class="oldPriceCustomClass"
      :special-price-custom-class="specialPriceCustomClass"
      aria-label-special-price="On sale at:"
      aria-label-old-price="Price reduced from:"
    />
  `
})
