import { storiesOf } from '@storybook/vue'

import APrice from './Price.vue'

import price from './mocks/price.json'

storiesOf('Elements/Price', module)
  .add('Default', () => ({
    data: () => ({
      price
    }),
    components: { APrice },
    template: `
        <a-price :price="price.default"/>
    `
  }))
  .add('Default -- Large', () => ({
    data: () => ({
      price
    }),
    components: { APrice },
    template: `
        <a-price
          :price="price.default"
          large
        />
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
          large
        />
    `
  }))
