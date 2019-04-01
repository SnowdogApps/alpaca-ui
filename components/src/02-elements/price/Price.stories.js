import { storiesOf } from '@storybook/vue'

import AlpacaPrice from './Price.vue'

import price from './mocks/price.json'

storiesOf('Elements/Price', module)
  .add('Default', () => ({
    data: () => ({
      price
    }),
    components: { AlpacaPrice },
    template: `
        <alpaca-price :price="price.default"/>
    `
  }))
  .add('Default -- Large', () => ({
    data: () => ({
      price
    }),
    components: { AlpacaPrice },
    template: `
        <alpaca-price
          :price="price.default"
          large
        />
    `
  }))
  .add('Special Price', () => ({
    components: { AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
        <alpaca-price :specialPrice="price.special"/>
    `
  }))
  .add('Old price', () => ({
    components: { AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
        <alpaca-price :oldPrice="price.old"/>
    `
  }))
  .add('With special price', () => ({
    components: { AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
        <alpaca-price
          :oldPrice="price.old"
          :specialPrice="price.special"
        />
    `
  }))
  .add('With special price -- Large', () => ({
    components: { AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
        <alpaca-price
          :oldPrice="price.old"
          :specialPrice="price.special"
          large
        />
    `
  }))
