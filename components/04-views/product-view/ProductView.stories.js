import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import menu from '../../03-modules/header/mocks/menu.json'

import App from '../../01-globals/app/App.vue'
import AlpacaProductView from './ProductView.vue'
import AlpacaHeader from '../../03-modules/header/Header.vue'

storiesOf('Views/ProductView', module)
  .addDecorator(StoryRouter())
  .add('Configurable', () => ({
    components: { App, AlpacaHeader, AlpacaProductView },
    data() {
      return {
        menu
      }
    },
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="./../images/logo/alpaca.svg"
          link="#"
        />
        <alpaca-product-view/>
      </app>
    `
  }))
