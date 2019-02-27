import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import App from '../../01-globals/app/App.vue'
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
