import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import App from '../app/App.vue'
import AlpacaLogo from './Logo.vue'

storiesOf('Elements/Logo', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaLogo },
    template: `
      <app>
        <alpaca-logo
          src="/images/logo/alpaca.svg"
          to="/"
        />
      </app>
    `
  }))
