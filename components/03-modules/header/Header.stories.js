import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'
import AlpacaLogin from '../../03-modules/login/Login.vue'

import menu from './mocks/menu.json'

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaHeader, AlpacaModal, AlpacaLogin },
    data: () => ({
      menu
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
            link-heading="New Customer"
            legend=""
            forget-password-text="Forgot your password?"
            forget-password-link="#"
            go-to-register-button="or register an account"
            @login="login"
            @goToRegister="goToRegister"
          />
        </alpaca-modal>
      </app>
    `,
    methods: {
      showRegister() {
        this.$refs.registerModal.show()
      },
      login: action('Login'),
      goToRegister: action('Go to Register'),
      toggleMicrocart: action('toggle Microcart'),
      toggleWishlist: action('toggle Wishlist')
    }
  }))
