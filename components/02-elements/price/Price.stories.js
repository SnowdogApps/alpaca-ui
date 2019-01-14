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
        <alpaca-price>
          {{ data[0].value }}
        </alpaca-price>
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
          specialPrice
        >
           <template slot="specialPrice">
             {{ data[0].value }}
          </template>
        </alpaca-price>
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
          oldPrice
        >
          <template slot="oldPrice">
             {{ data[0].value }}
          </template>
        </alpaca-price>
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
          oldPrice
          specialPrice
        >
         <template slot="oldPrice">
          {{ data[0].value }}
          </template>
          
           <template slot="specialPrice">
             {{ data[1].value }}
          </template>
        </alpaca-price>

      </app>
    `
  }))



