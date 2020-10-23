import { text, select } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Price.selectors.json'

import APrice from './Price.vue'

const variantsKnobsConfig = getClassKnobsConfig(selectorsConfig)

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
    variantKnobs: {
      default: select('Variant', variantsKnobsConfig)
    },
    regularPriceKnobs: {
      default: text('Old price', '$36,00')
    },
    specialPriceKnobs: {
      default: text('Special price', '$19,90')
    }
  },
  template: `
    <a-price
      :variant="variantKnobs"
      :regular-price="regularPriceKnobs"
      :special-price="specialPriceKnobs"
      aria-label-special-price="On sale at:"
      aria-label-old-price="Price reduced from:"
    />
  `
})
