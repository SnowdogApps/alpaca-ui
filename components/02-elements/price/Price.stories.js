import { storiesOf } from '@storybook/vue'

import data from './mocks/price.json'

import App from '../../01-globals/app/App.vue'
import AlpacaPrice from './Price.vue'

storiesOf('Elements/Price', module)
  .add('Default', () => ({
    data: () => ({
      data
    }),
    components: { App, AlpacaPrice },
    template: `
      <app>
        <alpaca-price :price="data[0].value"/>
      </app>
    `
  }))
  .add('Special Price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-price :specialPrice="data[0].value"/>
      </app>
    `
  }))
  .add('Old price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-price :oldPrice="data[0].value"/>
      </app>
    `
  }))
  .add('With special price', () => ({
    components: { App, AlpacaPrice },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-price
          :oldPrice="data[0].value"
          :specialPrice="data[1].value"
        />
      </app>
    `
  }))



