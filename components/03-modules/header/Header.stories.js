import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'
import AlpacaRegister from '../../03-modules/register/Register.vue'

import menu from './mocks/menu.json'

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaHeader, AlpacaModal, AlpacaRegister },
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
        <alpaca-modal ref="registerModal" :max-width="500">
          <alpaca-register
            mainHeading="Create new customer account"
            personalSectionText="Personal information"
            signInSectionText="Sign-In information"
            buttonText="Create an Account"
            @register="register"
          />
        </alpaca-modal>
      </app>
    `,
    methods: {
      showRegister() {
        this.$refs.registerModal.show()
      },
      register: action('Register'),
      toggleMicrocart: action('toggle Microcart'),
      toggleWishlist: action('toggle Wishlist')
    }
  }))
