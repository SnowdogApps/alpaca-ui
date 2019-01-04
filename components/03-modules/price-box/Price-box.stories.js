import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaPrice from '../../02-elements/price/Price.vue'
import AlpacaPriceBox from './Price-box.vue'
import data from './mocks/price-box.json'

storiesOf('Modules/PriceBox', module)
  .add('Default', () => ({
    data: () => ({ price: data.variants.default.price }),
    components: { App, AlpacaPrice, AlpacaPriceBox },
    template: `
      <app>
        <alpaca-price-box>
            <alpaca-price>
              {{ price.regularPrice.amount.currencySymbol }} {{ price.regularPrice.amount.value }}
            </alpaca-price>
        </alpaca-price-box>
      </app>
    `
  }))
  .add('With Special Price', () => ({
    data() {
      const priceData = data.variants.special.price;
      return {
        price: priceData,
        ariaLabel: {
            "old": "Price reduced from: " + priceData.regularPrice.amount.value + priceData.regularPrice.amount.currency,
            "special": "Sale starts at: " + priceData.specialPrice.amount.value + priceData.specialPrice.amount.currency
        }
      }
    },
    components: { App, AlpacaPrice, AlpacaPriceBox },
    template: `
      <app>
        <alpaca-price-box>
            <alpaca-price
              old
            >
              <del :aria-label="ariaLabel.old">
                {{ price.regularPrice.amount.currencySymbol }} {{ price.regularPrice.amount.value }}
              </del>
            </alpaca-price>
            
            <alpaca-price
              special
            >
              <ins :aria-label="ariaLabel.special">
                {{ price.specialPrice.amount.currencySymbol }} {{ price.specialPrice.amount.value }}
              </ins>
            </alpaca-price>
        </alpaca-price-box>
      </app>
    `
  }));
