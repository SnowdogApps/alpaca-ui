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

import menu from './mocks/menu.json'
import miniCart from '../mini-cart/mocks/mini-cart.json'
import wishlistProducts from '../wishlist/mocks/products.json'

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
      miniCart,
      wishlistProducts
    }),
    template: `
      <app>
        <alpaca-header
          :menu="menu"
          src="../../images/logo/alpaca.svg"
          link="#"
          @toggleMicrocart="toggleMicrocart"
          @toggleWishlist="toggleWishlist"
          @goToAccount="showRegister"
        />
        <alpaca-modal
          ref="registerModal"
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
          ref="cartSidebar"
          heading="Shipping Cart"
        >
          <alpaca-mini-cart
            :products="miniCart.products"
            :totals="miniCart.totals"
            summary-title="Shopping summary"
            go-to-checkout-button="Go to Checkout"
            return-to-shopping-button="Return to shopping"
          />
        </alpaca-off-canvas-sidebar>
        <alpaca-off-canvas-sidebar
          ref="wishlistSidebar"
          heading="Wishlist"
        >
          <alpaca-wishlist :products="wishlistProducts" />
        </alpaca-off-canvas-sidebar>
      </app>
    `,
    methods: {
      showRegister() {
        this.$refs.registerModal.show()
      },
      toggleMicrocart() {
        this.$refs.cartSidebar.show()
      },
      toggleWishlist() {
        this.$refs.wishlistSidebar.show()
      },
      login: action('Login'),
      goToRegister: action('Go to Register')
    }
  }))
