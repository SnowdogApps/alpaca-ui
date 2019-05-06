import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import ALabel from '../../atoms/label/Label.vue'
import AHeader from './Header.vue'
import AModal from '../../03-modules/modal/Modal.vue'
import ALogin from '../../03-modules/login/Login.vue'
import AMiniCart from '../../03-modules/mini-cart/MiniCart.vue'
import AWishlist from '../../03-modules/wishlist/Wishlist.vue'
import AQuantityUpdate from '../../organisms/quantity-update/QuantityUpdate.vue'
import AProductItem from '../../03-modules/product-item/ProductItem.vue'
import AOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

import menu from './mocks/menu'
import sideMenu from '../../../mocks/slide-menu'
import products from '../../../mocks/products'
import totals from '../../../mocks/totals'

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: {
      ALabel,
      AHeader,
      AModal,
      ALogin,
      AOffCanvasSidebar,
      AMiniCart,
      AWishlist,
      AQuantityUpdate,
      AProductItem
    },
    data: () => ({
      menu,
      sideMenu,
      products,
      totals,
      quantity: {
        text: 'Qty:',
        label: ''
      }
    }),
    methods: {
      showRegister () {
        this.$refs.modalRegister.show('register')
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
          name="register"
          ref="modalRegister"
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
              <a-product-item
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :url="product.url"
                :image="product.image"
                :price="product.price"
                :special-price="product.specialPrice"
                :old-price="product.oldPrice"
                :options="product.options"
                remove-button="Remove button"
                item-tag="li"
                class="minicart__product-item"
                @remove="removeMethod(product.id)"
              >
                <template #quantity>
                  <a-quantity-update
                    :value="3"
                    class="product-item__qty"
                    :input-id="'qty' + product.id"
                    decrement-aria-label="Decrease the quantity"
                    decrement-icon-title="Minus mark"
                    increment-aria-label="Increase the quantity"
                    increment-icon-title="Plus mark"
                    @update="changeMethod"
                  >
                    <template #label>
                      <a-label
                        class="product-item__qty-label"
                        :for="'qty' + product.id"
                      >
                        Qty:
                      </a-label>
                    </template>
                  </a-quantity-update>
                </template>
               </a-product-item>
            </template>
           </a-mini-cart>
         </a-off-canvas-sidebar>
        <a-off-canvas-sidebar
          name="wishlist"
          ref="modalWishlist"
          heading="Wishlist"
        >
          <a-wishlist :products="products" />
         </a-off-canvas-sidebar>
      </div>
    `
  }))
