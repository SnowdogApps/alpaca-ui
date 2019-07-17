import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import ALabel from '../../atoms/label/Label.vue'
import AHeader from './Header.vue'
import ALogin from '../../03-modules/login/Login.vue'
import AMiniCart from '../../03-modules/mini-cart/MiniCart.vue'
import AWishlist from '../../03-modules/wishlist/Wishlist.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'
import AModal from '../../molecules/modal/Modal.vue'
import AOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

import menu from './mocks/menu'
import sideMenu from '../../../mocks/slide-menu'
import products from '../../../mocks/products'
import totals from '../../../mocks/totals'

// todo: add product item component to story

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: {
      ALabel,
      AHeader,
      ALogin,
      AOffCanvasSidebar,
      AMiniCart,
      AWishlist,
      AQuantityUpdate,
      AModal
    },
    data: () => ({
      menu,
      sideMenu,
      products,
      totals,
      quantity: {
        text: 'Qty:',
        label: ''
      },
      isModalVisible: false
    }),
    methods: {
      showRegister () {
        this.isModalVisible = true
      },
      showMiniCart () {
        this.$refs.modalMiniCart.show('mini-cart')
      },
      toggleWishlist () {
        this.$refs.modalWishlist.show('wishlist')
      },
      login: action('Login'),
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      goToRegister: action('Go to Register')
    },
    template: `
      <div>
        <a-header
          :menu="menu"
          :side-menu="sideMenu"
          src="../../images/logo/alpaca.svg"
          link="#"
          @toggleMicrocart="showMiniCart"
          @toggleWishlist="toggleWishlist"
          @goToAccount="showRegister"
        />
        <a-modal
          :visible="isModalVisible"
          @close="isModalVisible = false"
          heading="Registred Customers"
        >
          <a-login
            legend="Login form"
            forget-password-text="Forgot your password?"
            forget-password-link="#"
            submit-button="Sign In"
            go-to-forgot-password-button=""
            go-to-register-button="or register an account"
            @login="login"
            @goToRegister="goToRegister"
          />
        </a-modal>
        <a-off-canvas-sidebar
          name="mini-cart"
          ref="modalMiniCart"
          heading="Shipping Cart"
        >
          <a-mini-cart
            :products="products"
            :totals="totals"
            :quantity="quantity"
            summary-title="Shopping summary"
            remove-button="Remove button"
            go-to-checkout-button="Go to Checkout"
            return-to-shopping-button="Return to shopping"
          >
            <template #products>
              <!-- todo: add ProductListItem here -->
            </template>
           </a-mini-cart>
         </a-off-canvas-sidebar>
        <a-off-canvas-sidebar
          name="wishlist"
          ref="modalWishlist"
          heading="Wishlist"
        >
          <a-wishlist>
            <!-- todo: add ProductListItem here -->
          </a-wishlist>
         </a-off-canvas-sidebar>
      </div>
    `
  }))
