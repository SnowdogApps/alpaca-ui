import { storiesOf } from '@storybook/vue'

import price from './mocks/price.json'

import App from '../../01-globals/app/App.vue'
import AlpacaPrice from './Price.vue'

storiesOf('Elements/Price', module)
  .add('Default', () => ({
    data: () => ({
      price
    }),
    components: { App, AlpacaPrice },
    template: `
      <app>
        <alpaca-price :price="price.default"/>
      </app>
    `
  }))
  .add('Default -- Large', () => ({
    data: () => ({
      price
    }),
    components: { App, AlpacaPrice },
    template: `
      <app>
        <alpaca-price
          :price="price.default"
          large
        />
      </app>
    `
  }))
  .add('Special Price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
      <app>
        <alpaca-price :specialPrice="price.special"/>
      </app>
    `
  }))
  .add('Old price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
      <app>
        <alpaca-price :oldPrice="price.old"/>
      </app>
    `
  }))
  .add('With special price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
      <app>
        <alpaca-price
          :oldPrice="price.old"
          :specialPrice="price.special"
        />
      </app>
    `
  }))
  .add('With special price -- Large', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      price
    }),
    template: `
      <app>
        <alpaca-price
          :oldPrice="price.old"
          :specialPrice="price.special"
          large
        />
      </app>
    `
  }))
