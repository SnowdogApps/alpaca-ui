import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from '../../03-modules/header/mocks/menu.json'
import breadcrumbs from '../../02-elements/breadcrumbs/mocks/breadcrumbs.json'
import briefInfo from '../../03-modules/brief-info/mocks/brief-info.json'
import gallery from '../../03-modules/gallery/mocks/gallery.json';
import product from './mocks/product.json';

import App from '../../01-globals/app/App.vue'
import AlpacaProductView from './ProductView.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'

storiesOf('Views/Product View', module)
  .addDecorator(StoryRouter())
  .add('Configurable', () => ({
    components: { App, AlpacaHeader, AlpacaProductView },
    data() {
      return {
        menu,
        breadcrumbs,
        briefInfo,
        gallery,
        product
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
          :brief-info="briefInfo"
          :gallery="gallery"
          :product="product"
        />
      </app>
    `
  }))
