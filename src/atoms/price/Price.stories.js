import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import APrice from './Price.vue'

storiesOf('Atoms/Price', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { APrice },
    props: {
      regularPriceKnobs: {
        default: text('Regular price', '$36,00')
      }
    },
    template: `<a-price :regular-price="regularPriceKnobs" />`
  }))
  .add('Special Price', () => ({
    components: { APrice },
    props: {
      regularPriceKnobs: {
        default: text('Regular price', '$36,00')
      },
      specialPriceKnobs: {
        default: text('Special price', '$19,90')
      }
    },
    template: `
      <a-price
        :regular-price="regularPriceKnobs"
        :special-price="specialPriceKnobs"
        aria-label-special-price="Special price:"
        aria-label-old-price="Old price:"
      />
    `
  }))
  .add('With slot', () => ({
    components: { APrice },
    template: `
      <a-price>
        <template #regularPrice>
          Price: <span style="color: #2b15e0;">$123</span>
        </template>
      </a-price>
    `
  }))
