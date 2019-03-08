import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'
import AlpacaLogin from '../../03-modules/login/Login.vue'
import AlpacaMiniCart from '../../03-modules/mini-cart/MiniCart.vue'
import AlpacaWishlist from '../../03-modules/wishlist/Wishlist.vue'
import AlpacaOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

import EventBus from '../../../eventBus'

import menu from './mocks/menu.json'
import products from '../../../mocks/products'
import totals from '../../../mocks/totals'

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: {
      App,
      AlpacaHeader,
      AlpacaModal,
      AlpacaLogin,
      AlpacaOffCanvasSidebar,
      AlpacaMiniCart,
      AlpacaWishlist
    },
    data: () => ({
      menu,
      products,
      totals,
      quantity: {
        text: 'Qty:',
        label: ''
      }
    }),
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="../../images/logo/alpaca.svg"
          link="#"
          @toggleMicrocart="showMiniCart"
          @toggleWishlist="toggleWishlist"
          @goToAccount="showRegister"
        />
        <alpaca-modal
          name="register"
          heading="Registred Customers"
        >
          <alpaca-login
            legend="Login form"
            forget-password-text="Forgot your password?"
            forget-password-link="#"
            submit-button="Sign In"
            go-to-register-button="or register an account"
            @login="login"
            @goToRegister="goToRegister"
          />
        </alpaca-modal>
        <alpaca-off-canvas-sidebar
          name="mini-cart"
          heading="Shipping Cart"
        >
          <alpaca-mini-cart
            :products="products"
            :totals="totals"
            :quantity="quantity"
            summary-title="Shopping summary"
            remove-button="Remove button"
            go-to-checkout-button="Go to Checkout"
            return-to-shopping-button="Return to shopping"
          />
        </alpaca-off-canvas-sidebar>
        <alpaca-off-canvas-sidebar
          name="wishlist"
          heading="Wishlist"
        >
          <alpaca-wishlist :products="products" />
        </alpaca-off-canvas-sidebar>
      </app>
    `,
    methods: {
      showRegister() {
        EventBus.$emit('modal-show', 'register')
      },
      showMiniCart() {
        EventBus.$emit('sidebar-show', 'mini-cart')
      },
      toggleWishlist() {
        EventBus.$emit('sidebar-show', 'wishlist')
      },
      login: action('Login'),
      goToRegister: action('Go to Register')
    }
  }))
