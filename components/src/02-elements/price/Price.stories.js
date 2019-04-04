import { storiesOf } from '@storybook/vue'

import APrice from './Price.vue'

import price from './mocks/price.json'

const info = `
  ---
  #### Use these modifiers with \`.price\` class.
  - \`.price--large\` - Selector for use large price
  - \`.label--hidden\` - Selector for applying hidden styles, mainly used for accessibility purposes
  ---
`

storiesOf('Elements/Price', module)
  .addParameters({ info })
  .add('Default', () => ({
    data: () => ({
      price
    }),
    components: { APrice },
    template: `
        <a-price>
          <span>{{ price.default }}</span>
        </a-price>
    `
  }))
  .add('Default -- Large', () => ({
    data: () => ({
      price
    }),
    components: { APrice },
    template: `
        <a-price class="price--large">
          <span>{{ price.default }}</span>
        </a-price>
    `
  }))
  .add('Special Price', () => ({
    components: { APrice },
    data: () => ({
      price
    }),
    template: `
        <a-price :specialPrice="price.special"/>
    `
  }))
  .add('Old price', () => ({
    components: { APrice },
    data: () => ({
      price
    }),
    template: `
        <a-price :oldPrice="price.old"/>
    `
  }))
  .add('With special price', () => ({
    components: { APrice },
    data: () => ({
      price
    }),
    template: `
        <a-price
          :oldPrice="price.old"
          :specialPrice="price.special"
        />
    `
  }))
  .add('With special price -- Large', () => ({
    components: { APrice },
    data: () => ({
      price
    }),
    template: `
        <a-price
          :oldPrice="price.old"
          :specialPrice="price.special"
          class="price--large"
        />
    `
  }))
