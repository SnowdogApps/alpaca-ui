import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'

import menu from './mocks/menu.json'

storiesOf('Modules/Header', module)
.addDecorator(StoryRouter())
.add('Default', () => ({
  components: { App, AlpacaHeader },
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
        @goToAccount="goToAccount"
      />
    </app>
  `,
  methods: {
    toggleMicrocart: action('toggle Microcart'),
    toggleWishlist: action('toggle Wishlist'),
    goToAccount: action('go to Account')
  }
}))
