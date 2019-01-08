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
        <alpaca-price
          :value="data[0].value"
          :currency="data[0].currency"
        />
      </app>
    `
  }))
  .add('With prefix', () => ({
    data: () => ({
      data
    }),
    components: { App, AlpacaPrice },
    template: `
      <app>
        <alpaca-price
          :value="data[0].value"
          :prefix="data[0].prefix"
        />
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
        <alpaca-price
          special
          :value="data[0].value"
          :currency="data[0].currency"
        />
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
        <alpaca-price
          old
          :value="data[0].value"
          :currency="data[0].currency"
        />
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
          old
          :value="data[0].value"
          :currency="data[0].currency"
        />
        &nbsp;
        <alpaca-price
          special
          :value="data[1].value"
          :currency="data[1].currency"
        />
      </app>
    `
  }))



