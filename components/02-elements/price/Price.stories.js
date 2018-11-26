import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaPrice from './Price.vue'
import data from './mocks/price.json';

storiesOf('Elements/Price', module)
  .add('Default', () => ({
    data() {
      const priceData = {
          ...data.variants.special.price
      };
      return {
        price: priceData,
        ariaLabel: {
            "old": "Price reduced from: " + priceData.regularPrice.amount.value + priceData.regularPrice.amount.currency,
            "special": "Sale starts at: " + priceData.specialPrice.amount.value + priceData.specialPrice.amount.currency
        }
      }
    },
    components: { App, AlpacaPrice },
    template: `
      <app>
        <alpaca-price type="default">
          {{ price.regularPrice.amount.currencySymbol }} {{ price.regularPrice.amount.value }}
        </alpaca-price>
      </app>
    `
  }))
  .add('Special Price', () => ({
    components: { App, AlpacaPrice },
    data() {
      const priceData = {
          ...data.variants.special.price
      };
      return {
        price: priceData,
        ariaLabel: {
            "special": "Sale starts at: " + priceData.specialPrice.amount.value + priceData.specialPrice.amount.currency
        }
      }
    },
    template: `
      <app>
        <alpaca-price
          type="special"
        >
          <ins :aria-label="ariaLabel.special">
            {{ price.specialPrice.amount.currencySymbol }} {{ price.specialPrice.amount.value }}
          </ins>
        </alpaca-price>
      </app>
    `
  }))
  .add('Old price', () => ({
    components: { App, AlpacaPrice },
    data() {
      const priceData = {
          ...data.variants.special.price
      };
      return {
        price: priceData,
        ariaLabel: {
            "old": "Price reduced from: " + priceData.regularPrice.amount.value + priceData.regularPrice.amount.currency,
        }
      }
    },
    template: `
      <app>
        <alpaca-price
          type="old"
        >
          <del :aria-label="ariaLabel.old">
            {{ price.regularPrice.amount.currencySymbol }} {{ price.regularPrice.amount.value }}
          </del>
        </alpaca-price>
      </app>
    `
  }));


