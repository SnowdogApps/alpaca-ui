import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from '../../03-modules/header/mocks/menu.json'
import breadcrumbs from '../../02-elements/breadcrumbs/mocks/breadcrumbs.json'
import gallery from '../../03-modules/gallery/mocks/gallery.json';
import quantityUpdate from '../../03-modules/quantity-update/mocks/quantity.json'
import product from './mocks/product.json';

import App from '../../01-globals/app/App.vue'
import AlpacaProductView from './ProductView.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'

storiesOf('Views/ProductView', module)
  .addDecorator(StoryRouter())
  .add('Configurable', () => ({
    components: { App, AlpacaHeader, AlpacaProductView },
    data() {
      return {
        menu,
        breadcrumbs,
        gallery,
        product,
        quantityUpdate
      }
    },
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="./../images/logo/alpaca.svg"
          link="#"
        />
        <alpaca-product-view
          :breadcrumbs="breadcrumbs"
          :gallery="gallery"
          :product="product"
          :quantity-update="quantityUpdate"
        />
      </app>
    `
  }))
